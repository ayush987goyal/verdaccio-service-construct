import * as fs from 'fs';
import * as path from 'path';
import * as acm from '@aws-cdk/aws-certificatemanager';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecsPatterns from '@aws-cdk/aws-ecs-patterns';
import * as efs from '@aws-cdk/aws-efs';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';
import * as route53 from '@aws-cdk/aws-route53';
import * as route53Targets from '@aws-cdk/aws-route53-targets';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
import * as cdk from '@aws-cdk/core';
import * as YAML from 'yaml';

const VERDACCIO_CONTAINER_NAME = 'verdaccio';
const VERDACCIO_EFS_VOLUME_NAME = 'verdaccio-efs';

export interface VerdaccioServiceProps {
  readonly verdaccioConfig: any;
  readonly customHostedZone?: route53.PublicHostedZone;
  readonly customHostedZoneCertificate?: acm.Certificate;
}

export class VerdaccioService extends cdk.Construct {
  readonly verdaccioHTPasswordSecret: secretsmanager.Secret;
  readonly fargateService: ecsPatterns.NetworkLoadBalancedFargateService;
  readonly verdaccioEfsFileSystem: efs.FileSystem;

  constructor(parent: cdk.Construct, name: string, props: VerdaccioServiceProps) {
    super(parent, name);

    this.createVerdaccioConfigFile(props.verdaccioConfig);

    this.verdaccioHTPasswordSecret = new secretsmanager.Secret(
      this,
      'VerdaccioHTPasswordSecret',
    );

    this.fargateService = new ecsPatterns.NetworkLoadBalancedFargateService(
      this,
      'VerdaccioService',
      {
        cpu: 1024,
        memoryLimitMiB: 4096,
        taskImageOptions: {
          containerName: VERDACCIO_CONTAINER_NAME,
          image: ecs.ContainerImage.fromAsset(path.join(__dirname, 'assets')),
          secrets: {
            HTPASSWD: ecs.Secret.fromSecretsManager(
              this.verdaccioHTPasswordSecret,
            ),
          },
          containerPort: 4873,
        },
      },
    );
    this.configureAllowedPorts();

    if (props.customHostedZone && props.customHostedZoneCertificate) {
      this.configureTlsAndDomain(
        props.customHostedZoneCertificate,
        props.customHostedZone,
      );
    }

    this.verdaccioEfsFileSystem = this.createVerdaccioEfsFileSystem();

    this.configureContainerMountVolumes();
  }

  private createVerdaccioConfigFile(config: any) {
    const configYaml = YAML.stringify(config);
    fs.writeFileSync(path.join(__dirname, 'assets', 'config.yaml'), configYaml);
  }

  private configureAllowedPorts() {
    const allPorts = new ec2.Port({
      protocol: ec2.Protocol.TCP,
      fromPort: 0,
      toPort: 65535,
      stringRepresentation: 'All',
    });
    this.fargateService.service.connections.allowFromAnyIpv4(allPorts);
  }

  private configureTlsAndDomain(
    certificate: acm.Certificate,
    hostedZone: route53.PublicHostedZone,
  ) {
    this.fargateService.loadBalancer.addListener('HttpsListener', {
      port: 443,
      defaultTargetGroups: [this.fargateService.targetGroup],
      certificates: [
        elbv2.ListenerCertificate.fromCertificateManager(certificate),
      ],
    });

    new route53.ARecord(this, 'LoadBalancerARecord', {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(
        new route53Targets.LoadBalancerTarget(this.fargateService.loadBalancer),
      ),
    });
  }

  private createVerdaccioEfsFileSystem() {
    const efsSecurityGroup = new ec2.SecurityGroup(
      this,
      'VerdaccioEfsSecurityGroup',
      {
        vpc: this.fargateService.cluster.vpc,
      },
    );
    efsSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(2049),
      'Allow NFS traffic',
    );

    const fileSystem = new efs.FileSystem(this, 'VerdaccioEfsFileSystem', {
      vpc: this.fargateService.cluster.vpc,
      securityGroup: efsSecurityGroup,
    });

    return fileSystem;
  }

  private configureContainerMountVolumes() {
    this.fargateService.taskDefinition.addVolume({
      name: VERDACCIO_EFS_VOLUME_NAME,
      efsVolumeConfiguration: {
        fileSystemId: this.verdaccioEfsFileSystem.fileSystemId,
      },
    });

    const container = this.fargateService.taskDefinition.findContainer(
      VERDACCIO_CONTAINER_NAME,
    );
    container!.addMountPoints({
      sourceVolume: VERDACCIO_EFS_VOLUME_NAME,
      containerPath: '/verdaccio/storage',
      readOnly: false,
    });
  }
}

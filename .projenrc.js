const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayush Goyal',
  authorAddress: 'ayush987goyal@gmail.com',
  cdkVersion: '1.129.0',
  defaultReleaseBranch: 'main',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  name: 'verdaccio-service-construct',
  repositoryUrl: 'https://github.com/ayush987goyal/verdaccio-service-construct.git',

  cdkDependencies: [
    '@aws-cdk/aws-certificatemanager',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
    '@aws-cdk/aws-efs',
    '@aws-cdk/aws-elasticloadbalancingv2',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-route53-targets',
    '@aws-cdk/aws-secretsmanager',
    '@aws-cdk/core',
  ],
  deps: [
    'yaml',
    '@types/yaml',
  ],
  bundledDeps: [
    'yaml',
    '@types/yaml',
  ],
  gitignore: [
    'src/assets/config.yaml',
  ],

  autoApproveOptions: {
    allowedUsernames: ['ayush987goyal-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
});
project.synth();

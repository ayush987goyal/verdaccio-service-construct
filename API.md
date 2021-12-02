# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### VerdaccioService <a name="verdaccio-service-construct.VerdaccioService" id="verdaccioserviceconstructverdaccioservice"></a>

#### Initializers <a name="verdaccio-service-construct.VerdaccioService.Initializer" id="verdaccioserviceconstructverdaccioserviceinitializer"></a>

```typescript
import { VerdaccioService } from 'verdaccio-service-construct'

new VerdaccioService(parent: Construct, name: string, props: VerdaccioServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`parent`](#verdaccioserviceconstructverdaccioserviceparameterparent)<span title="Required">*</span> | [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct) | *No description.* |
| [`name`](#verdaccioserviceconstructverdaccioserviceparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#verdaccioserviceconstructverdaccioserviceparameterprops)<span title="Required">*</span> | [`verdaccio-service-construct.VerdaccioServiceProps`](#verdaccio-service-construct.VerdaccioServiceProps) | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.parent" id="verdaccioserviceconstructverdaccioserviceparameterparent"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `name`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.name" id="verdaccioserviceconstructverdaccioserviceparametername"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.props" id="verdaccioserviceconstructverdaccioserviceparameterprops"></a>

- *Type:* [`verdaccio-service-construct.VerdaccioServiceProps`](#verdaccio-service-construct.VerdaccioServiceProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fargateService`](#verdaccioserviceconstructverdaccioservicepropertyfargateservice)<span title="Required">*</span> | [`@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService`](#@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService) | *No description.* |
| [`verdaccioEfsFileSystem`](#verdaccioserviceconstructverdaccioservicepropertyverdaccioefsfilesystem)<span title="Required">*</span> | [`@aws-cdk/aws-efs.FileSystem`](#@aws-cdk/aws-efs.FileSystem) | *No description.* |
| [`verdaccioHTPasswordSecret`](#verdaccioserviceconstructverdaccioservicepropertyverdacciohtpasswordsecret)<span title="Required">*</span> | [`@aws-cdk/aws-secretsmanager.Secret`](#@aws-cdk/aws-secretsmanager.Secret) | *No description.* |

---

##### `fargateService`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.fargateService" id="verdaccioserviceconstructverdaccioservicepropertyfargateservice"></a>

```typescript
public readonly fargateService: NetworkLoadBalancedFargateService;
```

- *Type:* [`@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService`](#@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService)

---

##### `verdaccioEfsFileSystem`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.verdaccioEfsFileSystem" id="verdaccioserviceconstructverdaccioservicepropertyverdaccioefsfilesystem"></a>

```typescript
public readonly verdaccioEfsFileSystem: FileSystem;
```

- *Type:* [`@aws-cdk/aws-efs.FileSystem`](#@aws-cdk/aws-efs.FileSystem)

---

##### `verdaccioHTPasswordSecret`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.verdaccioHTPasswordSecret" id="verdaccioserviceconstructverdaccioservicepropertyverdacciohtpasswordsecret"></a>

```typescript
public readonly verdaccioHTPasswordSecret: Secret;
```

- *Type:* [`@aws-cdk/aws-secretsmanager.Secret`](#@aws-cdk/aws-secretsmanager.Secret)

---


## Structs <a name="Structs" id="structs"></a>

### VerdaccioServiceProps <a name="verdaccio-service-construct.VerdaccioServiceProps" id="verdaccioserviceconstructverdaccioserviceprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VerdaccioServiceProps } from 'verdaccio-service-construct'

const verdaccioServiceProps: VerdaccioServiceProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`verdaccioConfig`](#verdaccioserviceconstructverdaccioservicepropspropertyverdaccioconfig)<span title="Required">*</span> | `any` | *No description.* |
| [`customHostedZone`](#verdaccioserviceconstructverdaccioservicepropspropertycustomhostedzone) | [`@aws-cdk/aws-route53.PublicHostedZone`](#@aws-cdk/aws-route53.PublicHostedZone) | *No description.* |
| [`customHostedZoneCertificate`](#verdaccioserviceconstructverdaccioservicepropspropertycustomhostedzonecertificate) | [`@aws-cdk/aws-certificatemanager.Certificate`](#@aws-cdk/aws-certificatemanager.Certificate) | *No description.* |

---

##### `verdaccioConfig`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.verdaccioConfig" id="verdaccioserviceconstructverdaccioservicepropspropertyverdaccioconfig"></a>

```typescript
public readonly verdaccioConfig: any;
```

- *Type:* `any`

---

##### `customHostedZone`<sup>Optional</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.customHostedZone" id="verdaccioserviceconstructverdaccioservicepropspropertycustomhostedzone"></a>

```typescript
public readonly customHostedZone: PublicHostedZone;
```

- *Type:* [`@aws-cdk/aws-route53.PublicHostedZone`](#@aws-cdk/aws-route53.PublicHostedZone)

---

##### `customHostedZoneCertificate`<sup>Optional</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.customHostedZoneCertificate" id="verdaccioserviceconstructverdaccioservicepropspropertycustomhostedzonecertificate"></a>

```typescript
public readonly customHostedZoneCertificate: Certificate;
```

- *Type:* [`@aws-cdk/aws-certificatemanager.Certificate`](#@aws-cdk/aws-certificatemanager.Certificate)

---




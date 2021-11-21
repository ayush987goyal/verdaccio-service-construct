# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### VerdaccioService <a name="verdaccio-service-construct.VerdaccioService"></a>

#### Initializers <a name="verdaccio-service-construct.VerdaccioService.Initializer"></a>

```typescript
import { VerdaccioService } from 'verdaccio-service-construct'

new VerdaccioService(parent: Construct, name: string, props: VerdaccioServiceProps)
```

##### `parent`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.parent"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `name`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.name"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.parameter.props"></a>

- *Type:* [`verdaccio-service-construct.VerdaccioServiceProps`](#verdaccio-service-construct.VerdaccioServiceProps)

---



#### Properties <a name="Properties"></a>

##### `fargateService`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.fargateService"></a>

```typescript
public readonly fargateService: NetworkLoadBalancedFargateService;
```

- *Type:* [`@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService`](#@aws-cdk/aws-ecs-patterns.NetworkLoadBalancedFargateService)

---

##### `verdaccioEfsFileSystem`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.verdaccioEfsFileSystem"></a>

```typescript
public readonly verdaccioEfsFileSystem: FileSystem;
```

- *Type:* [`@aws-cdk/aws-efs.FileSystem`](#@aws-cdk/aws-efs.FileSystem)

---

##### `verdaccioHTPasswordSecret`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioService.property.verdaccioHTPasswordSecret"></a>

```typescript
public readonly verdaccioHTPasswordSecret: Secret;
```

- *Type:* [`@aws-cdk/aws-secretsmanager.Secret`](#@aws-cdk/aws-secretsmanager.Secret)

---


## Structs <a name="Structs"></a>

### VerdaccioServiceProps <a name="verdaccio-service-construct.VerdaccioServiceProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { VerdaccioServiceProps } from 'verdaccio-service-construct'

const verdaccioServiceProps: VerdaccioServiceProps = { ... }
```

##### `verdaccioConfig`<sup>Required</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.verdaccioConfig"></a>

```typescript
public readonly verdaccioConfig: any;
```

- *Type:* `any`

---

##### `customHostedZone`<sup>Optional</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.customHostedZone"></a>

```typescript
public readonly customHostedZone: PublicHostedZone;
```

- *Type:* [`@aws-cdk/aws-route53.PublicHostedZone`](#@aws-cdk/aws-route53.PublicHostedZone)

---

##### `customHostedZoneCertificate`<sup>Optional</sup> <a name="verdaccio-service-construct.VerdaccioServiceProps.property.customHostedZoneCertificate"></a>

```typescript
public readonly customHostedZoneCertificate: Certificate;
```

- *Type:* [`@aws-cdk/aws-certificatemanager.Certificate`](#@aws-cdk/aws-certificatemanager.Certificate)

---




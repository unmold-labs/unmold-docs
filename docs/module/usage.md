# Usage

This page explains how to authenticate and use modules from the Unmold registry in OpenTofu and Terraform.

## Authentication

To access private modules, you must authenticate with the registry.

### Recommended: CLI Login

Use the built-in login command:

```id="k91s2a"
tofu login registry.unmold.dev
```

```id="l02m7q"
terraform login registry.unmold.dev
```

This command:

* Generates or uses an API token
* Stores it securely in the OpenTofu/Terraform credentials store
* Enables seamless access to private modules

### Alternative: Environment Variable

You can provide the API token via environment variable:

```id="d8s1pz"
export TF_TOKEN_registry_unmold_dev=<your_api_token>
```

This is commonly used in CI/CD environments.

### Alternative: .netrc File

For HTTP-based access, you need to configure a `.netrc` file at the HOME directory:

```
machine registry.unmold.dev
login <your_email>
password <your_api_token>
```

This allows tools like OpenTofu and Terraform to authenticate automatically. See [documentation](https://opentofu.org/docs/language/modules/sources/#http-urls) for details.

## Using Modules

Unmold supports two ways to reference modules.

### Registry Source (Recommended)

Use the registry source format:

```id="m3k9cx"
module "example" {
  source  = "registry.unmold.dev/<namespace>/<name>/<system>"
  version = "<version>"
}
```

This approach **only** supports semver versions.

Example:

```id="p7x2ds"
module "network" {
  source  = "registry.unmold.dev/team-infra/vpc/aws"
  version = "1.2.0"
}
```

### HTTP Source

You can also download modules directly via HTTP:

```id="z4q8we"
module "example" {
  source = "https://registry.unmold.dev/modules/v1/<namespace>/<name>/<system>/<version>/package.zip"
}
```

This approach supports semver versions and arbitrary version names.

Example:

```id="u6n3rt"
module "network" {
  source = "https://registry.unmold.dev/modules/v1/team-infra/vpc/aws/1.0.0/package.zip"
}
```

## Choosing a Source

* Use **registry source** for standard OpenTofu/Terraform workflows
* Use **HTTP source** for custom tooling or direct downloads

## Related Topics

* [Module publication](./publication)
* [Publishing your first module](../getting-started/publishing-a-module)
* [CLI reference](../cli/)

# Usage

This page explains how to use modules from the Unmold registry in OpenTofu and Terraform, including authentication for each source type.

## Using Modules

Unmold supports three source formats. Each source type has its own authentication approach and use cases.

### Registry Source (Recommended)

Use the registry source format:

```id="m3k9cx"
module "example" {
  source  = "registry.unmold.dev/<namespace>/<name>/<system>"
  version = "<version>"
}
```

This approach **only** supports semver versions.

#### Authentication

Use one of the following approaches for private modules.

Recommended: CLI login

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

Alternative: environment variable (common in CI/CD)

```id="d8s1pz"
export TF_TOKEN_registry_unmold_dev=<your_api_token>
```

### OCI Source (OpenTofu)

OpenTofu also supports pulling modules from OCI:

```id="o1c2i3"
module "example" {
  source  = "oci://oci.unmold.dev/<namespace>/<name>/<system>?tag=<version>"
}
```

This works with semver and non-semver version names in OpenTofu.

#### Authentication

If you use an OCI module source (`oci://oci.unmold.dev/...`), OpenTofu reads credentials from OCI credential sources such as Docker login and OpenTofu CLI configuration.

You can authenticate in two ways.

1. Docker login (recommended):

```bash
echo "<your_api_token>" | docker login oci.unmold.dev --username <your_email> --password-stdin
```

After this, OpenTofu can pull private OCI modules from `oci.unmold.dev`.

2. Explicit credentials configuration (`oci_credentials`):

Add an `oci_credentials` block in your OpenTofu CLI config file (for example `~/.tofurc`):

```hcl
oci_credentials "oci.unmold.dev" {
  username = "<your_email>"
  password = "<your_api_token>"
}
```

### HTTP Source

You can also download modules directly via HTTP:

```id="z4q8we"
module "example" {
  source = "https://registry.unmold.dev/modules/v1/<namespace>/<name>/<system>/<version>/package.zip"
}
```

This approach supports semver versions and non-semver version names.

#### Authentication

For HTTP-based access, configure a `.netrc` file at the HOME directory or a path specified with the `NETRC` environment variable:

```
machine registry.unmold.dev
login <your_email>
password <your_api_token>
```

This allows tools like OpenTofu and Terraform to authenticate automatically. See [documentation](https://opentofu.org/docs/language/modules/sources/#http-urls) for details.

Example:

```id="u6n3rt"
module "network" {
  source = "https://registry.unmold.dev/modules/v1/team-infra/vpc/aws/1.0.0/package.zip"
}
```

## Choosing a Source

### OpenTofu

* Semver version: use **registry source** or **OCI source**
* Non-semver version: use **OCI source**

### Terraform

* Semver version: use **registry source**
* Non-semver version: use **HTTP source**

### Quick Matrix

| Tool | Semver Version | Non-semver Version |
| --- | --- | --- |
| OpenTofu | Registry or OCI | OCI |
| Terraform | Registry | HTTP |

## Related Topics

* [Module publication](./publication)
* [Publishing your first module](../getting-started/publishing-a-module)
* [CLI reference](../cli/)

---
title: "Unmold Update #3: OCI Module Source"
description: "This post announces OCI module source support and explains source selection rules for OpenTofu and Terraform."
slug: "unmold-update-3"
authors: [unmold-developer-team]
tags: [product]
---

This week we introduce the support to [OCI module source](https://opentofu.org/docs/language/modules/sources/#oci-distribution-repository) for OpenTofu.

<!-- truncate -->

### What is new

OpenTofu users can now pull modules from OCI using:

```hcl
module "example" {
	source  = "oci://oci.unmold.dev/<namespace>/<name>/<system>?tag=<version>"
}
```

This adds a flexible path for non-semver module versions while preserving existing registry behavior for semver releases.

### Why this matters

Many teams publish both stable releases and fast-moving development builds (for example branch channels or Git commit SHA tags). With OCI source support, OpenTofu users can use the same registry-native workflow they already trust for artifacts: clearer channel separation through tags, stronger reproducibility for production pulls, and easier private access control. In practice, this means teams can safely test preview builds and still keep predictable, explicit behavior for Terraform users.

### How about Terraform

If you use Terraform, the Unmold registry continues to support the HTTP module source for modules published with non-semver versions:

```hcl
module "example" {
  source = "https://registry.unmold.dev/modules/v1/<namespace>/<name>/<system>/<version>/package.zip"
}
```

### Related docs

* [Module usage](/docs/module/usage)
* [Module publication](/docs/module/publication)
* [Getting started](/docs/getting-started/)

If you have feedback on OCI workflows or source selection UX, share it in the [Unmold community](https://github.com/orgs/unmold-cloud/discussions).

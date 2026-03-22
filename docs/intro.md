# Introduction

**Unmold** is a private module registry for [OpenTofu](https://opentofu.org), designed to help teams move faster with infrastructure by making module publishing, discovery, and reuse simple and reliable.

As infrastructure scales, teams often face a tradeoff between speed and control. Modules become harder to manage, releases slow down, and consistency breaks across environments. Unmold eliminates that friction by providing a centralized, developer-friendly platform for managing your internal module ecosystem.

## Why Unmold

Unmold is built to accelerate how teams build and ship infrastructure:

* **Ship faster with confidence**
  Publish modules quickly while maintaining clear versioning and traceability.

* **Standardize across teams**
  Create a single source of truth for reusable infrastructure components.

* **Integrate seamlessly with your workflow**
  Designed to work naturally with local development and CI/CD pipelines.

* **Stay in control**
  Manage access, tokens, and usage with built-in account-level controls.

## Built for Real-World Workflows

Unmold fits directly into how modern teams operate:

* **Preview changes before merging**
  Publish modules from pull requests and validate them in downstream environments.

* **Automate releases in CI**
  Generate immutable, traceable versions (such as commit-based releases) as part of your pipeline.

* **Support flexible environments**
  Use push-based publishing to integrate with any infrastructure setup.

## Compatibility

Unmold is built on the [OpenTofu module registry protocol](https://opentofu.org/docs/internals/module-registry-protocol/), ensuring compatibility with OpenTofu workflows. It also provides best-effort support for [Terraform’s registry protocol](https://developer.hashicorp.com/terraform/internals/module-registry-protocol), though long-term compatibility is not guaranteed.

## Get Started

Ready to streamline your module workflow? Head to the [Getting Started](./getting-started/) guide to publish your first module in minutes.

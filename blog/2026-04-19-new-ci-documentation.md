---
title: "Unmold Weekly #1: New CI Documentation"
description: "This post introduces the new CI documentation pages for publishing modules to Unmold from common CI platforms."
slug: "new-ci-documentation"
authors: [unmold-developer-team]
tags: [product, weekly]
---

We have added a new CI documentation section to make it easier to publish Terraform and OpenTofu modules to Unmold from the CI systems teams already use.

<!-- truncate -->

The new guides cover the main publishing paths we support today:

* [GitHub Actions](/docs/ci/github-actions)
* [GitLab CI](/docs/ci/gitlab)
* [Bitbucket Pipelines](/docs/ci/bitbucket)
* [Jenkins](/docs/ci/jenkins)

These pages are grouped under the new [CI Integration](/docs/ci) section in the documentation.

### What is included

Each guide focuses on a practical publishing workflow and includes:

* the required `UNMOLD_API_TOKEN` secret setup
* a complete pipeline example
* examples for publishing from a subdirectory or the repository root
* guidance for publishing tagged releases

For GitHub Actions, the documentation covers the dedicated [publish-module-action](https://github.com/unmold-cloud/publish-module-action).

For GitLab CI, Bitbucket Pipelines, and Jenkins, the guides show how to publish with the CI-friendly Unmold CLI image.

### Why this matters

Unmold is designed to fit naturally into CLI-first and automation-heavy workflows. These new docs make the supported CI paths explicit, reduce setup time, and give teams a clearer starting point for module publishing in their own pipelines.

If your platform is not covered yet, you can still publish through the [Unmold CLI](/docs/cli), and we would like to hear what integrations you want to see next in the [Unmold community](https://github.com/orgs/unmold-cloud/discussions).
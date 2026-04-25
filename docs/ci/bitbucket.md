# Bitbucket Pipelines

Use Bitbucket Pipelines to publish Terraform/OpenTofu modules to Unmold with the Unmold CLI CI image.

This approach works well when you want a repeatable publish step without installing the CLI into your build image.

## Before You Start

Make sure you have:

- a module directory committed in your repository
- an Unmold API token
- a Bitbucket repository variable named `UNMOLD_API_TOKEN`

If you still need a token, see [Managing API Tokens](../getting-started/managing-api-tokens).

## Publish with the CLI Docker Image

The example below uses the CI-friendly image directly as the pipeline container, so you can call `unmold` from the step script.

```yaml
image: quay.io/unmold/unmold-cli:latest-ci

pipelines:
  branches:
    main:
      - step:
          name: Publish module to Unmold
          script:
            - unmold module publish vpc "${BITBUCKET_COMMIT}" --system aws --path modules/vpc --confirm
```

### What This Pipeline Does

- uses `quay.io/unmold/unmold-cli:latest-ci` as the step image
- uses Bitbucket Pipelines to clone your repository into the build workspace
- authenticates with `UNMOLD_API_TOKEN`
- publishes a version based on `BITBUCKET_COMMIT`
- passes `--confirm` so the command is non-interactive in CI

The CLI packages files from `modules/vpc` and uploads them to Unmold.

## Publish from the Repository Root

If the module is stored at the repository root, set `MODULE_PATH` to `.`:

```yaml
script:
  - unmold module publish network "${BITBUCKET_COMMIT}" --system aws --path . --confirm
```

## Publish Tagged Releases

If you want stable, human-readable module versions, trigger publishing from Git tags instead of commit SHAs.

```yaml
image: quay.io/unmold/unmold-cli:latest-ci

pipelines:
  tags:
    'v*':
      - step:
          name: Publish tagged module release
          script:
            - unmold module publish vpc "${BITBUCKET_TAG#v}" --system aws --path modules/vpc --confirm
```

With this setup, pushing a tag such as `v1.2.0` publishes version `1.2.0` to Unmold.

## Required Variable

- `UNMOLD_API_TOKEN`: required secret used by the CLI for authentication

The remaining publish inputs are written directly in the command:

- module name such as `vpc`
- version such as `${BITBUCKET_COMMIT}` or `${BITBUCKET_TAG#v}`
- target system such as `aws`
- module path such as `modules/vpc`

## Image Tag

The examples use `quay.io/unmold/unmold-cli:latest-ci`.

For pinned releases, replace `latest-ci` with a specific published tag such as `v1.2.0-ci`.

## Notes

- The published module namespace is inferred from the authenticated token.
- By default, published versions are immutable. If you need to replace an existing version, add `--overwrite` to the command.
- The CLI respects `.gitignore` rules when packaging the module directory.

For command details, see [unmold module publish](../cli/module/publish).

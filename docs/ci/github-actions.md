# GitHub Actions

A series of custom actions to ease interactions with Unmold registry.

## Publish Module

The [unmold-cloud/publish-module-action](https://github.com/unmold-cloud/publish-module-action) action packs a local module and push it the registry. It is fully compatible with Unmold APIs and configurable.

### Inputs

- `unmold-api-token` (required): API token of Unmold.dev.
- `name` (required): Module name.
- `system` (optional): Target system for the module (default: `generic`).
- `version` (required): Module version to publish.
- `module-path` (optional): Path to the module directory inside the repository (default: `.`).
- `overwrite` (optional): Set to `true` to overwrite an existing module version (default: `false`).

### Use Example

```yaml
name: Publish Unmold Module

on:
  push:
    branches:
      - main
    paths:
      - "modules/vpc/**"

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Publish module to Unmold
        uses: unmold-cloud/publish-module-action@v1
        with:
          unmold-api-token: ${{ secrets.UNMOLD_API_TOKEN }}
          name: vpc
          version: ${{ github.sha }}
          system: aws
          module-path: ./modules/vpc
```

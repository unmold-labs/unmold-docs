# Module Access

This page explains how module version access works in Unmold.

## Overview

Access is configured per module version:

- `private` (default): authentication is required to list or download
- `public`: anyone can list and download without authentication

## Set Access During Publish

Use the CLI `--access` flag when publishing a version:

```bash
unmold module publish <module-name> <version> --access public
```

If `--access` is omitted, the version is published as `private`.

## Change Access for an Existing Version

Use one of these commands:

```bash
unmold module make-public <module-name> <version>
unmold module make-private <module-name> <version>
```

Notes:

- These commands update only the specified version.
- Authentication is required to change access.

## Listing Behavior

`unmold module list` works in both modes:

- Authenticated: shows modules you can access (including your private modules)
- Unauthenticated: shows public modules only

When no token is available, the CLI prints:

`No authentication token found. Showing public modules only.`

## Consumption Behavior

- Registry source (`registry.unmold.dev/...`): private requires auth, public can be pulled without auth
- OCI source (`oci://oci.unmold.dev/...`): private requires auth, public can be pulled without auth
- HTTP source (`https://registry.unmold.dev/modules/v1/.../package.zip`): private requires auth, public can be downloaded without auth

## Related Topics

- [Module publication](./publication)
- [Module usage](./usage)
- [CLI module publish](../cli/module/publish)
- [CLI module make-public](../cli/module/make-public)
- [CLI module make-private](../cli/module/make-private)

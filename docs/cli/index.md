import DocCardList from '@theme/DocCardList';

# Unmold CLI

A command line tool to interact with Unmold registry programmatically.

The CLI can be used in both authenticated and unauthenticated modes.

- Authenticated mode: required for publishing, deleting, and changing module access.
- Unauthenticated mode: supported for listing and consuming public modules.

Authenticate using the environment variable `UNMOLD_API_TOKEN` or the [login](./login) command when you need private module operations.

## Installation

The CLI is available from [npm](https://www.npmjs.com/package/@unmold/cli).

```bash
npm install -g @unmold/cli
```

## Docker Image

The CLI is also available with docker image

``` base
docker run quay.io/unmold/unmold-cli:latest module list
```

<DocCardList />
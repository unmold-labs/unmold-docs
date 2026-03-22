import DocCardList from '@theme/DocCardList';

# Unmold CLI

A command line tool to interact with Unmold registry programmatically.

To communicate with the registry, the CLI must authenticate using the environment variable `UNMOLD_API_TOKEN` or using the [login](./login) command.

## Docker Image

The CLI is also available with docker image

``` base
docker run quay.io/unmold/unmold-cli:latest module list
```

<DocCardList />
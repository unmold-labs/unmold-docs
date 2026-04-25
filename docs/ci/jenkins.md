# Jenkins

Use Jenkins to publish Terraform/OpenTofu modules to Unmold with the Unmold CLI CI image.

This approach works well when you want Jenkins to run directly inside a CI-friendly Unmold CLI container.

## Before You Start

Make sure you have:

- a module directory committed in your repository
- an Unmold API token stored as a Jenkins secret text credential
- a Jenkins pipeline that can run with a Docker agent

If you still need a token, see [Managing API Tokens](../getting-started/managing-api-tokens).

## Publish with the CLI Docker Image

The example below uses the CI-friendly image as the Jenkins Docker agent, so you can call `unmold` directly from the shell step.

```groovy
pipeline {
	agent {
		docker {
			image 'quay.io/unmold/unmold-cli:latest-ci'
			reuseNode true
		}
	}

	stages {
		stage('Publish Module') {
			when {
				branch 'main'
			}
			steps {
				withCredentials([string(credentialsId: 'unmold-api-token', variable: 'UNMOLD_API_TOKEN')]) {
					sh 'unmold module publish vpc "$GIT_COMMIT" --system aws --path modules/vpc --confirm'
				}
			}
		}
	}
}
```

### What This Pipeline Does

- runs on the `main` branch
- uses `quay.io/unmold/unmold-cli:latest-ci` as the Jenkins Docker agent image
- authenticates with `UNMOLD_API_TOKEN`
- publishes a version based on `GIT_COMMIT`
- passes `--confirm` so the command is non-interactive in CI

The CLI packages files from `modules/vpc` and uploads them to Unmold.

## Publish from the Repository Root

If the module is stored at the repository root, set `MODULE_PATH` to `.`:

```groovy
sh 'unmold module publish network "$GIT_COMMIT" --system aws --path . --confirm'
```

The command stays the same except for the module name, version, system, and path values.

## Publish Tagged Releases

If you want stable, human-readable module versions, trigger publishing from Git tags instead of commit SHAs.

```groovy
pipeline {
	agent {
		docker {
			image 'quay.io/unmold/unmold-cli:latest-ci'
			reuseNode true
		}
	}

	stages {
		stage('Publish Tagged Module') {
			when {
				tag 'v*'
			}
			steps {
				withCredentials([string(credentialsId: 'unmold-api-token', variable: 'UNMOLD_API_TOKEN')]) {
					sh 'unmold module publish vpc "${TAG_NAME#v}" --system aws --path modules/vpc --confirm'
				}
			}
		}
	}
}
```

With this setup, building a tag such as `v1.2.0` publishes version `1.2.0` to Unmold.

## Required Variable

- `UNMOLD_API_TOKEN`: required secret used by the CLI for authentication

The remaining publish inputs are written directly in the command:

- module name such as `vpc`
- version such as `$GIT_COMMIT` or `${TAG_NAME#v}`
- target system such as `aws`
- module path such as `modules/vpc`

## Image Tag

The examples use `quay.io/unmold/unmold-cli:latest-ci`.

For pinned releases, replace `latest-ci` with a specific published tag such as `v1.2.0-ci`.

## Notes

- The published module namespace is inferred from the authenticated token.
- By default, published versions are immutable. If you need to replace an existing version, add `--overwrite` to the command.
- The CLI respects `.gitignore` rules when packaging the module directory.
- The Jenkins examples assume a declarative multibranch pipeline where `GIT_COMMIT` and `TAG_NAME` are available.

For command details, see [unmold module publish](../cli/module/publish).

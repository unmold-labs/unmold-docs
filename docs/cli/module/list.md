# unmold module list

unmold module list returns available modules and versions from the Unmold registry.

## Command

```bash
unmold module list [filters]
```

## Arguments

- filters (optional): filter path in the format namespace/name/system

You can provide one, two, or three path segments:

- namespace: list all modules and versions in a namespace
- namespace/name: list all versions for a specific module
- namespace/name/system: list versions for a specific module and target system
- omitted: list all modules accessible to the current caller

## Flags

This command currently has no flags.

## Output

The command prints formatted JSON to stdout.

Each item contains:

- namespace
- name
- system
- version
- access (`private` or `public`, when available)

Example output:

```json
[
	{
		"namespace": "my-namespace",
		"name": "my-module",
		"system": "aws",
		"version": "1.0.0"
	}
]
```

## Examples

```bash
# List all accessible modules
unmold module list

# List all modules and versions in a namespace
unmold module list my-namespace

# List all versions for a module
unmold module list my-namespace/my-module

# List all versions for a module and system
unmold module list my-namespace/my-module/aws
```

## Notes

- If no authentication token is found, the command still succeeds and returns only public modules.
- In anonymous mode, the CLI prints: `No authentication token found. Showing public modules only.`
- On failure, the command exits with code 1 and prints an error.

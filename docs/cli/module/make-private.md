# unmold module make-private

unmold module make-private updates a published module version to be private.

## Command

```bash
unmold module make-private <name> <version> [flags]
```

## Arguments

- name: module name (namespace is inferred from your authenticated user)
- version: module version

## Flags

- -s, --system `<system>`: target system (default: generic)
- -c, --confirm: skip interactive confirmation prompt

## Examples

```bash
unmold module make-private mymodule 1.0.0
unmold module make-private mymodule 1.0.0 --system aws
unmold module make-private mymodule 1.0.0 --confirm
```

## Notes

- Authentication is required.
- The command updates only the specified module version.
- Private versions require authentication for listing and download.

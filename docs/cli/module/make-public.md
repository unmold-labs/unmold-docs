# unmold module make-public

unmold module make-public updates a published module version to be publicly readable.

## Command

```bash
unmold module make-public <name> <version> [flags]
```

## Arguments

- name: module name (namespace is inferred from your authenticated user)
- version: module version

## Flags

- -s, --system `<system>`: target system (default: generic)
- -c, --confirm: skip interactive confirmation prompt

## Examples

```bash
unmold module make-public mymodule 1.0.0
unmold module make-public mymodule 1.0.0 --system aws
unmold module make-public mymodule 1.0.0 --confirm
```

## Notes

- Authentication is required.
- The command updates only the specified module version.
- After a version is public, it can be listed and downloaded without authentication.

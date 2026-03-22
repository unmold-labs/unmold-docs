# `unmold module publish`

`unmold module publish` packages a module directory and uploads it to your Unmold namespace as a new version.

## Command

```bash
unmold module publish <name> <version> [flags]
```

## Arguments

- `name`: module name (namespace is inferred from your authenticated user)
- `version`: version string

The final artifact identity is:

`<namespace>/<name>/<system>/<version>`

## Flags

- `-s, --system <system>`: target system (default: `generic`)
- `-p, --path <path>`: path to module directory (default: `.`)
- `-o, --overwrite`: overwrite existing version
- `-c, --confirm`: skip prompt confirmation

## Examples

```bash
unmold module publish mymodule 1.0.0
unmold module publish mymodule 1.0.0 --path ./module-dir
unmold module publish mymodule 1.0.0 --system aws
unmold module publish mymodule 70e21a8fb88d6d5f76f18a1516425037caff2a20
```

## Notes

- The command zips directory contents before upload.
- `.gitignore` entries and `.git` are excluded from the archive.

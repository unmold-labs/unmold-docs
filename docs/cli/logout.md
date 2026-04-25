# `unmold logout`

`unmold logout` signs out your local CLI session by removing the stored authentication token from your local config file.

Use this before switching accounts or before running `unmold login` again when a local session already exists.

## Command

```bash
unmold logout
```

## What it removes

Default token location:

`~/.unmold/config.json`

If you use a custom config location, logout removes the token from that path instead:

```bash
export UNMOLD_CONFIG_PATH="/custom/path/config.json"
unmold logout
```

## Important behavior

- `unmold logout` only removes locally stored credentials.
- If `UNMOLD_API_TOKEN` is set in your shell, the CLI will still authenticate with that environment token.

# `unmold login`

`unmold login` authenticates your CLI session through browser OAuth and stores an access token for future commands.

This is the recommended authentication path for local development.

## Command

```bash
unmold login
```

## Token storage and overrides

Default token location:

`~/.unmold/config.json`

Override config file location:

```bash
export UNMOLD_CONFIG_PATH="/custom/path/config.json"
```

Override token directly (takes precedence over stored token):

```bash
export UNMOLD_API_TOKEN="<your-token>"
```

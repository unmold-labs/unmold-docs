# Unmold Documentation

This repository contains the public, customer-facing documentation site for [unmold.dev](https://unmold.dev), built with [Docusaurus](https://docusaurus.io/).

## What is in this repository

- Product and feature documentation for users of Unmold.
- Public docs pages under `docs/`.
- Blog posts under `blog/`.

## Local development

### Requirements

- Node.js 20 or later
- npm

### Install dependencies

```bash
npm install
```

### Start local docs site

```bash
npm run start
```

This starts a local development server with hot reload.

### Create a production build

```bash
npm run build
```

This generates static output in `build/`.

## Deployment

Deployment is handled by GitHub Actions through [`.github/workflows/publish.yml`](.github/workflows/publish.yml).

- Push to `main` to trigger publish.
- You can also run the workflow manually from the Actions tab.

## Contributing

Contributions are welcome. Keep changes focused, accurate, and easy for customers to follow.

### Quick guidelines

- Use clear, direct language and avoid internal-only context.
- Keep examples copy-paste friendly.
- Update related pages when behavior changes.
- Run `npm run build` before opening a pull request.

### Typical content locations

- Product docs: `docs/`
- Blog posts: `blog/`
- Static assets: `static/`


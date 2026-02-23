# minions-alerts

**Alert rules, delivery preferences, and alert history for availability changes**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-alerts/sdk minions-sdk

# Python
pip install minions-alerts

# CLI (global)
npm install -g @minions-alerts/cli
```

---

## CLI

```bash
# Show help
alerts --help
```

---

## Python SDK

```python
from minions_alerts import create_client

client = create_client()
```

---

## Project Structure

```
minions-alerts/
  packages/
    core/           # TypeScript core library (@minions-alerts/sdk on npm)
    python/         # Python SDK (minions-alerts on PyPI)
    cli/            # CLI tool (@minions-alerts/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [alerts.minions.help](https://alerts.minions.help)
- Blog: [alerts.minions.blog](https://alerts.minions.blog)
- App: [alerts.minions.wtf](https://alerts.minions.wtf)

---

## License

[MIT](LICENSE)

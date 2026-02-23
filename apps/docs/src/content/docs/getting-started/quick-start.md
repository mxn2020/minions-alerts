---
title: Quick Start
description: Get up and running with Minions Alerts in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-alerts/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_alerts import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
alerts info
```

---
layout: default
title: Configuration
parent: Getting Started
nav_order: 1
---

# Configuration

## Global 

Create a `.pango` file at the root of the your project.  
These are the configurable properties with the default values:
```yaml
headless: true
testAttribute: data-testid
timeout: 1000
```
## Local
These are the configurable properties with the default values:
```yaml
test: <name of file>
skip: false
only: false
---
```
Override the global configuration at test-level.
```yaml
headless: false
testAttribute: data-testid
timeout: 5000
---
```

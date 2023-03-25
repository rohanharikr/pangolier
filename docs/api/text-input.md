---
layout: default
title: Text Input
parent: API
---

# Text Input

## Input text

Inputs text (regardless of whether any text field is currently focused or not)

```yaml
- type: "Hello World"
```

## Clear text
Clears any text input

```yaml
- clear
```

## Input random text
There are several convenience methods for entering a random text input  

```yaml
- typeRandomEmail    # Enters "john.smith@example.com"
- typeRandomName     # Enters "John Smith"
- typeRandomNumber   # Enters 6
- typeRandomText     # Enters "Hello World"
```
Support for integrating faker.js is on the list which would allow Pangolier to expose additional properties like seed, length, etc. as options.
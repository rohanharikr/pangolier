---
layout: default
title: Installation
parent: Getting Started
nav_order: 0
---

# Installation

## Install

```shell
npm i pangolier --save-dev
```

## Add test script to package.json

```json
 {
    "scripts": {
        "test": "pangolier ./tests"
    }
 }
```

## Run

```shell
npm test
```
Runs against all the `.yaml` files in the specified directory
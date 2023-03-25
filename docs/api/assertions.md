---
layout: default
title: Assertions
nav_order: 1
parent: API
---

# Assertions

## assertVisible
Assert whether an element is visible.
```yaml
- assertVisible: $order-online-btn
```
```yaml
- assertVisible:
    selector: $order-online-btn
    text: Order online
    index: 2
```
## assertNotVisible
Assert whether an element is not visible.

```yaml
- assertNotVisible: $order-online-btn
```
```yaml
- assertNotVisible:
    selector: $order-online-btn
    text: Order online
    index: 2
```
## assertExist
Assert whether an element exists in the DOM.

```yaml
- assertExist: $order-online-btn
```

```yaml
- assertExist:
    selector: $order-online-btn
    text: Order online
    index: 2
    count: 10
```

## assertNotExist
Assert whether an element does not exist in the DOM.

```yaml
- assertNotExist: $order-online-btn
```
```yaml
- assertNotExist:
    selector: $order-online-btn
    text: Order online
    index: 2
    count: 10
```
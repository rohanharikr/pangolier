---
layout: default
title: Concepts
parent: Getting Started
nav_order: 2
---

# Concepts

## Defining tests
```yaml
test: Click on order online button
---
- clickOn: $order-online-btn
```

Tests are defined in [YAML](https://yaml.org/). Above the three dashes (`---`) is where you specify the name of the test and other test-level configurations and below is where you define the tests itself.
 
## The $ sign in tests
```yaml
- clickOn: $order-online-btn
```

The `$` sign maps to `[data-testid='<id>']`, a shorthand way to select elements by the test attribute. You can change this at the global or test-level by updating `testAttribute`.

## Selector

A selector can be a HTML element, ID, CSS class, attribute, or `$`.

You can pass selectors either as
```yaml
- clickOn: button.active
```
or as an option
```yaml
- clickOn:
    selector: button.active
```

If multiple elements are found, it defaults to getting the element at 0th index. You can get the element at a different index by using the [index](/getting-started/options.html) option.
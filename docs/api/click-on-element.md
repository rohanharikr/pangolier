---
layout: default
title: Click On Element
parent: API
---

# Click On Element

Click on a element on the page.

```yaml
- clickOn: $order-online-btn
```

```yaml
- clickOn:
    selector: $order-online-btn
    text: Order online
    index: 0
    times: 2
```
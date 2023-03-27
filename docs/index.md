---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Home
nav_order: 0
---

# Pangolier

A Declarative Web UI Test Framework.  
With Pangolier, you can easily define and test your flows in [YAML](https://yaml.org/).

{: .warning } 
> The project is in it's infancy and not intended to be used in production.  
Expect breaking API changes until 1.0  

```yaml
test: should allow me to add todo items
---
- loadUrl: https://demo.playwright.dev/todomvc
- clickOn: "[placeholder='What needs to be done?']"
- type: buy some cheese
- pressKey: Enter
- assertVisible:
    selector: $todo-title
    text: buy some cheese
- clickOn: "[placeholder='What needs to be done?']"
- type: feed the cat
- pressKey: Enter
- assertVisible:
    selector: $todo-title
    index: 0
    text: buy some cheese
- assertVisible:
    selector: $todo-title
    index: 1
    text: feed the cat
```

The same test written with Playwright:
```
https://github.com/microsoft/playwright/blob/main/examples/todomvc/tests/integration.spec.ts#L20
```

The project is a port of [Maestro](https://maestro.mobile.dev/) for the web platform and uses [Playwright](https://playwright.dev/) under the hood. The documentation website has also been adapted from [Maestro](https://maestro.mobile.dev/).

## Examples

The [todomvc example tests for Playwright](https://github.com/microsoft/playwright/tree/main/examples/todomvc) have been re-written for Pangolier which you can find [here](https://github.com/rohanharikr/pangolier/tree/main/example). Note that some of the functionalities may be missing in the reimplementation. 


## Roadmap

The immediate goal of the project is to port all the features from [Maestro](https://maestro.mobile.dev/) to Pangolier.  
Contributions welcome!

---

<img src="./assets/pango.png" alt="mr. pango" width="320px">  

<small>
Mr. Pango, the mascot for Pangolier; wielding his sword, the "Swashbuckle".<br/>
Artwork by Reddit user [TalonP](https://www.reddit.com/user/TalonP/).
</small>
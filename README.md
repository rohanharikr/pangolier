# Pangolier
## A Declarative Web UI Test Framework.  
With Pangolier, you can easily define and test your flows in YAML.

>  The project is in it’s infancy and not intended to be used in production.  
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

## Installation & Usage

### Install
```shell
npm i pangolier --save-dev
```

### Add test script to package.json
```json
{
  "scripts": {
    "test": "pangolier ./tests"
  }
}
```

### Run
```shell
npm test
```
Runs against all the `.yaml` files in the specified directory.

## Examples

The todomvc example tests for Playwright have been re-written for Pangolier which you can find here. Note that some of the functionalities may be missing in the reimplementation.

## Roadmap
The immediate goal of the project is to port all the features from Maestro to Pangolier.  
Contributions welcome!

<img src="./docs/assets/pango.png" alt="mr. pango" width="200px;"/>[^pango]
[^pango]: Mr. Pango, the mascot for Pangolier; wielding his sword, the “Swashbuckle”.
Artwork by Reddit user [TalonP](https://www.reddit.com/user/TalonP/).</small>

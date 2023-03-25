const { expect } = require('@playwright/test');
const getLocator = require("./locator.js")

const actions = {
    loadUrl: async (page, param) => {
        try {
            await page.goto(param);
        } catch (err) {
            throw err
        }
    },
    clickOn: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            await locator.click({ timeout: config.timeout, clickCount: param.times || 1 })
        } catch (err) {
            throw err
        }
    },
    blurOn: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            await locator.blur({ timeout: config.timeout, })
        } catch (err) {
            throw err
        }
    },
    type: async (page, param) => {
        try {
            await page.keyboard.type(param)
        } catch (err) {
            throw err
        }
    },
    clear: async (page) => {
        try {
            const focusedElement = await page.locator('*:focus')
            await focusedElement.fill("")
        } catch (err) {
            throw err
        }
    },
    typeRandomEmail: async () => {
        try {
            await page.keyboard.type("john.smith@example.com")
        } catch (err) {
            throw err
        }
    },
    typeRandomName: async () => {
        try {
            await page.keyboard.type("John Smith")
        } catch (err) {
            throw err
        }
    },
    typeRandomNumber: async () => {
        try {
            await page.keyboard.type(6)
        } catch (err) {
            throw err
        }
    },
    typeRandomText: async () => {
        try {
            await page.keyboard.type("Hello World")
        } catch (err) {
            throw err
        }
    },
    pressKey: async (page, param) => {
        try {
            await page.keyboard.press(param)
        } catch (err) {
            throw err
        }
    },
    assertVisible: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            await expect(locator).toBeVisible({ timeout: config.timeout })
        } catch (err) {
            throw err
        }
    },
    assertNotVisible: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            await expect(locator).toBeHidden({ timeout: config.timeout })
        } catch (err) {
            throw err
        }
    },
    assertExist: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            if (param.count) {
                await expect(locator).toHaveCount(param.count, { timeout: config.timeout })
            }
            else {
                await expect(locator).toHaveCount(1, { timeout: config.timeout });
            }
        } catch (err) {
            throw err
        }
    },
    assertNotExist: async (page, param, config) => {
        try {
            const locator = await getLocator(page, param, config)
            if (param.count) {
                await expect(locator).not.toHaveCount(param.count, { timeout: config.timeout })
            } else {
                await expect(locator).toHaveCount(0, { timeout: config.timeout });
            }
        } catch (err) {
            throw err
        }
    },
    back: async (page) => {
        try {
            await page.goBack()
        } catch (err) {
            throw err
        }
    },
    reload: async (page) => {
        try {
            await page.reload();
        } catch (err) {
            throw err
        }
    }
}

module.exports = actions
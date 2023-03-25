#!/usr/bin/env node

const yaml = require('js-yaml');
const fs = require('fs');
const { chromium } = require('playwright');
const glob = require("glob")
const chalk = require('chalk');
const { version } = require('./package.json')
const logger = require("./src/logger.js")
const actions = require("./src/actions.js")

const path = process.argv[2]
if (!path) {
    throw new Error("Specify path to tests")
}

let config = {
    headless: true,
    testAttribute: "data-testid",
    timeout: 1000
}

const success = chalk.green;
const error = chalk.red;
const dim = chalk.dim;

console.log("")
console.log(error("Reconsider using in production."))
console.log(error("Expect breaking changes until 1.0"))

const hr = () => {
    const line = '-'.repeat(process.stdout.columns)
    console.log(dim(line))
}

try {
    const configFile = yaml.load(fs.readFileSync(process.cwd() + "/.pango", 'utf8'));
    config = {
        ...configFile
    }
} catch (err) {
    //do nothing
}

glob(path + "/**/*.yaml", async (err, files) => {
    if (!files.length) {
        throw new Error("No test files found in " + path + " directory")
    }
    if (err) {
        console.error(err)
        process.exit(1)
    }
    if (!files.length) return;
    console.log(chalk.bold(`\nRunning Pangolier v` + version + `\n`))
    hr()
    console.log("") //line break

    let passed = 0
    let runCount = 0

    let onlyFound = false
    for (const file of files) {
        const [info] = yaml.loadAll(fs.readFileSync(file, 'utf8'));
        if (info.only) onlyFound = true
    }

    let browser;

    for (let i = 0; i < files.length; i++) {
        const [info, test] = yaml.loadAll(fs.readFileSync(files[i], 'utf8'));
        if (onlyFound && !info.only) continue
        if (info.skip) {
            console.log("> " + dim(chalk.green("Skipping " + info.test)))
            console.log("  " + dim(files[i] + ` (${i + 1}/${files.length})`))
            console.log("")
            continue
        }

        browser = await chromium.launch({ headless: info.headless || config.headless });
        const page = await browser.newPage();

        if (!info || !test) continue; //log some error here
        console.log("> " + (info.test || files[i]))
        console.log("  " + dim(files[i] + ` (${i + 1}/${files.length})`))
        console.time("Completed in")

        console.group()

        let pass = true

        for (const step of test) {
            let key, value;
            if (typeof step === "string") {
                key = step
            } else {
                key = Object.keys(step)[0]
                value = Object.values(step)[0]
            }
            try {
                if (!Object.keys(actions).includes(key)) {
                    console.log(chalk.red("Unknown command: " + key))
                    throw new Error()
                }
                const log = logger(key, value)
                try {
                    await actions[key](page, value, {
                        ...config,
                        ...info
                    })
                    console.log(success("✓ " + log))
                } catch (err) {
                    console.log(error("x " + log))
                    throw err
                }
            } catch (err) {
                console.error(err)
                pass = false
                break;
            }
        }

        if (pass) {
            passed++
        }

        console.groupEnd()

        console.timeEnd("Completed in")
        console.log("") //line break
        hr()
        console.log("") //line break

        runCount++

        await page.close();
    }

    const log = `${passed}/${runCount} tests passed`
    if (passed === runCount) {
        console.log(chalk.green(log))
    } else {
        console.log(chalk.red(log))
    }
    console.log("") //line break

    await browser.close()
    process.exit(0)
})
const chalk = require("chalk");

module.exports = (action, param) => {
    let log
    switch (action) {
        case "loadUrl": {
            log = "Load "
            break;
        }
        case "clickOn": {
            log = "Click on "
            break;
        }
        case "Blur on": {
            log = "Blur on "
            break;
        }
        case "type": {
            log = "Type "
            break;
        }
        case "pressKey": {
            log = "Press "
            break;
        }
        case "assertVisible":
        case "assertNotVisible":
        case "assertExist":
        case "assertNotExist": {
            log = "Assert "
            break;
        }
        case "back": {
            log = "Go back"
        }
        case "reload": {
            log = "Reload"
        }
        case "blurOn": {
            log = "Blur on"
        }
    }

    if (typeof param === "string") {
        log += chalk.bold(param)
    } else if (typeof param === "object") {
        if (param.selector) {
            log += chalk.bold(param.selector)
        }
        if (param.text) {
            if (param.selector) {
                log += " with text " + chalk.bold(param.text)
            } else {
                log += chalk.bold(param.text)
            }
        }
        if (param.index != null && param.index != undefined) {
            if (param.selector || param.text) {
                log += " at index " + chalk.bold(param.index)
            }
        }
    }

    switch (action) {
        case "assertVisible": {
            log += " is visible"
            break;
        }
        case "assertNotVisible": {
            log += " is not visible"
            break;
        }
        case "assertExist": {
            log += " exists"
            break;
        }
        case "assertNotExist": {
            log += " does not exist"
            break;
        }
    }

    return log
}
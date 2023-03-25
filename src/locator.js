module.exports = async (page, param, config) => {
    let chain = page;
    try {
        if (typeof param === "object") {
            const { text, index, value, count } = param
            let { selector } = param
            if (selector != null && selector != undefined) {
                if (["[", ".", "#", "$"].includes(selector.slice(0, 1))) {
                    const testIds = selector.match(/\$([\w-]+)/g)
                    if (testIds?.length) {
                        for (const testId of testIds) {
                            const id = testId.substring(1)
                            selector = selector.replace(testId, `[${config.testAttribute}='${id}']`)
                        }
                    }
                    chain = chain.locator(selector)
                } else {
                    chain = chain.getByText(selector)
                }
            }
            if (text != null && text != undefined) {
                if (selector != null && selector != undefined) {
                    chain = chain.filter({ hasText: value })
                } else {
                    chain = chain.getByText(text)
                }
            }
            if (value != null && value != undefined) {
                chain = chain.filter({ hasText: value })
            }
            if (!count) {
                if (index != null && index != undefined) {
                    chain = chain.nth(index)
                } else {
                    chain = chain.nth(0)
                }
            }
        } else {
            if (param != null && param != undefined) {
                if (["[", ".", "#", "$"].includes(param.slice(0, 1))) {
                    const testIds = param.match(/\$([\w-]+)/g)
                    if (testIds?.length) {
                        for (const testId of testIds) {
                            const id = testId.substring(1)
                            param = param.replace(testId, `[${config.testAttribute}='${id}']`)
                        }
                    }
                    chain = chain.locator(param)
                } else {
                    chain = chain.getByText(param)
                }
                chain = chain.nth(0)
            }
        }
    } catch (err) {
        throw err
    }
    return chain
}
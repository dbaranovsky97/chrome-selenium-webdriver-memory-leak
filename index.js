const path = require('path');
const { Builder } = require('selenium-webdriver');

(async function() {
    let driver = await new Builder().forBrowser('chrome', '121').build();
    try {
        for (let i = 0; i < 20; i++) {
            await driver.get('file:///' + path.resolve(__dirname, 'index.html'));
            await new Promise((res, rej) => setTimeout(res, 2000));
        }
    } finally {
        await driver.quit();
    }
})()

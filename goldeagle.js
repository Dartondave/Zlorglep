const puppeteer = require('puppeteer');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    console.log('Starting login process...');

    await page.goto('https://example.com/login');

    // Assuming username and password fields with ids 'username' and 'password'
    await page.type('#username', 'your-username');
    await page.type('#password', 'your-password');
    await page.click('#login-button');

    await page.waitForNavigation();

    console.log('Login successful.');

    // Remove everything related to password verification

    console.log('Performing some actions...');
    
    // Random sleep between actions
    const randomSleepTime = Math.floor(Math.random() * 2000) + 1000; // Random sleep between 1 and 3 seconds
    console.log(`Sleeping for ${randomSleepTime / 1000} seconds...`);
    await sleep(randomSleepTime);

    // Major sleep time changed from 5 minutes to 1 minute
    console.log('Waiting script tap in 1 minute.');
    await sleep(1 * 60 * 1000); // Sleep for 1 minute

    // Perform more actions if needed

    console.log('Finalizing script...');
    await browser.close();
})();
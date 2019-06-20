const assert = require('assert');

describe('Asteria Demo web site', () => {
    it('Checking title', async () => {
        await browser.url(browser.config.baseUrl);
        const title = await browser.getTitle();
        assert.equal(title, 'Asteria Bank – We Test For Better Software');
    });
})
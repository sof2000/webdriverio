const assert = require('assert');
const LandingPage = require('../../pageobjects/landing/landing.page');
const LandingPageSelector = require('../../pageobjects/landing/landing.sel');
const LandingPageText = require('../../pageobjects/landing/landing.text');


describe('Asteria Demo web site', () => {
    it('Checking title', async () => {
        await browser.url(browser.config.baseUrl);
        const title = await browser.getTitle();
        expect(title).toBe('Asteria Bank – We Test For Better Software');
    });
    xit ('Checking main elements Landing page', () =>{
        expect(LandingPage.siteTitle().getText()).toBe(LandingPageText.pageText.siteTitleText);
        LandingPage.clickFirstLink();
    });
    describe('Text element verification', () => {
        const testTextElements = Object.keys(LandingPageText['pageText']);
        testTextElements.forEach(element => {
        it(`Text element verification: ${element}`, () => {
        expect($(LandingPageSelector['pageText'][`${element}Css`]).getText().trim()).toBe(LandingPageText['pageText'][element]);
      });
    });
    });
})

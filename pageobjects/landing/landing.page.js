const Page = require('../page');
const LandingPageSelector = require('./landing.sel');

const LandingPage =  Object.create(Page, {
 
    siteTitle: { value: function() { return $(LandingPageSelector.pageText.siteTitleTextCss); }},
    siteTitleDescription: { value: function() { return $(LandingPageSelector.pageText.siteTitleDescriptionTextCss); }},
    menu: { value: function() { return $(LandingPageSelector.pageText.menuTextCss); }},
    menuLinkFirst: {value: function() { return $(LandingPageSelector.pageText.menuLinkFirstTextCss); }},
    menuLinkSecond: {value: function() { return $(LandingPageSelector.pageText.menuLinkSecondTextCss); }},
    menuLinkThird: {value: function() { return $(LandingPageSelector.pageText.menuLinkThirdTextCss); }},
    menuLinkForth: {value: function() { return $(LandingPageSelector.pageText.menuLinkForthTextCss); }},
    menuLinkFifth: {value: function() { return $(LandingPageSelector.pageText.menuLinkFifthTextCss); }},
    menuLinkSixth: {value: function() { return $(LandingPageSelector.pageText.menuLinkSixthTextCss); }},
    entryHeader: {value: function() { return $(LandingPageSelector.pageText.entryHeaderTextCss); }},
    entryContentFirst: {value: function() { return $(LandingPageSelector.pageText.entryContentFirstTextCss); }},
    entryContentSecond: {value: function() { return $(LandingPageSelector.pageText.entryContentSecondTextCss); }},

    open: {
        value: function() {
          console.log('Open the website');
          Page.open.call(this, '');
        },
    },

    clickFirstLink: {
        value: function() {
            this.menuLinkFirst().click();
        }
    }

});

module.exports = LandingPage;
const Page = require('../page');
const LandingPageSelector = require('./landing.sel');

const LandingPage =  Object.create(Page, {
 
    siteTitle: { get: function() { return $(LandingPageSelector.pageText.siteTitleTextCss); }},
    siteTitleDescription: { get: function() { return $(LandingPageSelector.pageText.siteTitleDescriptionTextCss); }},
    menu: { get: function() { return $(LandingPageSelector.pageText.menuTextCss); }},
    menuLinkFirst: { get: function() {return $(LandingPageSelector.pageText.menuLinkFirstTextCss);}},
    menuLinkSecond: {get: function() { return $(LandingPageSelector.pageText.menuLinkSecondTextCss); }},
    menuLinkThird: {get: function() { return $(LandingPageSelector.pageText.menuLinkThirdTextCss); }},
    menuLinkForth: {get: function() { return $(LandingPageSelector.pageText.menuLinkForthTextCss); }},
    menuLinkFifth: {get: function() { return $(LandingPageSelector.pageText.menuLinkFifthTextCss); }},
    menuLinkSixth: {get: function() { return $(LandingPageSelector.pageText.menuLinkSixthTextCss); }},
    entryHeader: {get: function() { return $(LandingPageSelector.pageText.entryHeaderTextCss); }},
    entryContentFirst: {get: function() { return $(LandingPageSelector.pageText.entryContentFirstTextCss); }},
    entryContentSecond: {get: function() { return $(LandingPageSelector.pageText.entryContentSecondTextCss); }},
    
    open: {
        value: function() {
          console.log('Open the website');
          Page.open.call(this, '');
        },
    },

    clickFirstLink: {
        value: function() {
            this.menuLinkFirst.click();
        }
    }

});

module.exports = LandingPage;
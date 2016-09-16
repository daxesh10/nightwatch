


    var webdriver = require("selenium-webdriver"),
    logging = webdriver.logging,
until = webdriver.until,
By = webdriver.By;


//
//var webdriver = require("selenium-webdriver");
//var By = webdriver.By;
//var until = webdriver.until;

var locators = require('../locators.json');
var url = "http://dev1.talentscreen.io/#/website-courses/grid";


function Homepage(browser){
    this.browser = browser;


}

Homepage.prototype={

  "ClickOnlogo":function()
  {
      this.browser.waitForElementVisible(locators['home.logo'],3000);
      this.browser.click(locators['home.logo']);
      this.browser.pause(2000);
  },
    "ClickonImage1":function(){

        this.browser.waitForElementVisible(locators['home.image1'],3000);
        this.browser.click(locators['home.image1']);
        this.browser.assert.elementPresent(locators['home.image1']);
        this.browser.assert.cssClassPresent(locators['home.image1'],'parallax-layer');
        this.browser.pause(2000);
    },
    "Clisckonimage2":function()
    {
        //this.browser.alert("test on image2");
        this.browser.url('http://dev1.talentscreen.io/#/website-courses/grid');
        //this.borwser.url(locators['talentscreen_url']).alert("test on img");
      //  this.browser.waitForElementVisible(locators['home.image2'],1000);
        this.browser.click(locators['home.image2']);
        this.browser.assert.elementPresent(locators['home.image2']);
        this.browser.assert.cssClassPresent(locators['home.image2'],'parallax-layer');
        this.browser.pause(2000);

    },
    "Clickonarrow":function()
    {
        this.browser.url(url.toString());
        this.browser.waitForElementVisible('span.select2-arrow',1000);
        this.browser.click('span.select2-arrow');
        this.browser.pause(2000);
    },

    "ClickonFilter":function()
    {
        this.browser.waitForElementVisible('a#Filter-button',1000);
        this.browser.click('a#Filter-button');
        this.browser.pause(2000);
    },
    "Clickongridview":function()
    {
        this.browser.waitForElementVisible('a.btn-grey-900',1000);
        this.browser.click('a.btn-grey-900');
        this.browser.pause(2000);
    },
    "Clickonlistview":function(){

        this.browser.waitForElemetVisible('a.btn-white',1000);
        this.browser.click('a.btn-white');
        this.browser.pause(2000);

    }


};
module.exports= Homepage;






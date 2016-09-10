
/**
 * Created by daxes on 9/8/2016.
 */

var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var locators = require('../locators.json');

function Homepage(browser){
    this.browser = browser;

};

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
      //  this.browser.assert.cssPresent(locators['home.image1'],'parallax-layer');
        this.browser.pause(2000);
    },
    "Clickonimage2":function()
    {
        this.browser.waitForElementVisible(locators['home.image2'],1000);
        this.browser.click(locators['home.image2']);
        this.browser.pause(2000);
        this.browser.assert.elementPresent(locators['home.image2']);
        //this.browser.assert.cssPresent(locators['home.iamge2'],'parallax-layer');

    },
    "Clickonarrow":function()
    {
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





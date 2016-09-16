/**
 * Created by daxes on 9/14/2016.
 */


var Newhomepage = require("../pages/Newhomepage.js");
var locators = require('../locators.json');
var urls = require('../url.json');
var nightawtch = require('nightwatch');
//var chakram = require('chakram');
 //expect = chakram.expect;


module.exports= {

    "default": function (browser) {
        browser.windowMaximize();
        browser.url(urls['home-url']);
        browser.pause(2000);


    },

    "test for l": function (browser) {

        home = new Newhomepage(browser);

        home.logocheck();
        home.logoclick();
        home.clickonsubject();
        home.fulliamgetest();
        //home.fulliamgetest();
        home.image2test();
        home.subjectbutton();
        home.candidateButton();
        home.textheadline();
        home.loginButton();
        home.browseSubjectsButton();
        home.footertest();
        home.loginbutton();


    },



};





/*
function Home2test(browser)
{
    browser.window.console(" starting test");
    browser.windowMaximize();
    browser.url(locators['url-home']);

}

Home2test.prototype={

    testhome2:function(browser)
    {

        browser.expect.element('#logo').to.be.present;
        browser.click('#logo');
        browser.pause(2000);




/!*
        describe('test 1' ,function(){


            before(function(browser, done) {
                done();
            });

            after(function(browser, done) {
                browser.end(function() {
                    done();
                });
            });

            afterEach(function(browser, done) {
                done();
            });

            beforeEach(function(browser, done) {
                done();
            });


           it('test for home page ',function(){

               home = new Homepage(browser);
               browser.pause(2000);
               home.clickonsubject();




           }) ;



        });
*!/

    }




};

module.exports=Home2test;*/

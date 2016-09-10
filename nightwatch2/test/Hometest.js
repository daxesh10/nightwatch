/**
 * Created by daxes on 9/8/2016.
 */

var Homepage = require('../pages/Homepage.js');
module.exports={

    "default":function(browser)
    {
      browser.windowMaximize();
        browser.url('http://dev1.talentscreen.io/#/website-courses/grid');
        browser.pause(2000);


    },

    "test for home page clcikables":function(browser)
    {

        home = new Homepage(browser);
       /* home.Clickongridview();
        home.Clickonlistview();
        home.Clickonarrow();
        home.ClickonFilter();*/

        home.ClickOnlogo();
    home.ClickonImage1();
        home.Clickonimage2();
        home.Clickongridview();


    }







}
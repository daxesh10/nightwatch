/**
 * Created by daxes on 9/7/2016.
 */
module.exports={

   /* pre:function()
    {


    var ntw = require('nightwathc');
    var By =
    },*/

    'demo test google':function(browser)
    {


        browser.url('http://www.google.com');
        browser.waitForElementVisible('body',1000);
        browser.assert.title('Google');
        browser.assert.visible('input[type=text]');
        browser.setValue('input[type=text]','whiteboxqa.com');
        browser.waitForElementVisible('button:contains(name=btnG)',5000);
        browser.click('button:contains(name=btnG)');
        browser.end();

    }



};
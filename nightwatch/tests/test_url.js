/**
 * Created by daxes on 9/8/2016.
 */

module.exports={

    'url test':function(browser)
    {
        browser.url('http://dev1.talentscreen.io/#/website-courses/grid');
        browser.waitForElementVisible('body',1000);
        browser.waitForElementVisible('div[id=subjectsDisplay]',1000);
        browser.getTitle(function(title){

           console.log((title=='TalentScreen')?" title check correct: "+title :" title is incorrect "+title);
        });

       // browser.waitForElementVisible('a[#/website-pages/home]',1000);
        browser.waitForElementVisible('#logo',1000);
        browser.getValue('#logo',function(value)
        {
            console.log('value is ' + JSON.stringify(value));
        });
        browser.click('#logo');
        browser.waitForElementVisible('body',3000);
        browser.waitForElementVisible('img.parallax-layer',1000);
        console.log(" signup button");
        browser.waitForElementVisible('a.navbar-btn.btn.btn-success',1000);
        browser.getValue('a.navbar-btn.btn.btn-success',function(value){

           console.log((value!=null)?" singup button present " + JSON.stringify(value):" signu[p  not present ");
        });

        browser.click('a.navbar-btn.btn.btn-success');
        browser.waitForElementVisible('body',3000);


        browser.end;


    }







};
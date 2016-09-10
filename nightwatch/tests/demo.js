
/**
 * Created by daxes on 9/7/2016.
 */
module.exports={

     'demo my test':function(browser)
     {
      //    browser.init();
          browser.url('http://www.duckduckgo.com');
          browser.waitForElementVisible('body',1000);
          browser.setValue('#search_form_input_homepage','Whiteboxqa');
          browser.click('#search_button_homepage');
          browser.getTitle(function(title){
                   console.log('title is '+title);
         });
          browser.waitForElementVisible('body',1000);
          browser.waitForElementVisible('#r1-0',1000);
          browser.click('#r1-0');
         browser.getTitle(function(title)
         {
            console.log((title=='QA/QE/SDET Training.' )?"the title is correct: "+title :" title not correct: "+title);
         });
         browser.waitForElementVisible('a#loginButton',3000);
         //browser.waitForElementVisible('a#loginButton',1000);
         browser.click('a#loginButton');
         browser.waitForElementVisible('body',2000);
         browser.waitForElementVisible('input#username.form-control',1000);
         browser.setValue('input#username.form-control','daxesh');
         browser.waitForElementVisible('body',3000);

         browser.end();
     }



};





/*
module.exports = {
     'Demo test Google' : function (browser) {
     browser
     .url('')
     .waitForElementVisible('body', 1000)
     .assert.title('Google')
     .assert.visible('input[type=text]')
     .setValue('input[type=text]', 'rembrandt van rijn')
     .waitForElementVisible('button[name=btnG]', 1000)
     .click('button[name=btnG]')
     .pause(1000)
     .assert.containsText('ol#rso li:first-child',
     'Rembrandt - Wikipedia')
     .end();
}

};*/

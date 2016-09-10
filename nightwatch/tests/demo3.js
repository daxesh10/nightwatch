/**
 * Created by daxes on 9/7/2016.
 */
module.exports={

'demo my test':function(browser)
{
    browser
        .url('https://duckduckgo.com')
        .setValue('#search_form_input_homepage','WebdriverIO')
        .click('#search_button_homepage')
        .getTitle.then(function(title){

            console.log('title is '+title);
        })
        .end();
}



};
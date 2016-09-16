/**
 * Created by daxes on 9/15/2016.
 */

var locators = require('../locators.json');
var urls = require('../url.json');

function SignupPage(browser)
{
    this.browser = browser;

}

SignupPage.prototype={

    defualt:function(){

        this.browser.url('http://dev1.talentscreen.io/#/sign-up');
        this.browser.waitForElemntVisible('body',1000);

    },



    github:function()
    {
        this.browser.waitForElementVisible('body',1000);
        this.browser.assert.elementPresent(locators['signup.github'],'signup.github element is present');
        console.log((this.browser.expect.element(locators['signup.github']).to.be.an('a'))
            ?"signup.github is a href tag"
            :"signup.github is not a href tag");

        this.browser.assert.visible(locators['signup.github'],"signup.github button is visible");
        this.browser.assert.attributeContains(locators['signup.github'],'href','login','signup.github has #/login link');

        this.browser.click(locators['signup.github']);
        this.browser.waitForElementVisible('body',1000);
        this.browser.assert.urlContains('/#/login',' the url is http://dev1.talentscreen.io/#/login');

        //going back to sign up page or this.default

        this.browser.waitForElementVisible('a.btn-success',1000);
        this.browser.assert.elementPresent('a.btn-success','sign up elemnt present');
        this.browser.assert.visible('a.btn-success',' sigin up button visible');
        this.browser.assert.attributeContains('a.btn-success','href','#/sign-up','signup button has link #/sign-up')
        this.browser.click('a.btn-success');
        this.browser.assert.urlContains('#/sign-up', ' the url is now #/sign-up');
        this.browser.assert.urlEquals('http://dev1.talentscreen.io/#/sign-up','url is http://dev1.talentscreen.io/#/sign-up');

        this.browser.pause(1000);
    },

    signupfacebook:function()
    {

        this.defualt();
        this.browser.waitForElementVisible(locators['signup.facebook'],1000);
        this.browser.assert.elementPresent(locators['signup.facebook'],"signup.facebook elemnt is present");
        this.browser.assert.visible(locators['signup.facebook'],'signup.facebook is visible');

        //test for tag a

        console.log((this.browser.expect.element(locators['signup.facebook']).to.be.an('a'))
            ?" signup.facebook is a tag "
            :"signup.facebook is not a tag");

        //test for href

        this.browser.assert.attributeContains(locators['signup.facebook'],'href','/login','signup.facebook links to /login');
        this.browser.click(locators['signup.facebook']);
        //url check
        this.browser.assert.urlContains('login','this page url contains #/login ');
        this.browser.assert.urlEquals('http://dev1.talentscreen.io/#/login','url is http://dev1.talentscreen.io/#/login');



    },

    signupgoogle:function()
        {
            this.defualt();

            this.browser.waitForElementVisible(locators['signup.google'],1000);
            this.browser.assert.visible(locators['signup.google'],'signup.google visible');
            this.browser.assert.elementPresent(locators['signup.google'],'signup.google is present');

            this.browser.assert.attributeContains(locators['signup.google'],'href','#/login',' signup.google href = #/login');
            this.browser.assert.attributeContains(locators['signup.google'],'ui-sref','login','ui-sref = login');

            console.log((
            this.browser.expect.element(locators['signup.google']).to.be.an('a'))
                ?"signup.google is a href tag "
                :"signup.google is not a href tag" );

            this.browser.click(locators['signup.google']);
            this.browser.assert.urlContains('/#/login','this page url contains #/login');
            this.browser.assert.urlEquals('http://dev1.talentscreen.io/#/login','url is http://dev1.talentscreen.io/#/login');

            this.browser.pause(500);






        },

    signuplinkedin:function()
    {
            this.defualt();
            this.browser.waitForElementVisible(locators['signup.linkedin'],1000);
        this.browser.assert.elementpresent(locators['signup.linkedin'],'signup.linkedin ele is present');
        this.browser.assert.visible(locators['signup.linkedin'],'signup.linkedin is visible');
        this.browser.assert.attributeContains(locators['signup.linkedin'],'href','#/login','signup.linkedin has link #/login');

        console.log((this.browser.expect.element(locators['signup.linkedin']).to.be.an('a'))
                ?"signup.linkedin is a href tag"
                :"signup.linkedin is not a href a tag"

        );

        this.browser.assert.attributeConatins(locators['signup.linkedin'],'ui-sref','login','attribute ui-serf=login ');
        this.browser.click(locators['signup.linkedin']);
        //
        this.browser.waitForElementVisible(locators['signup.signin'],1000);
        this.browser.waitForElementVisible(locators['home.logo'],1000);

            this.browser.assert.urlContains('http://dev1.talentscreen.io/#/login','url is http://dev1.talentscreen.io/#/login');
        this.browser.pause(500);




    },
    signupcreateAccount:function(){

        this.defualt();
        this.browser.waitForElementVisible(locators['signup.createAccount'],1000);
        this.browser.assert.elementPresent(locators['signup.createAccount'],'signup.createAccount element is presesnt');
        this.browser.assert.visible(locators['signup.createAccount'],'signup.createAccount is visible');
        //test for field required

        this.browser.click(locators['signup.createAccount']);

        this.browser.assert.attributeContains('div.help-inline>span:nth-child(1)','ng-show','emailAddress.$error','signupcreateAccount clicked with out email');



},

    signupemailIDField:function(){

        this.browser.waitForElementVisible(locators['signup.emailIDField'],1000);
        this.browser.assert.elementPresent(locators['signup.emailIDField'],'signup.emailIDField is present');
        this.browser.setValue(locators['signup.emailIDField'],['dex@gmail.com',this.browser.keys.ENTER]);
        this.browser.assert.attributeContains('div.help-inline>span:nth-child(2)','ng-show','!!mySignUpForm.ePassword.$error.isBlank',
        'password is empty');
    },
    signuppasswordField:function(){

        this.browser.waitForElementVisible(locators['signup.passwordField'],1000);
        this.browser.assert.elementPresent(locators['signup.passwordField'],'signup.passwordField is present');
        this.browser.setValue(locators['signup.passwordField'],['dex',this.browser.keys.ENTER]);
        this.browser.assert.attributeContains('div.help-inline>span:nth-child(2)','ng-show','!!mySignUpForm.mPassword.$error.isBlank',
            'epassword is empty');
    },
    signupconfirmPasswordField:function(){

        this.browser.waitForElementVisible(locators['signup.confirmPasswordField'],1000);
        this.browser.assert.elementPresent(locators['signup.confirmPasswordField'],'signup.passwordField is present');
        this.browser.setValue(locators['signup.confirmPasswordField'],['dex1',this.browser.keys.ENTER]);
        this.browser.assert.attributeContains('div.help-inline>span:nth-child(2)','ng-show','!!mySignUpForm.mPassword.$error.isBlank',
            'mpassword is not match');
    },
    createuser:function()
    {
        this.browser.waitForElementVisible(locators['signup.emailIDField'],1000);
        this.browser.waitForElementVisible(locators['signup.passwordField'],1000);
        this.browser.waitForElementVisible(locators['signup.confirmPasswordField'],1000);

        this.browser.setValue(locators['signup.emailIDField'],'dex123@gamil.com');
        this.browser.setValue(locators['signup.passwordField'],'123');
        this.browser.setValue(locators['signup.confirmPasswordField'],'123');

        this.browser.waitForElementVisible(locators['signup.createAccount'],1000);
        this.browser.isVisible(locators['signup.createAccount'],function(result){

            this.assert.equal(typeof result,'submit');


        });
        this.browser.setValue('##user-agreement','ture');
        this.browser.click(locators['signup.createAccount']);


    },




newusertest:function()
{
    this.browser.waitForElementVisible()







}










}

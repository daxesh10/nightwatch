/**
 * Created by daxes on 9/14/2016.
 */

var locators= require("../locators.json");
var nightwatch = require('nightwatch');
//var chakram = require('chakram');
//expect = chakram.expect;
function Newhomepage(browser)
{
    this.browser= browser;
}

Newhomepage.prototype={

    logocheck:function(){
       // describe('test 1',function(){
         //   it(' click on subject' , function(browser){

                this.browser.waitForElementVisible('#logo',1000);
                this.browser.expect.element('#logo').to.be.present;


           // });

            this.browser.pause(2000);
          this.browser.end();
            console.log(" test passes logo present ");

        //});
    },
    logoclick:function(browser){

        this.browser.url(locators['talentscreen_url']);
        this.browser.expect.element('#logo').to.be.present;
        this.browser.click('#logo');
        this.browser.end;
        console.log('logo click works');


    },
    clickonsubject:function(browser)
    {
        this.browser.url(locators['url-home']);
        this.browser.waitForElementVisible(locators['li a[href=#/website-courses/grid]'],1000);
        this.browser.click(locators['li a[href=#/website-courses/grid]']);
        this.browser.pause(1000);
        this.browser.end;

    },
//navbar-btn btn btn-primary

    loginbutton:function(browser)
    {
        this.browser.expect.element(locators['home.loginButton']).to.be.present;
        this.browser.expect.element(locators['home.loginButton']).to.have.attribute('class').which.equals('navbar-btn btn btn-primary');
        this.browser.click(locators['home.loginButton']);
        this.browser.pause(500);
        this.browser.end;
        //this.browser.window.close();
        console.log(' test for loggin button ');
    },

fulliamgetest:function(browser)
{

    this.browser.expect.element('div.cover-image-full').to.be.present;
    this.browser.expect.element('div.cover-image-full img').to.be.present;
    this.browser.assert.attributeContains('div.cover-image-full img','alt','Learning Cover','it contains alt= learning cover');
    console.log((this.browser.assert.cssClassPresent('div.cover-image-full img','parallax-layer'))
        ?" containg class parallax-layer"
        :" doesnot contain parallax-layer");

    this.browser.assert.containsText(locators['home.image1'],'text','test for cheking text');
    this.browser.assert.cssClassPresent(locators['home.image1'],'cover-image-full','it contains css cover-image-full');
    this.browser.assert.cssProperty(locators['home.image1'],'class','cover-image-full','contains class property value cover-iamge-full');
    this.browser.assert.visible(locators['home.image1']);

},
image2test:function()
{
  this.browser.waitForElemetVisible(locators['gome.image2'],1000);
    this.browser.expect.element(locators['home-image2']).to.be.an('img');
    this.browser.assert.visible(locators['home-image2'],'image present');
    this.browser.assert.elemetPresent(locators['home-image2'],'element presnt');
    this.browser.assert.attributeContains(locators['home-image2'],'src',
        'assets/images/photodune-6745579-modern-creative-man-relaxing-on-workspace-m.jpg',
        'relaxation-m.jpg  present');
    this.browser.assert.cssProperty(locators['home-image2'],'class','parallax-layer');
    this.browser.assert.attributeContains(locators['home-image2'],'data-auto-size','false','no auto-size');
    this.browser.assert.attributeContains(locators['home-image2'],'data-auto-offset','false','no offset');

},
subjectbutton:function()
{
  this.browser.waitForElementVisible(locators['home.subjectButton'],1000);
   this.browser.assert.visible(locators['home.subjectButton'],'subject button present');
    this.browser.assert.attributeContains(locators['home-subjectButton'],'href','website-course',' link to web course');
    this.browser.click(locators['home-subjectButton']);

    this.browser.assert.urlContains('website-courses','web-course in url contains ');
    this.browser.click(locators['home.logo']);
    this.browser.pause(1000);
    this.browser.assert.urlConatins('website-pages','back to home page');



},

    candidateButton:function(){

        this.browser.waitForElementVisible(locators['home.candidateButton'],1000);
        this.browser.assert.elementPresent(locators['home.candidateButton'],'candidateButton present');
        this.browser.assert.visible(locators['home.candidateButton'],'candidateButton visible');
        this.browser.assert.attributeContains(locators['home.candidateButton']
            ,'ng-show','loginShow','candidateButton shows login');
        this.browser.click(locators['home.candidateButton']);
        this.browser.assert.urlContains('login');
        this.browser.waitForElementVisible(locators['home.logo'],1000);
        this.browser.assert.elementPresent(locators['home.candidateButton'],'logo present in login page');
        this.browser.click(locators['home.logo']);
        this.browser.assert.urlContains('home',' login to home page works');
        this.browser.pause(1000);





    },
    textheadline:function()
{
    this.browser.waitForElemensVisible(locators['home.textheadline'],1000);
    this.browser.assert.elementPresent(locators['home.textheadline'],'textheadline presnt');
    this.browser.assert.attributeContains(locators['home.textheadline'],'class','text-headline','elemnt has class text headline')
    this.browser.assert.valueContains(locators['home.textheadline'],'code quiz');



    this.browser.expect.element(locators['home.textheadline']).to.be.an('div');
    console.log(
        (this.browser.expect.element(locators['home.textheadline']).text.which.contains('Timed Quiz'))
    ?" has time quiz"
    :"doesnot have time quiz"
    );

    console.log((this.browser.expect.element(locators['home.textheadline']).text.which.contains('video quiz'))
        ?"has vedio quiz"
        :"doesnot have vedio quiz");

    console.log((this.browser.expect.element(locators['home.textheadline']).text.which.contains('coding quiz'))
        ?"coding quiz present"
        :"coding quiz not present");

    console.log((this.browser.expect.element(locators['home.textheadline']).text.which.contains('Administration'))
        ?"Administration is present"
        :"Administration not present");

    console.log((this.browser.expect.element(locators['home.textheadline']).text.which.contains('reports'))
        ?"reports is present"
        :"reports is not present");

    console.log((
        this.browser.expect.element(locators['home.textheadline']).text.which.contains('Candidate matching'))
    ?"candidate matching is present"
    :"candidate matching is not present");




},
    loginButton:function()
    {
        this.browser.waitForElementVisible(locators['home.loginButton'],1000);
        this.browser.assert.elementPresent(locators['home.loginButton'],'loginButton element is present');
        this.browser.assert.visible(locators['home.loginButton'],'loginButton is visible');
        this.browser.assert.attributeContains(locators['home.loginButton'],'href','login',' href=#/login');
        this.browser.assert.attributeContains(locators['home.loginButton'],'ng-show','loginShow','ng-show = loginShow');
        this.browser.click(locators['home.loginButton']);
        this.browser.assert.urlContains('login','now the url is #/login');
        this.browser.assert.elementNotPresent(locators['home.loginButton'],'doesnt have loginButton on this page')
        this.browser.waitForElementVisible(locators['home.logo'],1000);
        this.browser.assert.visble(locators['home.logo'],'logo visible');
        this.browser.click(locators['home.logo']);
        this.browser.pause(1000);



    },
    browseSubjectsButton:function()
    {
        this.browser.waitForElementVisible(locators['home.browseSubjectsButton'],1000);
        this.browser.assert.elementPresent(locators['home.browseSubjectsButton'],'browseSubjectsButton ele presnt');
        this.browser.assert.visible(locators['home.browseSubjectsButton'],'browseSubjectsButton is visible');
        this.browser.assert.attributeContains(locators['home.browseSubjectsButton'],'href','website-courses','it has website-courses');


        console.log( (this.browser.expect.element(locators['home.browseSubjectsButton']).to.be.an('a'))
            ?"browseSubjectsButton is a tag"
            :"browseSubjectsButton is not a tag");


        this.browser.click(locators['home.browseSubjectsButton']);
        this.browser.waitForElementVisible('body',1000);
        this.browser.assert.urlContains('website-courses/grid','the url contains #/website-courses/grid ');
        this.brwoser.assert.urlEquals('http://dev1.talentscreen.io/#/login',' url is http://dev1.talentscreen.io/#/login');
        this.browser.waitForElementVisible(locators['home.logo'],1000);
        this.browser.assert.elementPresent(locators['home.logo'],'logo present');
        this.browser.click(locators['home.logo']);
        this.browser.assert.urlContains('/home','url now contains #/home');




    },


footertest:function(){

    this.browser.waitForElementVisible(locators['home.footer'],1000);
    this.browser.assert.visible(locators['home.footer']);
    this.browser.assert.elementPresent(locators['home.footer'],'footer-section presnt');
    this.browser.assert.attributeContains(locators['home.footer'],'class','footer-section','has style footer-section');
    this.browser.assert.elementPresent('home-footer','home-footer present');



},
    imagetest:function(browser)
{

    this.browser.expect.element('div.img[alt=Learning Cover]').not.to.be.present;

}






};

module.exports=Newhomepage;

//var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

  this.Given(/^user navigates to GitHub\.com$/, function () {
    return browser.get('https://github.com/');
  });

  this.When(/^user logs in using Username as 'USER' and Password 'PASSWORD'$/, function () {
    return browser.findElement(by.css('.btn.site-header-actions-btn.mr-2'))
                  .then(function(element){
                    return element.click();
                  })
                  .then(function(){
                    return browser.findElement(by.id('login_field'))
                  })
                    .then(function(element){
                      return element.sendKeys('test.acc.helper@gmail.com');
                    })
                  .then(function(){
                    return browser.findElement(by.id('password'))
                  })
                  .then(function(element){
                      return element.sendKeys('12qwASzx');
                    })
                  .then(function(){
                    return browser.findElement(by.css('.btn.btn-primary.btn-block')).then(function(element){
                        return element.click();
                    })
                  })
                  // })
  });

  this.Then(/^login should be successful$/, function (callback) {

   callback(null, 'pending');
 });

  // this.Given(/^I am on the GitHub web site$/, function () {
  //   return browser.get('https://github.com/');

  // });

  // this.When(/^I click on "([^"]*)"$/, function (arg) {
  //   return browser.findElement(by.css('.btn.site-header-actions-btn.mr-2')).then(function(element){
  //     return element.click();
  //     })
  //   });


  // this.Then(/^I click on "([^"]*)"$/, function (arg1) {
  //        // Write code here that turns the phrase above into concrete actions
  //        callback(null, 'pending');
  //      });

};
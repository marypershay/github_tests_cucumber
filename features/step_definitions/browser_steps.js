//var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

  browser.ignoreSynchronization=true;

  this.setDefaultTimeout(60000);

  this.Given(/^I am on the GitHub web site$/, function () {
    return browser.get('https://github.com/');

  });

  this.When(/^I click on menu "([^"]*)"$/, function (arg) {
    return browser.findElement(by.id('user[login]')).then(function(element){
      return element.click();
      })
    });

};
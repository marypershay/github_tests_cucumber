var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

  this.setDefaultTimeout(60000);

  this.Given(/^I am on the GitHub web site$/, function () {
    return this.driver.get('https://github.com/');
  });

  this.When(/^I click on menu "([^"]*)"$/, function (arg) {
    return this.driver.findElement({linkText: "Pricing"}).then(function(element){
      return element.click();
      })
    });

  this.Then(/^I should see title "([^"]*)"$/, function (arg1, callback) {
    callback(null, 'pending');
  });
  // this.Given(/^I am on the GitHub web site$/, function() {
  //   return this.driver.get('https://github.com/');
  // });

  // this.When(/^I click on "([^"]*)"$/, function (text) {
  //   return this.driver.findElement({linkText: text}).then(function(element) {
  //     return element.click();
  //   });
  // });

  // this.Then(/^I should see "([^"]*)"$/, function (text) {
  //   var xpath = "//*[contains(text(),'" + text + "')]";
  //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
  //   return this.driver.wait(condition, 5000);
  // });
};
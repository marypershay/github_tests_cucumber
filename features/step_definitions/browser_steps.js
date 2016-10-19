var LoginPage = require('./loginPage');
var loginPage = new LoginPage();

var HomePage = require('./homePage');
var homePage = new HomePage();

var HomePageLogIn = require('./homePageLogIn');
var homePageLogIn = new HomePageLogIn();


var steps = function() {

  this.Given(/^user navigates to "(.+)"$/, function(url) {
    return browser.get(url);
  });
  this.When(/^user logs in using Username as "([^"]*)" and Password "([^"]*)"$/, function(login, password) {
    return homePage.clickSignInButton()
      .then(function() {
        return loginPage.login(login, password);
      })
  });
 
  this.Then(/^login should be successful$/, function() {
    return browser.findElement(by.css('h2.shelf-title')).isDisplayed();
  });

  this.Given(/^user navigates to "([^"]*)" page$/, function(arg) {
    return homePageLogIn.clickPlusButton();
  });

  this.When(/^user create new repository$/, function() {

  });

  this.Then(/^repository will be create$/, function() {

  });
};

module.exports = steps;
const assert = require('assert');

var LoginPage = require('./pages/loginPage');
var loginPage = new LoginPage();

var HomePage = require('./pages/homePage');
var homePage = new HomePage();

var HeaderLogIn = require('./pages/headerLogIn');
var headerLogIn = new HeaderLogIn();

var CreateRepositoryPage = require('./pages/createRepositoryPage');
var createRepositoryPage = new CreateRepositoryPage();

var RepositoryPage = require('./pages/repositoryPage');
var repositoryPage = new RepositoryPage();


var steps = function() {

  this.Given(/^I navigates to "(.+)"$/, function(url) {
    return browser.get(url);
  });
  this.When(/^I logs in using Username as "([^"]*)" and Password "([^"]*)"$/, function(login, password) {
    return homePage.clickSignInButton()
      .then(function() {
        return loginPage.login(login, password);
      })
  });

  this.Then(/^login should be successful as "([^"]*)"$/, function(login) {
    return headerLogIn.checkProfileOwner()
      .then(function(element) {
        var str = "Signed in as " + login;
        assert.equal(element, str);
      });
  });

  this.When(/^I choose menu "([^"]*)"$/, function(arg) {
    return headerLogIn.chooseNewRepositoryMenuItem();
  });

  this.When(/^I create new repository with name "([^"]*)"$/, function(repositoryName) {
    return createRepositoryPage.createNewRepository(repositoryName);
  });

  this.Then(/^repository created$/, function() {

  });

  this.When(/^I choose repository with name "([^"]*)"$/, function(repositoryName) {
    return homePage.chooseRepositoryItem(repositoryName);
  });

  this.When(/^I choose "([^"]*)" tab menu$/, function(tabMenuItem) {

    return repositoryPage.clickMenuTab(tabMenuItem);
  });

  this.When(/^I delete repository with name "([^"]*)"$/, function(repositoryName) {
    browser.sleep(10000);
    return repositoryPage.deleteRepository(repositoryName);

  });

  this.Then(/^repository with name "([^"]*)" deleted$/, function(repositoryName) {
    return homePage.getAlertMessage()
      .then(function(element) {
        var str = 'Your repository \"testacchelper/' + repositoryName + '" was successfully deleted.';
        assert.equal(element, str);
      })
  });

  this.When(/^I rename repository to name "([^"]*)"$/, function(repositoryName) {
    browser.sleep(10000);
    return repositoryPage.renameRepository(repositoryName);
  });

  this.Then(/^repository renamed$/, function() {

  });

  this.When(/^I want to create new file with name "([^"]*)"$/, function(newFileName) {
    return repositoryPage.createNewFile(newFileName);
  });
};

module.exports = steps;
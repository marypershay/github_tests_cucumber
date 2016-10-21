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

var ExplorePage = require('./pages/explorePage');
var explorePage = new ExplorePage();


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

  this.When(/^I choose repository with name "([^"]*)"$/, function(repositoryName) {
    return homePage.chooseRepositoryItem(repositoryName);
  });

  this.When(/^I choose "([^"]*)" tab menu$/, function(tabMenuItem) {
    return repositoryPage.clickMenuTab(tabMenuItem);
  });

  this.When(/^I delete repository with name "([^"]*)"$/, function(repositoryName) {
    return repositoryPage.deleteRepository(repositoryName);

  });

  this.Then(/^I don't see repository with name "([^"]*)"$/, function(repositoryName) {
    return homePage.getAlertMessage()
      .then(function(element) {
        var str = 'Your repository \"testacchelper/' + repositoryName + '" was successfully deleted.';
        assert.equal(element, str);
      })
  });

  this.When(/^I rename repository to name "([^"]*)"$/, function(repositoryName) {
    return repositoryPage.renameRepository(repositoryName);
  });

  this.Then(/^I see repository with name "([^"]*)"$/, function(repositoryName) {
    return repositoryPage.getRepositoryName()
      .then(function(element) {
        assert(element, repositoryName);
      });
  });

  this.When(/^I create new file with name "([^"]*)"$/, function(newFileName) {
    return repositoryPage.createNewFile(newFileName);
  });

  this.Then(/^I see file with name "([^"]*)"$/, function(newFileName) {
    return repositoryPage.getFileName()
      .then(function(element) {
        assert.equal(element, newFileName);
      })
  });

  this.When(/^I create new branch with name "([^"]*)"$/, function(newBranchName) {
    return repositoryPage.createNewBranch(newBranchName);
  });

  this.Then(/^I see new branch with name "([^"]*)"$/, function(newBranchName) {
    return repositoryPage.getBranchName()
      .then(function(element) {
        assert.equal(element, newBranchName);
      })
  });

  this.When(/^I choose "([^"]*)"$/, function(exploreGit) {
    return homePage.clickExploreButton();
  });

  this.When(/^I choose "([^"]*)" category$/, function(exploreCategory) {
    return explorePage.chooseExploreCategory(exploreCategory);
  });

  this.When(/^I choose "([^"]*)" repository$/, function(repositoryName) {
    return explorePage.chooseRepository(repositoryName);
  });

};

module.exports = steps;
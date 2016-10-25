const assert = require('assert');

var LoginPage = require('../support/pages/loginPage');

var HomePage = require('../support/pages/homePage');

var CreateRepositoryPage = require('../support/pages/createRepositoryPage');

var RepositoryPage = require('../support/pages/repositoryPage');

var ExplorePage = require('../support/pages/explorePage');

var steps = function() {

  this.Given(/^I navigates to "(.+)"$/, function(url) {
    return browser.get(url);
  });
  this.When(/^I click on Sign In button$/, function() {
    return (new HomePage()).clickSignInButton();
  });
  this.When(/^I logs in using Username as "([^"]*)" and Password "([^"]*)"$/, function(login, password) {
    return (new LoginPage()).login(login, password);
  });

  this.Then(/^login should be successful as "([^"]*)"$/, function(login) {
    return (new HomePage()).checkProfileOwner()
      .then(function(element) {
        var str = "Signed in as " + login;
        assert.equal(element, str);
      });
  });

  this.When(/^I choose menu "([^"]*)"$/, function(arg) {
    return (new HomePage()).chooseNewRepositoryMenuItem();
  });

  this.When(/^I create new repository with name "([^"]*)"$/, function(repositoryName) {
    return (new CreateRepositoryPage()).createNewRepository(repositoryName);
  });

  this.When(/^I choose repository with name "([^"]*)"$/, function(repositoryName) {
    return (new HomePage()).chooseRepositoryItem(repositoryName);
  });

  this.When(/^I choose "([^"]*)" tab menu$/, function(tabMenuItem) {
    return (new RepositoryPage()).clickMenuTab(tabMenuItem);
  });

  this.When(/^I delete repository with name "([^"]*)"$/, function(repositoryName) {
    return (new RepositoryPage()).deleteRepository(repositoryName);

  });

  this.Then(/^I don't see repository with name "([^"]*)"$/, function(repositoryName) {
    return (new HomePage()).getAlertMessage()
      .then(function(element) {
        var str = 'Your repository \"testacchelper/' + repositoryName + '" was successfully deleted.';
        assert.equal(element, str);
      })
  });

  this.When(/^I rename repository to name "([^"]*)"$/, function(repositoryName) {
    return (new RepositoryPage()).renameRepository(repositoryName);
  });

  this.Then(/^I see repository with name "([^"]*)"$/, function(repositoryName) {
    return (new RepositoryPage()).getRepositoryName()
      .then(function(element) {
        assert(element, repositoryName);
      });
  });

  this.When(/^I create new file with name "([^"]*)"$/, function(newFileName) {
    return (new RepositoryPage()).createNewFile(newFileName);
  });

  this.Then(/^I see file with name "([^"]*)"$/, function(newFileName) {
    return (new RepositoryPage()).getFileName()
      .then(function(element) {
        assert.equal(element, newFileName);
      })
  });

  this.When(/^I create new branch with name "([^"]*)"$/, function(newBranchName) {
    return (new RepositoryPage()).createNewBranch(newBranchName);
  });

  this.Then(/^I see new branch with name "([^"]*)"$/, function(newBranchName) {
    return (new RepositoryPage()).getBranchName()
      .then(function(element) {
        assert.equal(element, newBranchName);
      })
  });

  this.When(/^I choose Explore GitHub$/, function() {
    return (new HomePage()).clickExploreButton();
  });

  this.When(/^I choose "([^"]*)" category$/, function(exploreCategory) {
    return (new ExplorePage()).chooseExploreCategory(exploreCategory);
  });

  this.When(/^I choose "([^"]*)" repository$/, function(repositoryName) {
    return (new ExplorePage()).chooseRepository(repositoryName);
  });

};

module.exports = steps;
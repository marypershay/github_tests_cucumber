var Page = require('./page');
var Inherit = require('./inherit');

Inherit(HomePage, Page);

function HomePage() {

    this.signInButton = element(by.css('.btn.site-header-actions-btn.mr-2'));
  	this.alertMessage = element(by.css('.flash-notice div'));
  	this.exploreButton = element(by.css('.btn.btn-outline'));

    this.selectRepositoryItem = function(repositoryName){
    	var str = '#repo_listing a[href$="'+ repositoryName +'"]';
    	return element(by.css(str));
    };
    this.clickSignInButton = function(){
    	return this.signInButton.click();
    };

    this.chooseRepositoryItem = function(repositoryName){
    	return this.selectRepositoryItem(repositoryName).click();
    };

    this.getAlertMessage = function(){
    	return this.alertMessage.getText();
    };

    this.clickExploreButton = function(){
    	return this.exploreButton.click();
    };
};

module.exports = HomePage;
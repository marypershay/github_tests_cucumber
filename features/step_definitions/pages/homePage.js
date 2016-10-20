var HomePage = function() {
    var signInButton = element(by.css('.btn.site-header-actions-btn.mr-2'));
  	var alertMessage = browser.element(by.css('.flash-notice div'));

    this.selectRepositoryItem = function(repositoryName){
    	var str = '#repo_listing a[href*="'+ repositoryName +'"]';
    	return element(by.css(str));
    }
    this.clickSignInButton = function(){
    	return signInButton.click();
    }

    this.chooseRepositoryItem = function(repositoryName){
    	return this.selectRepositoryItem(repositoryName).click();
    }

    this.getAlertMessage = function(){
    	return alertMessage.getText();
    }

};

module.exports = HomePage;
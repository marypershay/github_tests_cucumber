var HomePage = function() {
    var signInButton = element(by.css('.btn.site-header-actions-btn.mr-2'));

    this.clickSignInButton = function(){
    	return signInButton.click();
    }
};

module.exports = HomePage;
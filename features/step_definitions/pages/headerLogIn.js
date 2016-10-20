var HeaderLogIn = function() {
    var plusButton = element(by.css('#user-links li:nth-child(2) > a:first-child'));
    var newRepositoryMenuItem = element(by.css('#user-links .dropdown-menu a:first-child'));
    var profileMenu = element(by.css('#user-links .header-nav-item:nth-child(3) a:first-child'));
    var profileName = element(by.css('.dropdown-header.header-nav-current-user'));

    this.clickPlusButton = function(){
    	return plusButton.click();
    }
    this.chooseNewRepositoryMenuItem = function(){
    	return plusButton.click()
    	        .then(function(){
          return newRepositoryMenuItem.click();
        });
    }

    this.checkProfileOwner = function(){
        return profileMenu.click()
            .then(function(){
                return profileName.getText();
            });
    }

};

module.exports = HeaderLogIn;
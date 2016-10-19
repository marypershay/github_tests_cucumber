var HomePageLogIn = function() {
    var plusButton = element(by.css('#user-links li:nth-child(2) > a:first-child'));
    var newRepositoryMenuItem = element(by.css('#user-links .dropdown-menu a:first-child'));

    this.clickPlusButton = function(){
    	return plusButton.click();
    	
    }
    this.chooseMenuItem = function(){
    	return plusButton.click()
    	        .then(function(){
          return element(by.css('#user-links .dropdown-menu a:first-child')).click();
        });
    }
};

module.exports = HomePageLogIn;
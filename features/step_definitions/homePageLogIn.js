var HomePageLogIn = function() {
    var plusButton = element(by.css('#user-links li:nth-child(2) > a:first-child'));

    this.clickPlusButton = function(){
    	return plusButton.click();
    }
};

module.exports = HomePageLogIn;
var LoginPage = require('../support/pages/loginPage');

var HomePage = require('../support/pages/homePage');

var isStart = true;

module.exports = function() {

	this.setDefaultTimeout(60000);

	this.Before(function() {
		browser.ignoreSynchronization = true;
		if (isStart) {
			isStart = false;
			browser.get("https://github.com/");
			return (new HomePage()).clickSignInButton()
				.then(function() {
					return (new LoginPage()).login("test.acc.helper@gmail.com", "12qwASzx");
				});
		}
	});

	this.signOutMenuItem = element(by.css('logout-form'));

	// this.AfterStep(function() {
	// 	var profileMenu = element(by.css('#user-links .header-nav-item:nth-child(3) a:first-child'));
	// 	return profileMenu.click();
	// 	// .then(function(){
	// 	// 	_this.signOutMenuItem.click();
	// 	// });
	// });
};
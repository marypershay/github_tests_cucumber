var LoginPage = function() {
	var loginInput = element(by.id('login_field'));
	var passwordInput = element(by.id('password'));
	var signInButton = element(by.css('.btn.btn-primary.btn-block'));

	this.setPassword = function(password) {
		return passwordInput.sendKeys(password);
	};

	this.setLogin = function(login) {
		return loginInput.sendKeys(login);
	};
	this.login = function(login, password) {
		var _this = this;
		return  _this.setLogin(login)	
			.then(function() {
				return _this.setPassword(password);
			})
			.then(function() {
				return signInButton.click();
			});
	};
};



module.exports = LoginPage;
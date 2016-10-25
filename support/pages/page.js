function Page() {};

Page.prototype.plusButton = element(by.css('#user-links li:nth-child(2) > a:first-child'));
Page.prototype.newRepositoryMenuItem = element(by.css('#user-links .dropdown-menu a:first-child'));
Page.prototype.profileMenu = element(by.css('#user-links .header-nav-item:nth-child(3) a:first-child'));
Page.prototype.profileName = element(by.css('.dropdown-header.header-nav-current-user'));

Page.prototype.clickPlusButton = function() {
	return this.plusButton.click();
};

Page.prototype.chooseNewRepositoryMenuItem = function() {
	var _this = this;
	return this.plusButton.click()
		.then(function() {
			return _this.newRepositoryMenuItem.click();
		});
};

Page.prototype.checkProfileOwner = function() {
	var _this = this;
	return this.profileMenu.click()
		.then(function() {
			return _this.profileName.getText();
		});
};

module.exports = Page;
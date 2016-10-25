module.exports = function () {

	this.setDefaultTimeout(60000);
	
	this.Before(function () {
		browser.ignoreSynchronization=true;
	});

};
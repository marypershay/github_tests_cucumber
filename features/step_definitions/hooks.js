module.exports = function () {

	this.setDefaultTimeout(60000);
	
	this.BeforeStep(function () {

		browser.ignoreSynchronization=true;

	});

	// this.AfterStep(function() {
	// 	return browser.quit();
	// });
};
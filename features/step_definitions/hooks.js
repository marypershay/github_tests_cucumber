module.exports = function () {
  this.After(function() {
    return browser.quit();
  });
};
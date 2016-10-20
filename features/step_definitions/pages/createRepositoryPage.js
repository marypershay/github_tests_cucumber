var CreateRepositoryPage = function() {
    var repositoryNameInput = element(by.id('repository_name'));
    var createButton = element(by.css('.first-in-line'));
    var addReadmeCheckBox = element(by.css('#repository_auto_init'));

    this.clickCreateButton = function() {
        return createButton.click();

    }
    this.createNewRepository = function(repositoryName) {
        return repositoryNameInput.sendKeys(repositoryName)
            .then(function() {
                return addReadmeCheckBox.click()
            })
            .then(function() {
                return createButton.click();
            });


    }
};

module.exports = CreateRepositoryPage;
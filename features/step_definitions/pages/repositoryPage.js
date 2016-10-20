var RepositoryPage = function() {

    var deleteButton = element.all(by.css('.btn.btn-danger.boxed-action')).get(2);
    var repositoryNameInput = element(by.css('#facebox p input'));
    var deleteButtonFrame = element(by.css('#facebox button.btn'));
    var renameRepositoryInput = element(by.css('#rename_field'));
    var renameRepositoryButton = element(by.css('input+button'));
    var createNewFileButton = element(by.css('.BtnGroup-form .btn.btn-sm.BtnGroup-item'));
    var newFileInput = element(by.css('.js-blob-filename'));
    var commitNewFileButton = element(by.css('#submit-file'));
    var newFileField = element.all(by.css('tr td.content span')).get(0);
    var branchButton = element(by.css('.branch-select-menu'));
    var branchNameInput = element(by.css('#context-commitish-filter-field'));
    var createBranchButton = element(by.css('.js-create-branch'));
    var branchName = element(by.css('.branch-select-menu button span'));

    this.selectMenuTab = function(tabMenuItem) {
        this.tabMenuItem = tabMenuItem.toLowerCase();
        var str = 'a[href*="' + this.tabMenuItem + '"].js-selected-navigation-item';
        return element(by.css(str));
    }

    this.clickMenuTab = function(tabMenuItem) {
        return this.selectMenuTab(tabMenuItem).click();
    }

    this.deleteRepository = function(repositoryName) {
        return browser.findElement(by.css('.site-footer-container')).isDisplayed()
            .then(function() {
                return deleteButton.click()
            })
            .then(function() {
                return repositoryNameInput.sendKeys(repositoryName);
            })
            .then(function() {
                return deleteButtonFrame.click();
            })
    }

    this.renameRepository = function(repositoryName) {
        return renameRepositoryInput.clear()
            .then(function() {
                return renameRepositoryInput.sendKeys(repositoryName)
                    .then(function() {
                        return renameRepositoryButton.click();
                    })
            });

    }

    this.createNewFile = function(newFileName) {
        return createNewFileButton.click()
            .then(function() {
                return newFileInput.sendKeys(newFileName);
            })
            .then(function() {
                return commitNewFileButton.click();
            });

    }

    this.createNewBranch = function(newBranchName){
        browser.sleep(3000);
        return branchButton.click()
            .then(function(){
                return branchNameInput.sendKeys(newBranchName);
            })
            .then(function(){
                browser.sleep(3000);
                return createBranchButton.click();
            })
    }

    this.getBranchName = function(){
        return branchName.getText();
    }

    this.getFileName = function(){
        return newFileField.getText();
    }
};

module.exports = RepositoryPage;
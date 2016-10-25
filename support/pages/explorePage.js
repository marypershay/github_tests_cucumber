var ExplorePage = function() {
    var signInButton = element(by.css('.btn.site-header-actions-btn.mr-2'));
    var exploreCategories = element.all(by.css('.exploregrid-item-title'));

    this.selectExploreCategory = function(exploreCategory) {
        return exploreCategories.filter(function(elem, index) {
            return elem.getText().then(function(text) {
                return text === exploreCategory;
            });
        });
    }

    this.selectRepository = function(repositoryName) {
        var str = 'a[href$="' + repositoryName + '"]';
        return element(by.css(str));
    }

    this.chooseExploreCategory = function(exploreCategory) {
        return this.selectExploreCategory(exploreCategory).click();
    }

    this.chooseRepository = function(repositoryName) {
        return this.selectRepository(repositoryName).click();
    }
};

module.exports = ExplorePage;
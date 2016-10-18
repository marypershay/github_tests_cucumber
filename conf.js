var platforms = {

    mobile: '--window-size=500,800',
    tabletP: '--window-size=768,1024',
    tabletL: '--window-size=1024,768',
    desktop: '--window-size=1280,800'

};

exports.config = {

    specs: ['features/*.feature'],

    capabilities: {
        browserName: 'chrome',
    },

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : [
            'features/support/world.js',
            'features/step_definitions/*.js',
        ],
        format: "summary"
    },

};

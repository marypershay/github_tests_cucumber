exports.config = {

    specs: ['features/*.feature'],

    capabilities: {
        browserName: 'chrome',
        chromeOptions : {
            args: ['start-maximized','--disable-extensions']
        }
    },

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : [
            'support/world.js',
            'step_definitions/*.js',
        ],
        format: "pretty"
    },

};

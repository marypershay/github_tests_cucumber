exports.config = {

    multiCapabilities: [
    {
        browserName: 'chrome',
        specs: ['features/repository.feature']
    },
     {
        browserName: 'firefox',
        specs: ['features/general.feature']
    }
    ],

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,



    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {

        require: [
            'support/world.js',
            'step_definitions/*.js',
        ],
        format: "pretty"
    },

};
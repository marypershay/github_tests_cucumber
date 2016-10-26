exports.config = {

    specs: ['features/*.feature'],

    multiCapabilities: [
    // {
    //     name: 'chrome_desktop',
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ['start-maximized', '--disable-extensions']
    //     }
    // },
    //  {
    //     name: 'chrome_tablet',
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         args: ['--window-size=768,1024', '--disable-extensions']
    //     }
    // },
     {
        name: 'phantomjs',
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path
    },
     {
        name: 'firefox',
        browserName: 'firefox',
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
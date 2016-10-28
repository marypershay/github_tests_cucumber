var gulp = require('gulp');
var util = require('gulp-util');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('default', ['dev', 'multi']);

util.env.view ? process.env.VIEW = util.env.view : process.env.VIEW = 'desktop';
util.env.browser ? process.env.BROWSER = util.env.browser : process.env.BROWSER = 'chrome';
util.env.tag ? process.env.TAG = util.env.tag : process.env.TAG = '@desktop';

gulp.task("dev", function() {

	return gulp.src(['features/*'])
		.pipe(angularProtractor({
			'configFile': 'protractor.conf.js',
			'autoStartStopServer': true,
			'debug': false,
			'args': ['--cucumberOpts.tags', process.env.TAG,
			'--browser', process.env.BROWSER
			]
		}))
		.on('error', function(e) {
			throw e
		});
});

gulp.task("multi", function() {

	return gulp.src(['*.features'])
		.pipe(angularProtractor({
			'configFile': 'protractor.conf.mult.js',
			'autoStartStopServer': true,
			'debug': false,
			'args': ['--cucumberOpts.tags', process.env.TAG]
		}))
		.on('error', function(e) {
			throw e
		});
});
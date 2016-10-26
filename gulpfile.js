var gulp = require('gulp');
var util = require('gulp-util');
var angularProtractor = require('gulp-angular-protractor');

gulp.task('default', ['dev', 'multi']);

util.env.view ? process.env.VIEW = util.env.view : process.env.VIEW = 'desktop';

gulp.task("dev", function() {

	return gulp.src(['features/*'])
		.pipe(angularProtractor({
			'configFile': 'protractor.conf.js',
			'autoStartStopServer': true,
			'debug': false,
			'args': ['--cucumberOpts.tags', '~@ignore'
			]
		}))
		.on('error', function(e) {
			throw e
		});
});

gulp.task("multi", function() {

	return gulp.src(['features/*'])
		.pipe(angularProtractor({
			'configFile': 'protractor.conf.mult.js',
			'autoStartStopServer': true,
			'debug': false,
		}))
		.on('error', function(e) {
			throw e
		});
});
var gulp = require('gulp');
// var webdriver_update = require('gulp-protractor').webdriver_update;
// var protractor = require('gulp-protractor').protractor;

var cucumber = require('gulp-cucumber');



// gulp.task("webdriver_update", webdriver_update);

// gulp.task("test", function() {
// 	return gulp.src('features/*')
// 		.pipe(protractor({
// 			configFile: "conf.js"
// 		}))
// 		.on("error", function(e) {
// 			throw e;
// 		});
// });
var angularProtractor = require('gulp-angular-protractor');


gulp.task("test", function() {
	return gulp.src(['./src/tests/*.js'])
		.pipe(angularProtractor({
			'configFile': 'conf.js',
			'autoStartStopServer': true,
			'debug': false
		}))
		.on('error', function(e) {
			throw e
		});
});
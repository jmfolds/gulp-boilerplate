var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	config = {
		appSource: '*.js'
	};

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('lint', function() {
  return gulp.src([config.appSource])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
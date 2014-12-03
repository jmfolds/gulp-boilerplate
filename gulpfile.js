var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	watch = require('gulp-watch'),
	config = {
		appSource: '*.js'
	};

// gulp.task('default', ['lint', 'watch']);
gulp.task('default', function () {
    gulp.src(config.appSource)
        .pipe(watch(config.appSource, ['lint']));
});
gulp.task('watch', function() {
	gulp.watch(config.appSource, ['lint']);
});

gulp.task('lint', function() {
  return gulp.src([config.appSource])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    //add beep
    .on('error', console.log.bind(console, '\007'));
});
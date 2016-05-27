var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream');


function bundleApp() {
	var appBundler = browserify({
    	entries: './client/index.js',
    	debug: true
  	})
 
  	return appBundler
	  	.transform("babelify", {presets: ["es2015", "react"]})
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(buffer())
	    .pipe(uglify())
	    .pipe(gulp.dest('./public/js/'));
}

gulp.task('browserify', function () {
    return bundleApp();
});

gulp.task('watch', ['browserify'], function () {
    gulp.watch('client/*.js', ['browserify']);
});

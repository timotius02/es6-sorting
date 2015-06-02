var gulp = require('gulp');
var shell = require('gulp-shell');

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('selectionSort', function() {
    browserify({
    entries: './selectionSort/test.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./selectionSort'))
    .pipe(shell('node ./selectionSort/output.js'));
});

gulp.task('bubbleSort', function() {
    browserify({
    entries: './bubbleSort/test.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./bubbleSort'))
    .pipe(shell('node ./bubbleSort/output.js'));
});
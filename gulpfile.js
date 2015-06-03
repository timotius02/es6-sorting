var gulp = require('gulp');
var mocha = require('gulp-mocha')

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var Promise = require('bluebird');

var sort = ['selectionSort', 'bubbleSort', 'insertionSort', 'mergeSort', 'quickSort'];

var buildTask = function(sortName) {
    return new Promise(function(resolve, reject) {
        browserify({
            entries: './'+ sortName +'/test.js',
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('output.js'))
        .pipe(gulp.dest('./'+ sortName +''))
        .pipe(mocha({reporter: 'spec'}))
        .pipe( function() {
            resolve();
        });
    });
}

sort.map(function( sortName ) {
    gulp.task(sortName, function() {
        buildTask(sortName)
    });
});

gulp.task('test', function() {
    buildTask('selectionSort')
        .then(buildTask('bubbleSort'))
        .then(buildTask('insertionSort'))
        .then(buildTask('mergeSort'))
        .then(buildTask('quickSort'))
        .catch(function(e) {
            console.log(e);
        });
});
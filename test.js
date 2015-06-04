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
        .pipe(gulp.dest('./'+ sortName))
        .pipe(mocha({reporter: 'spec'}))
        .on('end', function() {
            resolve('finish');
        });
    })

}

Promise.map(sort, function(sortName) {
    return buildTask(sortName);
},{concurrency: 1}).then(console.log('hello'))

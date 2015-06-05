var gulp = require('gulp');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha')
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var Promise = require('bluebird');

var sort = ['selectionSort', 'bubbleSort', 'insertionSort', 'mergeSort', 'quickSort', 'heapSort', 'countingSort'];

gulp.task('test', function() {
    Promise.map(sort, function(sortName) {
            return buildTask(sortName);
        }, {
            concurrency: 1
        })
        .then(function() {
            console.log("done");
        });
});


var buildTask = function(sortName) {
    return new Promise(function(resolve, reject) {
        browserify({
                entries: './' + sortName + '/test.js',
                debug: true
            })
            .transform(babelify)
            .bundle()
            .pipe(source('output.js'))
            .pipe(gulp.dest('./' + sortName))
            .pipe(mocha({
                reporter: 'spec'
            }))
            .on('end', function() {
                resolve('finish');
            });
    })

}

sort.map(function(sortName) {
    gulp.task(sortName, function() {
        buildTask(sortName)
    });
});

gulp.task('test', function() {
    Promise.map(sort, function(sortName) {
        return buildTask(sortName);
    }, {
        concurrency: 1
    }).then(function() {
        gutil.log(gutil.colors.green('Tests are Successful!'));
    })
});

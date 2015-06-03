var gulp = require('gulp');
var mocha = require('gulp-mocha')

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var sort = ['selectionSort', 'bubbleSort', 'insertionSort', 'mergeSort', 'quickSort'];

sort.map(function( sortName ) {
    gulp.task(sortName, function() {
        browserify({
                entries: './'+ sortName +'/test.js',
                debug: true
            })
            .transform(babelify)
            .bundle()
            .pipe(source('output.js'))
            .pipe(gulp.dest('./'+ sortName +''))
            .pipe(mocha({reporter: 'spec'}));
    });
});

gulp.task('test', function() {

});
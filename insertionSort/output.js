(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var insertionSort = require('./index');

/**
 * Creates a random array 
 * @param  {Number} size  [Optional] Size of the array
 * @param  {Number} range [Optional] Range of the Array
 * @return {Array}        Random array 
 */
var randomArray = function randomArray() {
  var size = arguments[0] === undefined ? 100 : arguments[0];
  var range = arguments[1] === undefined ? 100 : arguments[1];

  var result = [];

  for (var i = size; i > 0; i--) {
    result.push(Math.floor(Math.random() * range));
  }
  return result;
};

var testSubject = randomArray();
insertionSort(testSubject);
console.log(testSubject);

},{"./index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var defaultCompare = function defaultCompare(a, b) {
	return a - b;
};

/**
 * Bubble sort with O(n^2) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */

exports['default'] = function (array) {
	var compare = arguments[1] === undefined ? defaultCompare : arguments[1];

	for (var i = 1, _length = array.length; i < _length; i++) {
		var temp = 0;
		for (var j = i; j > 0; j--) {
			if (compare(array[j - 1], array[j]) > 0) {
				temp = array[j - 1];
				array[j - 1] = array[j];
				array[j] = temp;
			}
		}
	}
};

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L2luc2VydGlvblNvcnQvdGVzdC5qcyIsIi9Vc2Vycy90aW1vdGl1czAyL2NvZGUvZXM2LXNvcnQvaW5zZXJ0aW9uU29ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O0FBUXpDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBVyxHQUFpQztNQUFyQixJQUFJLGdDQUFDLEdBQUc7TUFBRSxLQUFLLGdDQUFDLEdBQUc7O0FBQy9DLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsT0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixVQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDL0M7QUFDRCxTQUFPLE1BQU0sQ0FBQztDQUNkLENBQUE7O0FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDaEMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7OztBQ3JCekIsWUFBWSxDQUFDOzs7OztBQUViLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLFFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNiLENBQUE7Ozs7Ozs7OztxQkFRYyxVQUFTLEtBQUssRUFBNEI7S0FBMUIsT0FBTyxnQ0FBRyxjQUFjOztBQUN0RCxNQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELE1BQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNiLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsT0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkMsUUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsU0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsU0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNoQjtHQUNEO0VBQ0Q7Q0FDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGluc2VydGlvblNvcnQgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbSBhcnJheSBcbiAqIEBwYXJhbSAge051bWJlcn0gc2l6ZSAgW09wdGlvbmFsXSBTaXplIG9mIHRoZSBhcnJheVxuICogQHBhcmFtICB7TnVtYmVyfSByYW5nZSBbT3B0aW9uYWxdIFJhbmdlIG9mIHRoZSBBcnJheVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBSYW5kb20gYXJyYXkgXG4gKi9cbmNvbnN0IHJhbmRvbUFycmF5ID0gZnVuY3Rpb24oc2l6ZT0xMDAsIHJhbmdlPTEwMCkge1xuXHRsZXQgcmVzdWx0ID0gW107XG5cblx0Zm9yIChsZXQgaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcblx0XHRyZXN1bHQucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSkpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmxldCB0ZXN0U3ViamVjdCA9IHJhbmRvbUFycmF5KCk7XG5pbnNlcnRpb25Tb3J0KHRlc3RTdWJqZWN0KTtcbmNvbnNvbGUubG9nKHRlc3RTdWJqZWN0KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdENvbXBhcmUgPSBmdW5jdGlvbihhLCBiKSB7XG5cdHJldHVybiBhIC0gYjtcbn1cblxuLyoqXG4gKiBCdWJibGUgc29ydCB3aXRoIE8obl4yKSB0aW1lIGNvbXBsZXhpdHlcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgICAgICAgICAgQXJyYXkgdG8gYmUgc29ydGVkXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSBcdCAgIENvbXBhcmUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgICAgU29ydGVkIEFycmF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBjb21wYXJlID0gZGVmYXVsdENvbXBhcmUpIHtcblx0Zm9yIChsZXQgaSA9IDEsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRlbXAgPSAwO1xuXHRcdGZvciAobGV0IGogPSBpOyBqID4gMDsgai0tKSB7XG5cdFx0XHRpZiAoIGNvbXBhcmUoYXJyYXlbai0xXSwgYXJyYXlbal0pID4gMCkge1xuXHRcdFx0XHR0ZW1wID0gYXJyYXlbai0xXTtcblx0XHRcdFx0YXJyYXlbai0xXSA9IGFycmF5W2pdO1xuXHRcdFx0XHRhcnJheVtqXSA9IHRlbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il19

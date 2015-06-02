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
var result = insertionSort(testSubject);
console.log(result);

},{"./index":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var defaultCompare = function defaultCompare(a, b) {
	return a - b;
};

/**
 * InsertionSort with O(n^2) time complexity
 * @param  {Array} arr             Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */

exports['default'] = function (arr) {
	var compare = arguments[1] === undefined ? defaultCompare : arguments[1];

	var array = arr.slice();
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
	return array;
};

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L2luc2VydGlvblNvcnQvdGVzdC5qcyIsIi9Vc2Vycy90aW1vdGl1czAyL2NvZGUvZXM2LXNvcnQvaW5zZXJ0aW9uU29ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O0FBUXpDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBVyxHQUFpQztNQUFyQixJQUFJLGdDQUFDLEdBQUc7TUFBRSxLQUFLLGdDQUFDLEdBQUc7O0FBQy9DLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsT0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixVQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDL0M7QUFDRCxTQUFPLE1BQU0sQ0FBQztDQUNkLENBQUE7O0FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDaEMsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7OztBQ3JCcEIsWUFBWSxDQUFDOzs7OztBQUViLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLFFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNiLENBQUE7Ozs7Ozs7OztxQkFRYyxVQUFTLEdBQUcsRUFBNEI7S0FBMUIsT0FBTyxnQ0FBRyxjQUFjOztBQUNwRCxLQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEIsTUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCxNQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNCLE9BQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZDLFFBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFNBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLFNBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDaEI7R0FDRDtFQUNEO0FBQ0QsUUFBTyxLQUFLLENBQUM7Q0FDYiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGluc2VydGlvblNvcnQgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJhbmRvbSBhcnJheSBcbiAqIEBwYXJhbSAge051bWJlcn0gc2l6ZSAgW09wdGlvbmFsXSBTaXplIG9mIHRoZSBhcnJheVxuICogQHBhcmFtICB7TnVtYmVyfSByYW5nZSBbT3B0aW9uYWxdIFJhbmdlIG9mIHRoZSBBcnJheVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICBSYW5kb20gYXJyYXkgXG4gKi9cbmNvbnN0IHJhbmRvbUFycmF5ID0gZnVuY3Rpb24oc2l6ZT0xMDAsIHJhbmdlPTEwMCkge1xuXHRsZXQgcmVzdWx0ID0gW107XG5cblx0Zm9yIChsZXQgaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcblx0XHRyZXN1bHQucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSkpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmxldCB0ZXN0U3ViamVjdCA9IHJhbmRvbUFycmF5KCk7XG5sZXQgcmVzdWx0ID0gaW5zZXJ0aW9uU29ydCh0ZXN0U3ViamVjdCk7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0Q29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcblx0cmV0dXJuIGEgLSBiO1xufVxuXG4vKipcbiAqIEluc2VydGlvblNvcnQgd2l0aCBPKG5eMikgdGltZSBjb21wbGV4aXR5XG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgICAgICAgICAgIEFycmF5IHRvIGJlIHNvcnRlZFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgXHQgICBDb21wYXJlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgICAgIFNvcnRlZCBBcnJheVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnIsIGNvbXBhcmUgPSBkZWZhdWx0Q29tcGFyZSkge1xuXHRsZXQgYXJyYXkgPSBhcnIuc2xpY2UoKTtcblx0Zm9yIChsZXQgaSA9IDEsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRlbXAgPSAwO1xuXHRcdGZvciAobGV0IGogPSBpOyBqID4gMDsgai0tKSB7XG5cdFx0XHRpZiAoIGNvbXBhcmUoYXJyYXlbai0xXSwgYXJyYXlbal0pID4gMCkge1xuXHRcdFx0XHR0ZW1wID0gYXJyYXlbai0xXTtcblx0XHRcdFx0YXJyYXlbai0xXSA9IGFycmF5W2pdO1xuXHRcdFx0XHRhcnJheVtqXSA9IHRlbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhcnJheTtcbn0iXX0=

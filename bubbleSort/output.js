(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var selectionSort = require('./index');

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
selectionSort(testSubject);
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

	var temp = 0;
	for (var i = array.length - 1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (compare(array[j], array[j + 1]) > 0) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
};

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L2J1YmJsZVNvcnQvdGVzdC5qcyIsIi9Vc2Vycy90aW1vdGl1czAyL2NvZGUvZXM2LXNvcnQvYnViYmxlU29ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O0FBUXpDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBVyxHQUFpQztNQUFyQixJQUFJLGdDQUFDLEdBQUc7TUFBRSxLQUFLLGdDQUFDLEdBQUc7O0FBQy9DLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsT0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixVQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDL0M7QUFDRCxTQUFPLE1BQU0sQ0FBQztDQUNkLENBQUE7O0FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDaEMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7OztBQ3JCekIsWUFBWSxDQUFDOzs7OztBQUViLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLFFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNiLENBQUE7Ozs7Ozs7OztxQkFRYyxVQUFTLEtBQUssRUFBNEI7S0FBMUIsT0FBTyxnQ0FBRyxjQUFjOztBQUN0RCxLQUFJLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixNQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsT0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQixPQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNyQyxRQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFNBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLFNBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xCO0dBQ0Q7RUFDRDtDQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2VsZWN0aW9uU29ydCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tIGFycmF5IFxuICogQHBhcmFtICB7TnVtYmVyfSBzaXplICBbT3B0aW9uYWxdIFNpemUgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHJhbmdlIFtPcHRpb25hbF0gUmFuZ2Ugb2YgdGhlIEFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIFJhbmRvbSBhcnJheSBcbiAqL1xuY29uc3QgcmFuZG9tQXJyYXkgPSBmdW5jdGlvbihzaXplPTEwMCwgcmFuZ2U9MTAwKSB7XG5cdGxldCByZXN1bHQgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuXHRcdHJlc3VsdC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKSk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxubGV0IHRlc3RTdWJqZWN0ID0gcmFuZG9tQXJyYXkoKTtcbnNlbGVjdGlvblNvcnQodGVzdFN1YmplY3QpO1xuY29uc29sZS5sb2codGVzdFN1YmplY3QpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0Q29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcblx0cmV0dXJuIGEgLSBiO1xufVxuXG4vKipcbiAqIEJ1YmJsZSBzb3J0IHdpdGggTyhuXjIpIHRpbWUgY29tcGxleGl0eVxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICAgICAgICAgICBBcnJheSB0byBiZSBzb3J0ZWRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjb21wYXJlIFx0ICAgQ29tcGFyZSBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICAgICBTb3J0ZWQgQXJyYXlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGNvbXBhcmUgPSBkZWZhdWx0Q29tcGFyZSkge1xuXHRsZXQgdGVtcCA9IDA7XG5cdGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuXHRcdFx0aWYoY29tcGFyZShhcnJheVtqXSwgYXJyYXlbaisxXSkgPiAwKSB7XG5cdFx0XHRcdHRlbXAgPSBhcnJheVtqXTtcblx0XHRcdFx0YXJyYXlbal0gPSBhcnJheVtqKzFdO1xuXHRcdFx0XHRhcnJheVtqKzFdID0gdGVtcDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0=

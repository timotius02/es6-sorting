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
 * Selection sort with O(n^2) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */

exports['default'] = function (array) {
	var compare = arguments[1] === undefined ? defaultCompare : arguments[1];

	var min = 0;
	var index = 0;
	var temp = 0;

	for (var i = 0, _length = array.length; i < _length; i++) {
		index = i;
		min = array[i];

		for (var j = i + 1; j < _length; j++) {
			if (compare(min, array[j]) > 0) {
				min = array[j];
				index = j;
			}
		}

		temp = array[i];
		array[i] = min;
		array[index] = temp;
	}
};

module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L3NlbGVjdGlvblNvcnQvdGVzdC5qcyIsIi9Vc2Vycy90aW1vdGl1czAyL2NvZGUvZXM2LXNvcnQvc2VsZWN0aW9uU29ydC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O0FBUXpDLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBVyxHQUFpQztNQUFyQixJQUFJLGdDQUFDLEdBQUc7TUFBRSxLQUFLLGdDQUFDLEdBQUc7O0FBQy9DLE1BQUksTUFBTSxHQUFHLEVBQUUsQ0FBQzs7QUFFaEIsT0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixVQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7R0FDL0M7QUFDRCxTQUFPLE1BQU0sQ0FBQztDQUNkLENBQUE7O0FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFDaEMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7OztBQ3JCekIsWUFBWSxDQUFDOzs7OztBQUViLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JDLFFBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNiLENBQUE7Ozs7Ozs7OztxQkFRYyxVQUFTLEtBQUssRUFBNEI7S0FBMUIsT0FBTyxnQ0FBRyxjQUFjOztBQUN0RCxLQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDWixLQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxLQUFJLElBQUksR0FBRyxDQUFDLENBQUM7O0FBRWIsTUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCxPQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsS0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFZixPQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNuQyxPQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQy9CLE9BQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDZixTQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1Y7R0FDRDs7QUFFRCxNQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLE9BQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDZixPQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ3BCO0NBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzZWxlY3Rpb25Tb3J0ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByYW5kb20gYXJyYXkgXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNpemUgIFtPcHRpb25hbF0gU2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSAge051bWJlcn0gcmFuZ2UgW09wdGlvbmFsXSBSYW5nZSBvZiB0aGUgQXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgUmFuZG9tIGFycmF5IFxuICovXG5jb25zdCByYW5kb21BcnJheSA9IGZ1bmN0aW9uKHNpemU9MTAwLCByYW5nZT0xMDApIHtcblx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG5cdFx0cmVzdWx0LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5sZXQgdGVzdFN1YmplY3QgPSByYW5kb21BcnJheSgpO1xuc2VsZWN0aW9uU29ydCh0ZXN0U3ViamVjdCk7XG5jb25zb2xlLmxvZyh0ZXN0U3ViamVjdCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRlZmF1bHRDb21wYXJlID0gZnVuY3Rpb24oYSwgYikge1xuXHRyZXR1cm4gYSAtIGI7XG59XG5cbi8qKlxuICogU2VsZWN0aW9uIHNvcnQgd2l0aCBPKG5eMikgdGltZSBjb21wbGV4aXR5XG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgICAgICAgICAgIEFycmF5IHRvIGJlIHNvcnRlZFxuICogQHBhcmFtICB7RnVuY3Rpb259IGNvbXBhcmUgXHQgICBDb21wYXJlIGZ1bmN0aW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgICAgIFNvcnRlZCBBcnJheVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgY29tcGFyZSA9IGRlZmF1bHRDb21wYXJlKSB7XG5cdGxldCBtaW4gPSAwO1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgdGVtcCA9IDA7XG5cblx0Zm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aW5kZXggPSBpO1xuXHRcdG1pbiA9IGFycmF5W2ldO1xuXG5cdFx0Zm9yKGxldCBqID0gaSArIDE7IGogPCBsZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKGNvbXBhcmUobWluLCBhcnJheVtqXSkgPiAwKSB7XG5cdFx0XHRcdG1pbiA9IGFycmF5W2pdO1xuXHRcdFx0XHRpbmRleCA9IGo7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGVtcCA9IGFycmF5W2ldO1xuXHRcdGFycmF5W2ldID0gbWluO1xuXHRcdGFycmF5W2luZGV4XSA9IHRlbXA7XG5cdH1cbn0iXX0=

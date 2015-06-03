(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var quickSort = require('./index');

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
var result = quickSort(testSubject);
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
 * QuickSort with O(n log n) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
var quickSort = function quickSort(array) {
	var compare = arguments[1] === undefined ? defaultCompare : arguments[1];

	if (array.length <= 1) return array;

	var pivot = array.shift();
	var left = [];
	var right = [];

	while (array.length > 0) {
		var el = array.shift();
		if (compare(el, pivot) > 0) {
			right.push(el);
		} else {
			left.push(el);
		}
	}

	left = quickSort(left, compare);
	right = quickSort(right, compare);

	left.push(pivot);
	return left.concat(right);
};

exports['default'] = quickSort;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L3F1aWNrU29ydC90ZXN0LmpzIiwiL1VzZXJzL3RpbW90aXVzMDIvY29kZS9lczYtc29ydC9xdWlja1NvcnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7OztBQVFyQyxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVcsR0FBaUM7QUFDaEQsTUFEMkIsSUFBSSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUMsR0FBRyxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUVuQyxNQUZxQyxLQUFLLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsR0FBQyxHQUFHLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBOztBQUMvQyxNQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE9BQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUIsVUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0dBQy9DO0FBQ0QsU0FBTyxNQUFNLENBQUM7Q0FDZCxDQUFBOztBQUVELElBQUksV0FBVyxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQ2hDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7QUNyQnBCLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDNUMsTUFBSyxFQUFFLElBQUk7Q0FDWCxDQUFDLENBQUM7QUFGSCxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNyQyxRQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDYixDQUFBOzs7Ozs7OztBQVFELElBQU0sU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFZLEtBQUssRUFBNEI7QUFJM0QsS0FKaUMsT0FBTyxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUcsY0FBYyxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFDekQsS0FBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDcEIsT0FBTyxLQUFLLENBQUM7O0FBRWQsS0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFCLEtBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLEtBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFZixRQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3hCLE1BQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2QixNQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLFFBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7R0FDZixNQUNJO0FBQ0osT0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztHQUNkO0VBQ0Q7O0FBRUQsS0FBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEMsTUFBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRWxDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakIsUUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzFCLENBQUE7O0FBS0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUhILFNBQVMsQ0FBQTtBQUl4QixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHF1aWNrU29ydCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgcmFuZG9tIGFycmF5IFxuICogQHBhcmFtICB7TnVtYmVyfSBzaXplICBbT3B0aW9uYWxdIFNpemUgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHJhbmdlIFtPcHRpb25hbF0gUmFuZ2Ugb2YgdGhlIEFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgIFJhbmRvbSBhcnJheSBcbiAqL1xuY29uc3QgcmFuZG9tQXJyYXkgPSBmdW5jdGlvbihzaXplPTEwMCwgcmFuZ2U9MTAwKSB7XG5cdGxldCByZXN1bHQgPSBbXTtcblxuXHRmb3IgKGxldCBpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuXHRcdHJlc3VsdC5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKSk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxubGV0IHRlc3RTdWJqZWN0ID0gcmFuZG9tQXJyYXkoKTtcbmxldCByZXN1bHQgPSBxdWlja1NvcnQodGVzdFN1YmplY3QpO1xuY29uc29sZS5sb2cocmVzdWx0KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZGVmYXVsdENvbXBhcmUgPSBmdW5jdGlvbihhLCBiKSB7XG5cdHJldHVybiBhIC0gYjtcbn1cblxuLyoqXG4gKiBRdWlja1NvcnQgd2l0aCBPKG4gbG9nIG4pIHRpbWUgY29tcGxleGl0eVxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5ICAgICAgICAgICBBcnJheSB0byBiZSBzb3J0ZWRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjb21wYXJlIFx0ICAgQ29tcGFyZSBmdW5jdGlvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgICAgICBTb3J0ZWQgQXJyYXlcbiAqL1xuY29uc3QgcXVpY2tTb3J0ID0gZnVuY3Rpb24oYXJyYXksIGNvbXBhcmUgPSBkZWZhdWx0Q29tcGFyZSkge1xuXHRpZiAoYXJyYXkubGVuZ3RoIDw9IDEpIFxuXHRcdHJldHVybiBhcnJheTtcblxuXHRsZXQgcGl2b3QgPSBhcnJheS5zaGlmdCgpO1xuXHRsZXQgbGVmdCA9IFtdO1xuXHRsZXQgcmlnaHQgPSBbXTtcblxuXHR3aGlsZSAoYXJyYXkubGVuZ3RoID4gMCkge1xuXHRcdGxldCBlbCA9IGFycmF5LnNoaWZ0KCk7XG5cdFx0aWYgKGNvbXBhcmUoZWwsIHBpdm90KSA+IDApIHtcblx0XHRcdHJpZ2h0LnB1c2goZWwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxlZnQucHVzaChlbCk7XG5cdFx0fVxuXHR9XG5cblx0bGVmdCA9IHF1aWNrU29ydChsZWZ0LCBjb21wYXJlKTtcblx0cmlnaHQgPSBxdWlja1NvcnQocmlnaHQsIGNvbXBhcmUpO1xuXG5cdGxlZnQucHVzaChwaXZvdCk7XG5cdHJldHVybiBsZWZ0LmNvbmNhdChyaWdodCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1aWNrU29ydCJdfQ==

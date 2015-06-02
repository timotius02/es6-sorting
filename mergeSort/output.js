(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var mergeSort = require('./index');

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
var result = mergeSort(testSubject);
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
 * Merge two arrays in ascending order in regards to the comparison function
 * @param  {Array} left  An array to be merged
 * @param  {Array} right An array to be merged
 * @return {Array}       Merged array
 */
var merge = function merge(left, right, compare) {
	var list = [];

	while (left.length > 0 && right.length > 0) {
		if (compare(left[0], right[0]) <= 0) list.push(left.shift());else list.push(right.shift());
	}

	while (left.length > 0) list.push(left.shift());

	while (right.length > 0) list.push(right.shift());

	return list;
};

/**
 * MergeSort with O(n log n) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
var mergeSort = function mergeSort(array) {
	var compare = arguments[1] === undefined ? defaultCompare : arguments[1];

	if (array.length == 1) return array;

	var split = array.length / 2;
	var left = array.slice(0, split);
	var right = array.slice(split);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right, compare);
};

exports['default'] = mergeSort;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdGltb3RpdXMwMi9jb2RlL2VzNi1zb3J0L21lcmdlU29ydC90ZXN0LmpzIiwiL1VzZXJzL3RpbW90aXVzMDIvY29kZS9lczYtc29ydC9tZXJnZVNvcnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7OztBQVFyQyxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQVcsR0FBaUM7TUFBckIsSUFBSSxnQ0FBQyxHQUFHO01BQUUsS0FBSyxnQ0FBQyxHQUFHOztBQUMvQyxNQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE9BQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDOUIsVUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0dBQy9DO0FBQ0QsU0FBTyxNQUFNLENBQUM7Q0FDZCxDQUFBOztBQUVELElBQUksV0FBVyxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQ2hDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7QUNyQnBCLFlBQVksQ0FBQzs7Ozs7QUFFYixJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFjLENBQVksQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNyQyxRQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDYixDQUFBOzs7Ozs7OztBQVFELElBQU0sS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQzVDLEtBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZCxRQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzNDLE1BQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUMxQjs7QUFFRCxRQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOztBQUV6QixRQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOztBQUUxQixRQUFPLElBQUksQ0FBQztDQUNaLENBQUE7Ozs7Ozs7O0FBUUQsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFTLENBQVksS0FBSyxFQUE0QjtLQUExQixPQUFPLGdDQUFHLGNBQWM7O0FBQ3pELEtBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQ25CLE9BQU8sS0FBSyxDQUFDOztBQUVkLEtBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLEtBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLEtBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRS9CLEtBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsTUFBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFekIsUUFBTyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNuQyxDQUFBOztxQkFHYyxTQUFTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWVyZ2VTb3J0ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByYW5kb20gYXJyYXkgXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHNpemUgIFtPcHRpb25hbF0gU2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEBwYXJhbSAge051bWJlcn0gcmFuZ2UgW09wdGlvbmFsXSBSYW5nZSBvZiB0aGUgQXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgUmFuZG9tIGFycmF5IFxuICovXG5jb25zdCByYW5kb21BcnJheSA9IGZ1bmN0aW9uKHNpemU9MTAwLCByYW5nZT0xMDApIHtcblx0bGV0IHJlc3VsdCA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG5cdFx0cmVzdWx0LnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5sZXQgdGVzdFN1YmplY3QgPSByYW5kb21BcnJheSgpO1xubGV0IHJlc3VsdCA9IG1lcmdlU29ydCh0ZXN0U3ViamVjdCk7XG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0Q29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcblx0cmV0dXJuIGEgLSBiO1xufVxuXG4vKipcbiAqIE1lcmdlIHR3byBhcnJheXMgaW4gYXNjZW5kaW5nIG9yZGVyIGluIHJlZ2FyZHMgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbiAqIEBwYXJhbSAge0FycmF5fSBsZWZ0ICBBbiBhcnJheSB0byBiZSBtZXJnZWRcbiAqIEBwYXJhbSAge0FycmF5fSByaWdodCBBbiBhcnJheSB0byBiZSBtZXJnZWRcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBNZXJnZWQgYXJyYXlcbiAqL1xuY29uc3QgbWVyZ2UgPSBmdW5jdGlvbihsZWZ0LCByaWdodCwgY29tcGFyZSkge1xuXHRsZXQgbGlzdCA9IFtdO1xuXG5cdHdoaWxlIChsZWZ0Lmxlbmd0aCA+IDAgJiYgcmlnaHQubGVuZ3RoID4gMCkge1xuXHRcdGlmIChjb21wYXJlKGxlZnRbMF0sIHJpZ2h0WzBdKSA8PSAwKVxuXHRcdFx0bGlzdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG5cdFx0ZWxzZVxuXHRcdFx0bGlzdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuXHR9XG5cblx0d2hpbGUgKGxlZnQubGVuZ3RoID4gMClcblx0XHRsaXN0LnB1c2gobGVmdC5zaGlmdCgpKTtcblxuXHR3aGlsZSAocmlnaHQubGVuZ3RoID4gMClcblx0XHRsaXN0LnB1c2gocmlnaHQuc2hpZnQoKSk7XG5cblx0cmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogTWVyZ2VTb3J0IHdpdGggTyhuIGxvZyBuKSB0aW1lIGNvbXBsZXhpdHlcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheSAgICAgICAgICAgQXJyYXkgdG8gYmUgc29ydGVkXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY29tcGFyZSBcdCAgIENvbXBhcmUgZnVuY3Rpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICAgICAgU29ydGVkIEFycmF5XG4gKi9cbmNvbnN0IG1lcmdlU29ydCA9IGZ1bmN0aW9uKGFycmF5LCBjb21wYXJlID0gZGVmYXVsdENvbXBhcmUpIHtcblx0aWYoYXJyYXkubGVuZ3RoID09IDEpXG5cdFx0cmV0dXJuIGFycmF5O1xuXG5cdGxldCBzcGxpdCA9IGFycmF5Lmxlbmd0aCAvIDI7XG5cdGxldCBsZWZ0ID0gYXJyYXkuc2xpY2UoMCwgc3BsaXQpO1xuXHRsZXQgcmlnaHQgPSBhcnJheS5zbGljZShzcGxpdCk7XG5cblx0bGVmdCA9IG1lcmdlU29ydChsZWZ0KTtcblx0cmlnaHQgPSBtZXJnZVNvcnQocmlnaHQpO1xuXG5cdHJldHVybiBtZXJnZShsZWZ0LCByaWdodCwgY29tcGFyZSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0Il19

'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * QuickSort with O(n log n) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
const quickSort = function(array, compare = defaultCompare) {
	if (array.length <= 1) 
		return array;

	let pivot = array.shift();
	let left = [];
	let right = [];

	while (array.length > 0) {
		let el = array.shift();
		if (compare(el, pivot) > 0) {
			right.push(el);
		}
		else {
			left.push(el);
		}
	}

	left = quickSort(left, compare);
	right = quickSort(right, compare);

	left.push(pivot);
	return left.concat(right);
}

export default quickSort
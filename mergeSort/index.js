'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * Merge two arrays in ascending order in regards to the comparison function
 * @param  {Array} left  An array to be merged
 * @param  {Array} right An array to be merged
 * @return {Array}       Merged array
 */
const merge = function(left, right, compare) {
	let list = [];

	while (left.length > 0 && right.length > 0) {
		if (compare(left[0], right[0]) <= 0) {
			list.push(left.shift());
		}
		else {
			list.push(right.shift());
		}
	}

	while (left.length > 0) {
		list.push(left.shift());
	}

	while (right.length > 0) {
		list.push(right.shift());
	}

	return list;
}

/**
 * MergeSort with O(n log n) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
const mergeSort = function(array, compare = defaultCompare) {
	if(array.length <= 1)
		return array;

	let split = array.length / 2;
	let left = array.slice(0, split);
	let right = array.slice(split);

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right, compare);
}


export default mergeSort
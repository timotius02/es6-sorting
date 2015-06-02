'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * InsertionSort with O(n^2) time complexity
 * @param  {Array} arr             Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
export default function(arr, compare = defaultCompare) {
	let array = arr.slice();
	for (let i = 1, length = array.length; i < length; i++) {
		let temp = 0;
		for (let j = i; j > 0; j--) {
			if ( compare(array[j-1], array[j]) > 0) {
				temp = array[j-1];
				array[j-1] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}
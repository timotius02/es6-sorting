'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * Bubble sort with O(n^2) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
export default function(array, compare = defaultCompare) {
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
}
'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * Selection sort with O(n^2) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
export default function(array, compare = defaultCompare) {
	let min = 0;
	let index = 0;
	let temp = 0;

	for (let i = 0, length = array.length; i < length; i++) {
		index = i;
		min = array[i];

		for(let j = i + 1; j < length; j++) {
			if (compare(min, array[j]) > 0) {
				min = array[j];
				index = j;
			}
		}

		temp = array[i];
		array[i] = min;
		array[index] = temp;
	}
}
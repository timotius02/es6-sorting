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
	let temp = 0;
	for (let i = array.length - 1; i > 0; i--) {
		for(let j = 0; j < i; j++) {
			if(compare(array[j], array[j+1]) > 0) {
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
}
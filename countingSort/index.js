'use strict';

/**
 * Counting Sort with O(n + k) time complexity. Only works with Ints
 * @param  {Array}    array          Array to be sorted
 * @param  {int} 	  range        The range of the inputs
 * @return {Array}                 Sorted Array
 */
export default function(array, range) {
	let output = array.slice();
	let count = new Array(range);
	let total = 0;

	for (let i = 0, length = array.length; i < length; i++ ) {
		count[array[i]] += 1;
	}

	for (let j = 0; j < range; j++) {
		let temp = count[j];
		count[j] = total;
		total += temp;
	}

	for (let k = 0, length = array.length; k < length; k++) {
		output[count[array[k]]] = array[k];
	}
	return array;
}
'use strict';

const insertionSort = require('./index');

/**
 * Creates a random array 
 * @param  {Number} size  [Optional] Size of the array
 * @param  {Number} range [Optional] Range of the Array
 * @return {Array}        Random array 
 */
const randomArray = function(size=100, range=100) {
	let result = [];

	for (let i = size; i > 0; i--) {
		result.push(Math.floor(Math.random() * range));
	}
	return result;
}

let testSubject = randomArray();
insertionSort(testSubject);
console.log(testSubject);

'use strict';

const countingSort = require('./index');
const assert = require("assert");

const compare = function(a, b) {
	return a - b;
}

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

describe('CountingSort', function(){
	it('Should sort the same as default sort', function(){
	  let test = randomArray();
	  let result = countingSort(test);
	  assert.deepEqual(test.sort(compare), result);
	})
	it('Should sort empty arrays correctly', function(){
		let test = [];
		let result = countingSort(test);
		assert.deepEqual(test.sort(compare), result);
	});
})


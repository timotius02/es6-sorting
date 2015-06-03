'use strict';

const selectionSort = require('./index');
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

describe('SelectionSort', function(){
	it('Should sort the same as default sort', function(){
	  let test = randomArray();
	  let result = selectionSort(test);
	  assert.deepEqual(test.sort(compare), result);
	})
	it('Should sort empty arrays correctly', function(){
		let test = [];
		let result = selectionSort(test);
		assert.deepEqual(test.sort(compare), result);
	});
	it('Should sort non-integer arrays correctly', function(){
		let test = ['abcdefg', 'abcdef', 'abcde', 'abcd', 'abc', 'ab', 'a', 'abcdefg'];
		let compareFunc = function(a, b) {
			return b.length - a.length;
		}
		let result = selectionSort(test, compareFunc);
		assert.deepEqual(test.sort(compareFunc), result);
	});
})

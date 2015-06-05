'use strict';

const defaultCompare = function(a, b) {
	return a - b;
}

/**
 * heapSort initial function. Helps preserve immutability
 * @param  {Array} array   The unsorted array
 * @param  {function} compare [description]
 * @return {Array}         The sorted array result
 */
const heapSort = function(array, compare = defaultCompare) {
	const copy = array.slice();
	return heapSortHelper(copy, compare);
} 

const swap = function(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}
const addHeap = function(array, start, index, compare) {
	while (index > start) {
		let parentIndex = Math.floor((index - 1) / 2);
		if ( compare(array[index], array[parentIndex]) > 0) {
			swap(array, index, parentIndex); 
			index = parentIndex;
		}
		else {
			break;
		}
	}
} 

/**
 * Removes the max value of the heap and sorts the remaining
 * @param  {array} array   The containing array for the heap
 * @param  {[type]} start   [description]
 * @param  {[type]} end     [description]
 * @param  {[type]} compare [description]
 * @return {[type]}         [description]
 */
const sortHeap = function(array, start, end, compare) {
	swap(array, start, end);
	end = end - 1;
	while (start < end) {
		let childIndex1 = (start * 2) + 1;
		let childIndex2 = (start * 2) + 2;

		// If leaf node
		if (childIndex1 > end ) {
			break;
		}
		// One child
		else if( childIndex2 > end) {
			// if only child greater than self
			if (compare(array[childIndex1], array[start]) > 0) {
				swap(array, start, childIndex1)
			}

			break;
		}
		// two children
		else {
			let greaterChildindex = 0;

			if (compare(array[childIndex1], array[childIndex2]) > 0) {
				greaterChildindex = childIndex1;
			}
			else {
				greaterChildindex = childIndex2;
			}
			// if the larger child is greater than self
			if(compare(array[greaterChildindex], array[start]) > 0) {
				swap(array, start, greaterChildindex);
				start = greaterChildindex;
			}
			else {
				break;
			}
		}
	}
}

/**
 * HeapSort with O(n log n) time complexity
 * @param  {Array} array           Array to be sorted
 * @param  {Function} compare 	   Compare function
 * @return {Array}                 Sorted Array
 */
const heapSortHelper = function(array, compare) {
	// Make the heap
	for(let i = 1, length = array.length; i < length; i++) {
		addHeap(array, 0, i, compare);
	}
	for(let j = array.length - 1; j > 0; j--) {
		sortHeap(array, 0, j, compare);
	}

	return array;
}

export default heapSort
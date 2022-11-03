#!/usr/bin/gjs

const sum = (arr) => {
	return arr.reduce((partialSum, a) => partialSum + a, 0)
}

arr = [1, 2, 3]
console.log(sum(arr)) /* => 6 */

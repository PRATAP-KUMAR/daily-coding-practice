#!/usr/bin/gjs

const longestString = (arr) => {
	let longest = '';
	arr.forEach((string) => {
		if (string.length > longest.length) {
			longest = string
		}
	})
			return longest
}
	
	
const inputArray = ['hello', 'world', 'abcde', 'efghi', 'sky is blue']	
console.log(longestString(inputArray)) /* => 'sky is blue' */

const inputArray2 = ['hello', 'world', 'abcde', 'efghi']	
console.log(longestString(inputArray2)) /* => 'hello' */

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

/*
[admin@ANTARCTICA daily-js-practice]$ gjs 04-11-2022.js 
Gjs-Console-Message: 11:16:52.394: sky is blue
Gjs-Console-Message: 11:16:52.395: hello
[admin@ANTARCTICA daily-js-practice]$
*/

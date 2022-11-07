#!/usr/bin/gjs

const unique = (array) => {
	return array.reduce((prev, values) => {
		if (prev.find((value) => { return value === values })) {
			return prev;
		} else {
			prev.push(values);
			return prev;
		}
	}, []);
}

let numbers = [1, 2, 3, 4, 3]
let result = unique(numbers)

console.log(result)

			

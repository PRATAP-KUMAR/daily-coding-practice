#!/usr/bin/gjs

/* Create a function that takes the age in years and returns the age in days.

clacAge(65) => 23725
calcAge(0) => 0
calcAge(20) => 7300

Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.

*/

const calcAge = (age) => age*365

console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))

/*
[admin@ANTARCTICA daily-js-practice]$ gjs 05-11-2022.js 
Gjs-Console-Message: 11:23:47.467: 23725
Gjs-Console-Message: 11:23:47.468: 0
Gjs-Console-Message: 11:23:47.468: 7300
[admin@ANTARCTICA daily-js-practice]$ 
*/

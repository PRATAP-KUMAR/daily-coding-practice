let sandwich = {
    grilled: true,
    butter: "lots",
    bread: "whole wheat",
    calories: 250
}

for (const value in sandwich) {
    console.log(value);
}

console.log(Object.keys(sandwich));
console.log(Object.values(sandwich));

// Output
// [Running] node "/home/admin/Music/daily-js-practice/23-10-2022.js"
// grilled
// butter
// bread
// calories
// [ 'grilled', 'butter', 'bread', 'calories' ]
// [ true, 'lots', 'whole wheat', 250 ]

// [Done] exited with code=0 in 0.05 seconds

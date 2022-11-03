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

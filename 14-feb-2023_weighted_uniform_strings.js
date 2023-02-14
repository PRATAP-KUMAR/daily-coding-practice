const myFunc = (s, queries) => {
    let weight = [];
    let array = [];
    for(let i=1; i<[...s].length; i++) {
        let prvs = [...s][i-1].charCodeAt() - 96;
        let curr = [...s][i].charCodeAt() - 96;
        let value = curr === prvs ? curr+prvs : curr;
        console.log(prvs, value)
    }
    return 'completed'
}

const s = 'abccdde';
const queries = [1, 3, 12, 5, 9, 10]

console.log(myFunc(s, queries));
const myFunc = (s, queries) => {
    let values = [[...s][0].charCodeAt() - 96];
    let reserved = 0;

    for (let i = 1; i < [...s].length; i++) {
        let prvs = [...s][i - 1].charCodeAt() - 96;
        let curr = [...s][i].charCodeAt() - 96;
        if (curr === prvs) {
            if (reserved === 0) {
                reserved += curr + prvs;
            } else {
                reserved += curr;
            }
            values.push(reserved);
        } else {
            reserved = 0;
            values.push(curr);
        }
    }
    let result = [];
    const set = new Set(values);
    queries.forEach((num) => {
        result.push(set.has(num) ? 'Yes' : 'No');
    });
    return result;
}

const s = 'abbcccdddd';
const queries = [1, 7, 5, 4, 15]

console.log(myFunc(s, queries));
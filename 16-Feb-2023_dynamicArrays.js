function dynamicArray(n, queries) {
    // Write your code here
    let arr = new Array(n).fill([]);
    let lastAnswer = 0;
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        let idx = ((queries[i][1] ^ lastAnswer) % n);
        let compare = queries[i][0]
        let x = queries[i][1]
        let y = queries[i][2]

        if (compare === 1) {
            arr[idx].push(y);
        } else {
            lastAnswer = arr[idx][y % arr[idx].length]
            result.push(lastAnswer);
        }
    }
    console.log(result);
}
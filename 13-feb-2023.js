const myFunc = (s) => {
    let i = 0;
    return [...s].reduce((count, e) => {
        if (s[i+1] === e) {
            count += 1;
        }
        i += 1;
        return count;
    }, 0);
}

console.log(myFunc('ABABABAB'));
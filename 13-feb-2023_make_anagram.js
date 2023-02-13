const myFunc = (s1, s2) => {
    
    const strArray = [...s2];
    let count = 0;
    
    [...s1].map((c, i) => {
      const index = strArray.indexOf(c);
        if (index !== -1) {
                strArray.splice(index, 1);
                count += 1;
            }
    });
    return s1.length - count + strArray.length;
}

let a = 'cde'
let b = 'dcf'
console.log(myFunc(a, b));
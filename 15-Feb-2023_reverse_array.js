function reverseArray(a) {
    // Write your code here
    const newA = []
    for (let i = a.length - 1; i >= 0; i--) {
        newA.push(a[i])
    }
    return newA
}
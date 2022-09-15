const isMax3 = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
    return max
}
const isMin3 = (a, b, c) => {
    let min = a;
    if (b < min) {
        min = b
    }
    if (c < min) {
        min = c
    }
    return min
}

console.log(isMax3(1,9,7));
console.log(isMin3(1,9,7));
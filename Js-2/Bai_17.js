const isMax = s => {
    return Math.max(...s);
}
const isMin = s => {
    return Math.min(...s);
}

const isMax2 = s => {
    let max = s[0]
    for (let i = 1; i < s.length; i++) {
        if(s[i] > max) {
            max = s[i]
        }
        
    }
    return max
}

const isMin2 = s => {
    let min = s[0]
    for (let i = 1; i < s.length; i++) {
        if(s[i] < min) {
            min = s[i]
        }
        
    }
    return min
}

console.log(isMax([1, 9, 7, -5,  10]));
console.log(isMax2([1, 9, 7, -5,  10]));
console.log(isMin([1, 9, 7, -5,  10]));
console.log(isMin2([1, 9, 7, -5,  10]));
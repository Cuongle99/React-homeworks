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
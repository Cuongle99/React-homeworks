const daoChuoi = s => {
    return s.split('').reverse().join('')
}

const daoChuoi2 = s => {
    let b = '';
    for (let i = s.length - 1; i >= 0; i--) {
       b += s[i]
    }
    return b
}

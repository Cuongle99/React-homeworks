const removeKt = s => {
    return s.split(' ').join('');
}

const removeKt2 = s => {
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i - 1) == ' ') {
            s = s.slice(0, i-1) + s.slice(i)
        }
    }
    return s
}


console.log(removeKt(' kajsdk aksjdkas adssjd'));
console.log(removeKt2(' kajsdk aksjdkas adssjd'));

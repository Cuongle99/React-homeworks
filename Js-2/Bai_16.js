const getIdName = s => {
    let a = s.split('/');
    let b = a[a.length -2].split('.');
    return b.slice(0, b.length -1).join(' ')
}


const getIdName2 = s => {
    let count = 0;
    let b = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if(s.charAt(i) === '/') {
            count++;
            if (count == 2) {
                break
            }
        } else {
            b += s[i];
        }
    }
    let c = '';
    let count2 = 0;
    for (let i = b.length - 1; i >= 0; i--) {
        if(b.charAt(i) !== '.') {
            c += b[i]
        } else {
            count2++;
            if(count2 ==2) {
                break
            }
            c += " ";
        }
    }
    return c
}

console.log(getIdName("https://www.facebook.com/tung.nguyenthac.1/"));
console.log(getIdName2("https://www.facebook.com/tung.nguyenthac.1/"));
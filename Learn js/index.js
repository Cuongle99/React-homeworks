const ktDoiXuong = a => {
    a = a + ''
    let b = a.split('')
    b.reverse()
    b = b.join('')
    if (b === a) {
        console.log(true);
    } else {
        console.log(false);
    }
}
ktDoiXuong('12321')

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];


const check = s => {
    s.sort();
    let b = [0,0];
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == s[i + 1] ) {
            count++
        }
        else {
            if (count > b[1]) {
                b[0] = s[i]
                b[1] = count
            }
            count = 1
        }
    }
    console.log(b);
}
check(a)




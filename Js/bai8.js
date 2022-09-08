let n = 135;
let flag = true

do {
    if ((n % 10 ) % 2 == 0) {
        flag = false;
        break;
    }
} while (n = Math.floor(n / 10))

if (flag) {
    console.log('YES');
} else {
    console.log('NO');
}

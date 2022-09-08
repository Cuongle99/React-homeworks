let n = 121

let m = n;
let dao = 0;
while ( m != 0) {
   dao = dao * 10 + m % 10;
   m = Math.floor(m / 10)
}

if (dao === n) {
    console.log('YES');
} else {
    console.log('NO');
}
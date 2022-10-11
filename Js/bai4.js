// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7

let n = 10;
for (let i = 2; i <= n ; i++) {
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(i);
    }
}

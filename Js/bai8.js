// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES’

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

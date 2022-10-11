// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14

let n = 3;
let sum = 1;

for (let i = 2; i <=n ; i++) {
    sum += Math.pow(i,2);
}

console.log(sum);
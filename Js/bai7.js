// 7. Tính tổng các số lẻ trong khoảng 1 đến n?
// VD: n = 5, output: 9


let n = 5;
let sum = 0;
for (let i = 1; i <= 5; i+=2) {
    sum += i;   
}

console.log(sum);
// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

let a = [1, 2, 3, 4, 6, 7];


const kiemTra = (a, k) =>  {
    // a.sort((x, y) => x - y);
    let min = [];
    min[0] = a[0]
    let kc = Math.abs(k - a[0])

    for (let i = 1; i < a.length; i++) {
        if (Math.abs(a[i] - k) < kc) {
            min[0] = a[i];
            kc = Math.abs(a[i] - k);
        } else if (Math.abs(a[i] - k) === kc) {
            min[1] = a[i];
        }
         else {
            break;
        }
    }
    return `phan tu co khoang cach lon nhat voi ${k} la ${min}`
}

console.log(kiemTra(a, 5));

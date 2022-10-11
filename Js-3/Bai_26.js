// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

let a = [1, 2, 3, 4, 6, 7];


const kiemTra2 = (a, k) =>  {

    let b = a.map((item, index) => {
        return Math.abs(item - k);
    })
    let min =  Math.min(...b);

    let  result = a.filter((item, index) => {
        if (item - min == k || item + min == k) return item
    })

    return result

}

console.log(kiemTra2(a, 5));

// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

let a = [1, 2, 3, 2, 3, 4, 6, 7];

const isSNT = a => {
    if (a < 2) {
        return false
    } else if (a==2) {
        return true
    } else {
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a%i === 0) {
                return false;
            } 
        } return true
    }
}

const kiemTraSNT = s => {
    let b = s.filter( (item, index) => {
        return isSNT(item)
    })
    return b
}

console.log(kiemTraSNT(a));


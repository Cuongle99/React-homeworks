
const soLe = (n) => {
    for (let i = 1; i <= 10; i += 2) {
        console.log(i);
    }
}

const checkSNT = n => {
    for (let i = 2; i <= n; i++) {
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
}

const sumBP = n => {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum += Math.pow(i, 2);
    }
    return sum
}

const sumSoLe = n => {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum
}

const checkSoLe = n => {
    let flag = true;

    do {
        if ((n % 10) % 2 == 0) {
            flag = false;
            break;
        }
    } while ((n = Math.floor(n / 10)));

    return flag
}

const checkSoDao = n => {
    let m = n;
    let dao = 0;
    while (m != 0) {
        dao = dao * 10 + (m % 10);
        m = Math.floor(m / 10);
    }

    if (dao === n) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

const bangCuuChuong = () => {
    for (let i = 2; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}
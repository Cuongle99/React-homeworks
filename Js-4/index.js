// const cong = (a, b, cb) => {
//     setTimeout(() => {
//         let result = a + b;
//         cb(result)
//     }, 3000);
// }

// const  nhan = (a, b, cb) => {
//     setTimeout(() => {
//         let result = a * b;
//         cb(result)
//     }, 2000);
// }

// const  chia = (a, b, cb) => {
//     setTimeout(() => {
//         let result = a / b;
//         cb(result);
//     }, 5000);
// }

// const  ketqua = (a, b, h, cb) => {
//     cong(a, b, (resultcong) => {
//         nhan(resultcong, h, (resultnhan) => {
//             chia(resultnhan, 2, (resultchia) => {
//                 cb(resultchia)
//             })
//         })
//     })
// }

// ketqua(3,4,6, (result) => {
//     console.log(result);
// });

const congPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
};

const nhanPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('loi')
        }
        setTimeout(() => {
            resolve(a * b);
        }, 2000);
    });
};

const chiaPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a / b);
        }, 2000);
    });
};

// const ketqua = () => {
//     congPromise(5, 6)
//         .then((cong) => nhanPromise(cong, 4))
//         .then((nhan) => chiaPromise(nhan, 2))
//         .then((result) => {
//             console.log(result);
//         });
// };

// // ketqua();

// Promise.all([congPromise(3, 4), nhanPromise(2, 2), chiaPromise(8, 2)]).then(
//     (resolve) => {
//         console.log(resolve);
//     }
// );

const ketqua = async (cb) => {
    try {
        let tong = await congPromise(3, 4);
        let tich = await nhanPromise(tong, 6);
        let thuong = await chiaPromise(tich, 2);
        cb(thuong);
    } catch (error) {
        console.log(error);
    }
}



ketqua((params) => {
    console.log(params);
})


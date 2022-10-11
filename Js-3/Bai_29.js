// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy sắp xếp danh sách học viên theo tên (firstName).
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: students = [
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]


let students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy",
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu",
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat",
    },
];



const sapXep = arr => {
    return arr.sort((a, b) => a.firstName.localeCompare(b.firstName));
}

console.log(sapXep(students));
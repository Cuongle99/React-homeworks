// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
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
// Output: [ {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     }]



let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
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


const searchName = a => {
    if (a.toLowerCase().indexOf('a') !== -1 && a.length >= 3) {
        return true
    } 
}


const chuanHoa = s => {
    let a = s.trim().toLowerCase().split(" ");
    let b = a.map((e) => {
        return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
    });
    return b.join(" ");
}

students.map(item => {
    item.firstName = chuanHoa(item.firstName);
    item.lastName = chuanHoa(item.lastName);
    if (searchName(item.firstName)) {
        console.log(item);
    }
})

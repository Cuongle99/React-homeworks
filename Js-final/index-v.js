const readlineSync = require("readline-sync");
const shortid = require("shortid");
const fs = require("fs");

const getData = () => {
    let data = fs.readFileSync("./data.json", "utf-8");
    let arrData = [...JSON.parse(data)];
    return arrData;
};

let sinhVien = getData();

const chuanHoa = (s) => {
    s = s.trim().toLowerCase().split(" ");
    s = s.map((e) => {
        return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
    });
    return s.join(" ");
};

const themSinhVien = () => {
    console.log("Nhap thong tin sinh vien");
    let name = readlineSync.question("Ten Sv: ");
    let age = readlineSync.question("Tuoi Sv: ");
    let sex = readlineSync.question("Gioi Tinh: ");
    let diemVaoTruong = readlineSync.question("Diem Vao Truong: ");
    let diemTB = readlineSync.question("Diem Trung binh: ");
    let newSV = {};
    newSV.id = shortid.generate();
    newSV.name = chuanHoa(name);
    newSV.age = ~~age;
    newSV.sex = sex
    newSV.diemVaoTruong = ~~diemVaoTruong
    newSV.diemTB = ~~diemTB

    sinhVien.push(newSV);
    console.log("Them sinh vien thanh cong");
};

const hienThiDanhSach = (arr) => {
    arr.map((item, index) => {
        console.log(item);
        console.log('\n');
    });
    console.log("\n");
};

const choose = () => {
    console.log("Chuong trinh quan ly sinh vien");
    (animals = [
        "Hien Thi Danh Sach",
        "Them Sinh Vien",
        "Xoa sinh Vien Theo Id",
        "Sua Sinh Vien theo Id",
        "Tim Kiem Sinh Vien Theo Ten",
        "Tim Kiem Sinh Vien Thu Khoa", 
        "Danh sach sinh vien bi canh bao",
        "Sap xep danh sach SV theo ten",
        "Sap xep tang dan theo diem TB",
        "Sap xep tang dan theo tuoi",
        "Xoa nhieu theo id"
    ]),
        (index =
            readlineSync.keyInSelect(animals, "Vui long chon thao tac") + 1);
    return index;
};

const exportData = (arr) => {
    fs.writeFileSync("data.json", JSON.stringify(arr));
};

const xoaSinhVien = (arr) => {
    let idDel = readlineSync.question("Nhap id sv muon xoa: ");

    arr.map((item, index) => {
        if (item.id == idDel) {
            arr.splice(index, 1);
        }
    });
    console.log("Xoa sv Thanh cong \n");
    return arr;
};

const suaSinhVien = (arr) => {
    let idEdit = readlineSync.question("Nhap id sv muon sua: ");

    arr.map((item, index) => {
        if (item.id == idEdit) {
            let name = readlineSync.question("Ten Sv: ");
            let age = readlineSync.question("Tuoi Sv: ");
            let sex = readlineSync.question("Gioi Tinh: ");
            let diemTB = readlineSync.question("Diem Trung binh: ");
            item.name = name;
            item.age = ~~age;
            item.sex = sex;
            item.diemTB = ~~diemTB;
        }
    });

    return arr;
};

const timKiemSV = (arr) => {
    let nameSearch = readlineSync.question("Nhap ten Sv can tim: ");
    nameSearch = chuanHoa(nameSearch)

    let result = arr.filter((item, index) => {
        if(item.name.indexOf(nameSearch) !== -1) {
            return item
        }
    })
    if (result.length !== 0) {
               console.log(result);
               console.log('\n');
    } else {
        console.log('Khong Tim thay sinh Vien \n');
    }

    
}

const timKiemSVThuKhoa = (arr) => {

    let arrCopy = JSON.parse(JSON.stringify(arr));
    
    let arrGiam = arrCopy.sort((a, b) => b.diemVaoTruong - a.diemVaoTruong)

    let max = arrGiam[0].diemVaoTruong

    let SvThuKhoa = arrGiam.filter((item, index) => {
        return item.diemVaoTruong == max
    })

    console.log('Sinh Vien Thu Khoa la: \n' );

    console.log(SvThuKhoa);

}

const danhSachSVCanhBao = (arr) => {
    let result = arr.filter((item, index) => {
        return item.diemTB < 4
    })
    
    console.log('Danh sach sv bi canh bao: \n');
    console.log(result);
}

const sapXepTheoTen = (arr) => {

    arr.sort((a, b) =>
        a.name.split(" ")[a.name.split(" ").length - 1].localeCompare(b.name.split(" ")[b.name.split(" ").length - 1])
    );
    console.log("Danh sach SV sau khi sap xep la: \n");
    hienThiDanhSach(arr);
};

const sapXepDiemTb = (arr) => {
    arr.sort((a, b) => a.diemTB - b.diemTB)
    console.log("Danh sach Sv sap xep theo diem Tb tang dan \n");

    console.log(arr);
}

const  sapXepTuoiTangDan = (arr) => {
    arr.sort((a, b) => a.age - b.age)

    console.log("Danh sach Sv sap xep theo tuoi tang dan \n");
    console.log(arr);
}

const xoaNhieuSV = (arr) => {
    let listId = readlineSync.question("Nhap danh sach id muon xoa:  ");

    listId = listId.split(',')

    listId = listId.map(item => {
        return item.trim()
    })

    for (let i = 0; i < listId.length; i++) {
        arr.forEach((item, index) => {
            if(item.id === listId[i]) {
                arr.splice(index, 1);
            }
        })
    }

    console.log(arr);



}

const youChoose = (arr) => {
    let x = choose();
    while (x) { 
        switch (x) {
            case 1:
                console.log("\n Danh Sach Sinh Vien \n");
                hienThiDanhSach(arr);
                x = choose();
                break;
            case 2:
                themSinhVien();
                x = choose();
                break;
            case 3:
                xoaSinhVien(arr);
                x = choose();
                break;
            case 4:
                suaSinhVien(arr);
                x = choose();
                break;
            case 5:
                timKiemSV(arr);
                x = choose();
                break;
            case 6:
                timKiemSVThuKhoa(arr);
                x = choose();
                break;
            case 7:
                danhSachSVCanhBao(arr);
                x = choose();
                break;
            case 8:
                sapXepTheoTen(arr);
                x = choose();
                break;
            case 9:
                sapXepDiemTb(arr);
                x = choose();
                break;
            case 10:
                sapXepTuoiTangDan(arr);
                x = choose();
                break;
            case 11:
                xoaNhieuSV(arr);
                x = choose();
                break;

            default:
                break;
        }
    }
};

const qlySinhVien = () => {
    youChoose(sinhVien);
    exportData(sinhVien);
};

qlySinhVien();


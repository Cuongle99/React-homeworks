const dienTich = (tong) => {
    let a = 5;
    let b = 6
    setTimeout(() => {
        
        let cong = a + b
        tong(cong)
    }, 3000);
}


dienTich((s) => {
    console.log(s);
})
const chuanHoa = s => {
    let a = s.trim().toLowerCase().split(' ');
    let b = a.map(e => {
        return  e.charAt(0).toUpperCase()
    })
    return b.join(' ');
}



const chuanHoa2 = s => {
    let a = s.toLowerCase();
    a.replace(a[0], a[0].toUpperCase());
    console.log(a);
}

console.log(chuanHoa("    Le van cuOng"));


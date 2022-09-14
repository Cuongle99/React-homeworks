const chuanHoa = s => {
    s = s.trim().toLowerCase().split(' ');
    s = s.map(e => {
        return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
    } )
    return s.join(' ');
}



const chuanHoa2 = s => {
    s = s.trim().toLowerCase();
    s = s.replace(s[0], s[0].toUpperCase());

    for (let index = 1; index < s.length; index++) {
        if (s[index] === ' ') {
            s = s.replace(s[index + 1], s[index + 1].toUpperCase());
        }
    }
    return s
}

const chuanHoa3 = s => {
    s = s.trim().toLowerCase();

    for (let index = 0; index < s.length; index++) {
        if (index === 0 || s.charAt(index - 1) === ' ') {
            s = s.slice(0, index) + s.charAt(index).toUpperCase() + s.slice(index + 1)
        }
    }
    return s
}



console.log(chuanHoa2("Le van cuOng"));
console.log(chuanHoa("Le van cuOng"));
console.log(chuanHoa3("Le van cuOng"));


const demKhoangTrang = s =>  {
    return s.split(' ').length -1
}

const demKhoangTrang2 = s => {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ' ) {
            count++
        }
    }
    return count;
}
console.log(demKhoangTrang(" s kdl  asdd asd "));
console.log(demKhoangTrang2(" s kdl  asdd asd "));

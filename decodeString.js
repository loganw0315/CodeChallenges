let alArr = "abcdefghijklmnopqrstuvwxyz".split('');

const decode = code => {
    let word = "";
    let num = parseInt(code[0]);
    for(let i = 1;i < code.length; i++){
       word += alArr[alArr.indexOf(code[i])+ num];
    }
    return word;
}

console.log(decode('2fcjjm'));
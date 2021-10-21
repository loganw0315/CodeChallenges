const pal = word => {
    let result = false
    if(word == word.split('').reverse().join('')){
        result = true;
    }
    return result;
}


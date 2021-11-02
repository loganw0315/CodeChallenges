const makeUnique = string => {
    // stringArr = string.split('');

    for(let i = 0; i < stringArr.length; i++){
        for(let x = (i + 1); x < stringArr.length; x++){
            if(stringArr[i] === stringArr[x]){
                stringArr.splice(x, 1);
            }
        }
    }
    // return unique = stringArr.join('');
    return string
    
}


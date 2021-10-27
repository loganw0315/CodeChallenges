const decoder = code => {
    let Arr = code.split('');
    newArr = [];
    let i = 0;
    while( i < Arr.length ){
        if(isNaN(Number(Arr[i]))){
            newArr.push(Arr[i])
        }
        
        i +=  Number(Arr[i]) + 1;
        newArr.push(Arr[i]);
        i += 1;

    }

    let decoded = newArr.join('')
    return decoded;

}


console.log(decoder('0y4akjfes'));
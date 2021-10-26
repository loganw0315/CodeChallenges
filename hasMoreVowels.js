const hasMoreVowels = word => {
    result = false;
    count = 0;
    arr = word.split('')
    console.log(arr);
    arr.forEach(elem => {
        if('aeiou'.includes(elem)){
            count += 1;
        }
    }) 
    console.log(count);
    if (count > (arr.length / 2)){
        result = true;
    }
    return result;
}

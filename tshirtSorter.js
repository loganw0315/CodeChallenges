const tshirtSorter = shirts => {
    let arr = shirts.split('');
    let tmp = '';
    for(let i = 0; i < arr.length; i++){
       for(let x = i+1; x < arr.length; x++){
            if(arr[i] < arr[x]){
                tmp = arr[i];
                arr[i] = arr[x];
                arr[x] = tmp;
            }
        }
    }
    return arr.join('');
}

const best = arr => {
    let max = 0;
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] > arr[max] ) max = i;
    }
    newArr = arr.slice(0, max);

    let profit = (arr[max] - Math.min.apply(null, newArr));
    if(profit < 0){
        profit = 0;
    }

    return profit;
    
}

;
console.log(best([2, 3, 10, 6, 4, 8, 1]));
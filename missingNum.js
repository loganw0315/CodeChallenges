const missNum = (arr, maxNum) => {
    arrTotal = arr.reduce((acc, curr) => acc + curr);
    maxTotal = (maxNum * (maxNum + 1)) / 2;
    num = maxTotal - arrTotal;
    console.log(num);
}

missNum([1,2,3,4,5,6,7,9,10], 10);
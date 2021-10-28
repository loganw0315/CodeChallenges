

const printDigits = num =>{
   rev = 0;
   mod = 0;
   
    while (num > 0) {
        mod = num % 10;
        rev = rev * 10 + mod;
        num = Math.floor(num / 10);
        console.log(mod);
    }

}

printDigits(314);

luckyArr = []
let i = 0
function luckyNum(n){
   
    while(i < n){
        
        let x = Math.floor(Math.random() * 10)

        if(!luckyArr.includes(x)){
            luckyArr.push(x)
            i++
        }
        
    }
    return luckyArr
}

console.log(luckyNum(10));
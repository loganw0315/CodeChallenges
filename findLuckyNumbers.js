
function luckyNum(n){
    luckyArr = []
    let i = 0
    
    while(i < n){
        
        let x = Math.floor((Math.random() * 10)+1)

        if(!luckyArr.includes(x)){
            luckyArr.push(x)
            i++
        }
        
    }
    return luckyArr
}
console.log(luckyNum(10));
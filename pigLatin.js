// Write your solution below:
const pigLatin = phrase => {
    let arr = phrase.split(" ");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = false;
    let newArr = arr.map(elem => {
        for(let i = 0; i < vowels.length - 1; i++){
            if(elem.indexOf(vowels[i]) == 0){
                result = true;
            }
        }
        if(result == true){
            elem = elem + 'yay'
            
        }else{
            newString = elem.substring(1);
            elem = newString + elem[0] + 'ay'
        }
        
    
        return elem;
    }
    
    )
    let finalArr = newArr.join(" ")
    return finalArr;

}

console.log(pigLatin('porcupines are cute'));


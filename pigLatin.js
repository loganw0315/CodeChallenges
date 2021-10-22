// Write your solution below:
const pigLatin = phrase => {
    let arr = phrase.split(" ");

    let newArr = arr.map(elem => {
        if(elem.startsWith('a','i','e','o','u')){
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
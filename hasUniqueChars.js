// Write your code below
function hasUniqueChars(word){
    let unique = true;
    const set = new Set(word)

    if(set.size !== word.length){
        unique = false;
    }
    return unique;

}

console.log(hasUniqueChars());
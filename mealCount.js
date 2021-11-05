var list1 = [
{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
{ firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
{ firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
{ firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
];
console.log(list1[1].meal);
const mealCount = list => {
    let vegeCount = 0
    let stanCount = 0
    let vegaCount = 0
    for(let i = 0; i < list.length; i++){
        if(list[i].meal === 'vegetarian'){
            vegeCount++
        } else if(list[i].meal === 'standard'){
            stanCount++
        } else if(list[i].meal === 'vegan'){
            vegaCount++
        }
    }

    count = {
        vegetarian: vegeCount,
        standard: stanCount,
        vegan: vegaCount
    }
    return count;
}

console.log(mealCount(list1));
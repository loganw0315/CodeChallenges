var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const guessGift = (wishArr, presentArr) => {
    let presentMatch = [];

    wishArr.forEach(elem => presentArr.forEach(elem2 => {if(elem.size === elem2.size && elem.clatters === elem2.clatters && elem.weight === elem2.weight){presentMatch.push(elem.name)}}))
    
    return presentMatch;
}

console.log(guessGift(wishlist,presents));
// filter() = Cria um novo array filtrando os elementos.

// let numbers = [1,2,3,4,5,6,7];

// const even = numbers.filter(isEven)
// console.log(even);

// const odd = numbers.filter(isOdd)
// console.log(odd);


// function isEven(element){
//     return element % 2 === 0;
// }


// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [13, 14, 18,  19, 43, 23];
// const adult = ages.filter(isAdult);
// console.log(adult)

// const children = ages.filter(isChildren);
// console.log(children)

// function isAdult(element){
//     return element >= 18;
// }


// function isChildren(element){
//     return element < 18;
// }


const words = ['apple', 'orange', 'banana', 'kiwi', 'pomegranate', 'coconut'];

const shortWords = words.filter(getShortWords)

console.log(shortWords);

const longWords = words.filter(getLongWords)

console.log(longWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
// reduce() = Reduz os elementos de um array a um único valor.

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`${total.toFixed(2)}`)
// function sum(previus, next){

//     return previus + next// pega o elemento anterior e soma com o próximo.

// }


// const grades = [45,56,76,54,23,54];

// const maximum = grades.reduce(getMax);

// console.log(`Maximum is ${maximum}`)

// function getMax(previus, next){
// return Math.max(previus, next);
// }

const grades2 = [2,4,5,3,5,45,3,4];
const minimun = grades2.reduce(getMin);

console.log(`Minimum: ${minimun}`)

function getMin(previus, next){
    return Math.min(previus, next);
}
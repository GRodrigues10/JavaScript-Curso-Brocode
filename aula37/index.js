// arrow functions = É a menira concisa de escrever uma expressão de função, é boa para  funções simples que você usa apenas uma vez.

//Fórmula = (parâmetros) => o seu código.

// const hello = (nome, age) => {console.log(`Hello, ${nome}!`);
//                               console.log(`Você tem ${age} anos!`)}

// hello('Gabriel', 22);



// setTimeout(() => console.log('Hello'), 3000);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));

console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0 );

console.log(evenNums)

const oddNums = numbers.filter((element) => element % 2 !== 0 );

console.log(oddNums)

const total = numbers.reduce((prev, next) => prev + next);
console.log(total)
// Function Declaration = Define um bloco de código retilizável que executa uma tarefa especídfica.


// function hello(){
//     console.log('Hello!');
// }



//Function Expressios = É uma forma de definir funções ou variáveis.

//  const hello = function(){

//      console.log('Hello!');

//  }



// setTimeout(hello, 3000);




// setTimeout(function(){
//     console.log('Hello!');
// }, 3000);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map( function(element){

    return Math.pow(element, 2);
    

});

const evenNums = numbers.filter(function(element){
    return element % 2 == 0;
})

console.log(evenNums)


const oddNums = numbers.filter(function(element){
    return element % 2 != 0;
})

console.log(oddNums)


const cube = numbers.map( function(element){

    return Math.pow(element, 3);
    

});

console.log(cube)

const total = numbers.reduce(function(prev, next){

    return prev + next;


})

console.log(total)








// console.log(squares)

// function square(element){

//     return Math.pow(element, 2);

// }
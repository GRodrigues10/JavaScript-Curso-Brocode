//destructuring = Nos permite extrair valores de array e objetos e depois atribuí-los  uma variáveis de maneira conveniente.

// podemos usar [] - para utilizar desestruturação de arrays.
// podemos usar {} - para utilizar desestruturação de objetos.

// 5 EXEMPLOS:

//EXEMPLO 1 - TROCAR O VALOR DE DUAS VARIÁVEIS.

// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

//EXEMPLO 2 - TROCAR 2 ELEMENTOS EM UM ARRAY.

// const cores = ['Vermelho', 'Verde', 'blue', 'Preto', 'Branco'];

// [cores[0], cores[4]]  = [cores[4], cores[0]]

// console.log(cores)


//EXEMPLO 3 - ATRIBUIR ELEMENTOS DO ARRAY A VARIÁVEIS.

// const cores = ['Vermelho', 'Verde', 'blue', 'Preto', 'Branco']

// const [cor1, cor2, cor3, ...corExtra] = cores;

// console.log(cor1)
// console.log(cor2)
// console.log(cor3)
// console.log(corExtra)//Pegando o resto dos elementos.




//EXEMPLO 4 - EXTRAIR VALORES DE OBJETOS.

// const person1 = {
//     nome : 'Bob Esponja',
//     sobrenome: 'Calça Quadrada',
//     idade: 30,
//     trabalho: 'Mestre Cuca'
// }

// const person2 = {
//     nome : 'Patrick',
//     sobrenome: 'Estrela',
//     idade: 35
// }

// const {nome, sobrenome, idade, trabalho='Desempregado'} = person2;



// console.log(nome);
// console.log(sobrenome);
// console.log(idade);
// console.log(trabalho);


//EXEMPLO 5 - DESESTRUTURAR PARÂMETROS DA FUNÇÃO.

function displayPerson({nome,sobrenome,idade,trabalho='Desempregado'}){

    console.log(`Nome:${nome}, sobrenome:${sobrenome}`);

    console.log(`Idade:${idade}`)
    console.log(`Trabalho:${trabalho}`)
    
}


 const person1 = {
     nome : 'Bob Esponja',
     sobrenome: 'Calça Quadrada',
     idade: 30,
     trabalho: 'Mestre Cuca'
 }

 const person2 = {
     nome : 'Patrick',
     sobrenome: 'Estrela',
     idade: 35
 }

displayPerson(person2)





// sort() - Método usado apra classificar os elementos de um array no lugar, no entanto, como o método sort, classificamos os elementos como strings em ordem lexicográfica, não em ordem alfabética.

//lexigráfica = (alfabética + números + símbolos) como strings.

// let frutas = ['Maçã', 'Laranja', 'Banana', 'Coco', 'Abacaxi'];

// let números = [3, 4, 5, 10, 1, 4, 40, 7, 9];

// frutas.sort()
// números.sort((a, b) => a - b)

// console.log(frutas)
// console.log(números)

const pessoas = [{nome: 'Bob Esponja', idade: 30, gpa: 3.0}, 
                 {nome: 'Patrick', idade: 35, gpa: 1.5},
                 {nome: 'Lula Molusco', idade: 45, gpa: 2.5}, 
                 {nome: 'Seu Sirigueijo', idade: 50, gpa: 4.0}]

//pessoas.sort((a , b)=> a.idade - b.idade);
pessoas.sort((a , b)=> a.nome.localeCompare(b.nome));//Examina 2 strings para ordem lexicográfica.


console.log(pessoas)
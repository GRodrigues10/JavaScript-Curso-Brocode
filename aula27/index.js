// operador spread - ... É representado por 3 pontos. Permite que um iterável como um array ou string seja expandido em elementos separados(descompacta os elementos).

// let numbers = [1,2,3,4,5];
// let maximo = Math.max(...numbers);
// console.log(maximo)// É necessário usar o operador spread para usar o Math.max() em um array. O operador spread, espalha nosso vetor em diferentes caracteres, meio que descompacta uma vetor.

// let minimo = Math.min(...numbers);
// console.log(minimo)// Mesma coisa o mínimo

// let userName = "Gabriel Rodrigues";
// let letras = [...userName];// Espalhando os caracteres da string.
// console.log(letras);

let frutas = ["Maçã", "Banana", "Laranja"];
let vegetais = ["Cenoura", "Aipo", "Batata"];


let copiaFrutas =[...frutas];//Copiando uma string.

let foods = [...frutas, ...vegetais, "leite", "ovo"];//Combinando arrays.

console.log(frutas)
console.log(copiaFrutas)
console.log(foods)
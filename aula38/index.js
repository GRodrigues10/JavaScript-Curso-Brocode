//Objetos - São uma coleção de propriedades e/ou métodos.

//Podem representar objetos do mundo real (pessoas, produtos, lugares).

//ex: objeto = {chave, valor,
//                  function()}    

let person1 = {
    firstName: 'Bob Esponja',
    lastName: 'Calça Quadrada',
    idade: 30, 
    estáEmpregado: true,
    estouPronto: function(){console.log('Estou Pronto!!!')},
    eat: () => console.log('Eu estou comendo um hambúrguer de Siri!')
}; 


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.idade);
console.log(person1.estáEmpregado);
person1.estouPronto();
person1.eat();

const person2 = {
    firstName: 'Patrick',
    lastName: 'Estrela',
    idade: 30, 
    estáEmpregado: false,
    euTambém: () => console.log('Eu também hahah!!!'),
    eat: () => console.log('Eu estou comendo 5 hambúrgueres de Siri!')
};

console.log('\n')

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.idade);
console.log(person2.estáEmpregado);
person2.euTambém();
person2.eat();
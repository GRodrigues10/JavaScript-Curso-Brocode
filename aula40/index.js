// construtor = Método especial para definir as propriedades e métodos dos objetos.

function Car(marca, modelo, ano, cor){
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor
    this.drive = function(){console.log(`Você dirige um ${this.modelo} da marca ${this.marca}!`)}
}

const car1 = new Car('Fiat', 'Uno', 2001, 'azul');
const car2 = new Car('Chevrolet', 'Camaro', 2025, 'red');
const car3 = new Car('Ferrari', 'Fusquinha do Zé', 1945, 'brown');

console.log(car1.marca);
console.log(car1.modelo);
console.log(car1.ano);
console.log(car1.cor);
car1.drive();


console.log('\n')

console.log(car2.marca);
console.log(car2.modelo);
console.log(car2.ano);
console.log(car2.cor);
car2.drive();


console.log('\n')

console.log(car3.marca);
console.log(car3.modelo);
console.log(car3.ano);
console.log(car3.cor);
car3.drive();
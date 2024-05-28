//this = É uma referência ao objeto onde o this é usado(o objeto depende do contexto imediato)

//ex: person.name = this.name

//ARROW FUNCTIONS NÃO FUNCIONAM COMO THIS!!!

let person1 = {
    name: 'Duke',
    food: 'franguinho',
    sayHello: function (){ console.log(`Auau, eu sou o ${this.name}!`)},//Arrow Functions não funcionam muito bem aqui!
    eat:function(){console.log(`${this.name} está comendo ${this.food}!`)}
}

let person2 = {
    name: 'Bolinha',
    food: 'Frangão',
    sayHello: function (){ console.log(`Auau, eu sou a ${this.name}!`)},//Arrow Functions não funcionam aqui!
    eat:function(){console.log(`${this.name} está comendo ${this.food}!`)}
}

person1.sayHello()
person1.eat()
console.log('\n')
person2.sayHello()
person2.eat()
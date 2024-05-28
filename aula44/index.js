// super keyword = É usada em classes para chamar o construtor ou acessar as propriedades e métodos de um pai(superclasse).

// this = esse objeto.
//super = o pai.

class Animal{
    constructor(nome, idade,){
        this.nome = nome;
        this.idade = idade;
    }
    move(speed){
        console.log(`O ${this.nome} está se movendo a uma velocidade de ${speed}km/h`)
    }
}

class Rabbit extends Animal{
    constructor(nome, idade, velocidadeCorrer){
        super(nome, idade);
        this.velocidadeCorrer = velocidadeCorrer;
    }
    run(){
        console.log(`Esse ${this.nome} pode correr.`);
        super.move(this.velocidadeCorrer);
    }
}

class Fish extends Animal{
    constructor(nome, idade, velocidadeNadar){
        super(nome, idade);
    
        this.velocidadeNadar = velocidadeNadar;
    }

    swim(){
        console.log(`Esse ${this.nome} pode nadar.`)
        super.move(this.velocidadeNadar);
    }
}

class Hawk extends Animal{
    constructor(nome, idade, velocidadeVoar){
        super(nome, idade);
        this.velocidadeVoar = velocidadeVoar;
    }

    fly(){
        console.log(`Esse ${this.nome} pode voar.`)
        super.move(this.velocidadeVoar);
    }
}


const rabbit = new Rabbit('Coelho', 34, 37)

const fish = new Fish('Peixe', 54, 54)

const hawk = new Hawk('Falcão', 14, 87)

rabbit.run()
console.log('\n');
fish.swim()
console.log('\n');
hawk.fly()
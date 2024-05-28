//Herança = Permite que uma nova classe herde propriedades e métodos de uma classe existente. (Pai -> filho). A herança ajuda na reutilização de código.

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating!`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping!`);
    }
    
}


class Rabbit extends Animal{
     name = 'Rabbit';
     run(){
        console.log(`This ${this.name} is running!`)
     }
}

class Fish extends Animal{
    name = 'Fish';
    swim(){
        console.log(`This ${this.name} is swimming!`)
     }
}

class Hawk extends Animal{
    name = 'Hawk';
    swim(){
        console.log(`This ${this.name} is flying!`)
     }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(hawk.alive)
rabbit.eat()
rabbit.sleep
rabbit.run()


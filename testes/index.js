class Personagens{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

}

class DarthVader extends Personagens{
    constructor(nome,idade,categoria){
        super(nome, idade);
        this.categoria = categoria;
    }

    poder(){
        console.log(`${this.nome} tem um poder de 8/10!`);
    }
}

class ObiWan extends Personagens{
    constructor(nome,idade,categoria){
        super(nome, idade);
        this.categoria = categoria;
    }
    poder(){
        console.log(`${this.nome} tem um poder de 6/10!`);
    }
}


const darthvader= new DarthVader('Darth Vader', 23, 'Lord Sith')
const obiwan = new ObiWan('Obi Wan', 35, 'Mestre Jedi')

console.log(darthvader);
darthvader.poder()

console.log('\n');

console.log(obiwan);
obiwan.poder()

class Personagem{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Dragão extends Personagem{
    constructor(nome, idade){
        super(nome, idade)
        console.log(`O nome do Dragão é ${this.nome} e tem ${this.idade} anos de idade.`)
    }
    atacar(){
        console.log(`O Dragão ${this.nome} está atacando com fogo!`)
    }

    set nome(novoNome){
        if(typeof novoNome === 'string' && novoNome.length > 0){
            this._nome = novoNome;
        }
        else{
            console.error('O nome tem que ser um texto e tem que possuir um tamanho maior que 0.');
        }
    }

    get nome(){
        return this._nome;
    }

    set idade(novaIdade){
        if(typeof novaIdade === 'number' && novaIdade > 0){
            this._idade = novaIdade;
        }
        else{
            console.error('A idade tem que ser numérica e tem que ser um número maior 0.');
        }
    }

    get idade(){
        return this._idade;
    }
}

class Dragão2 extends Personagem{
    constructor(nome, idade){
        super(nome, idade);
        console.log(`O nome do Dragão é ${this.nome} e tem ${this.idade} anos de idade.`)

    }
    atacar2(){
        console.log(`O Dragão ${this.nome} está atacando com gelo!`)
    }
}

const dragão1 = new Dragão('Drakath', 213);
dragão1.atacar();
console.log('\n');
const dragão2 = new Dragão2('Volkorium', 345);
dragão2.atacar2();


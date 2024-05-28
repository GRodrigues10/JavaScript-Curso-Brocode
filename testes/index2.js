class Personagens{
    constructor(nome, idade, gênero){
        this.nome = nome;
        this.idade = idade;
        this.gênero = gênero;
    }
    velocidade(){
        console.log(`${this.nome} é véio pra caraca kkkk! Corre nada kkkk`);
    }

    set nome(novoNome){
        if(typeof novoNome === "string" && novoNome.length > 0){
            this._nome = novoNome;
        }
        else{
            console.error('Somente strings maiores que 0 são aceitas!')
        }
    }

    get nome(){
        return this._nome;
    }






    set idade(novaIdade){
        if(typeof novaIdade === "number" && novaIdade > 0){
            this._idade = novaIdade;
        }
        else{
            console.error('Somente números maiores que 0 são aceitos!')
        }
    }

    get idade(){
        return this._idade;
    }




    set gênero(novoGênero){
        if(typeof novoGênero === "string" && novoGênero.length > 0){
            this._gênero = novoGênero;
        }
        else{
            console.error('Somente strings maiores que 0 são aceitas!')
        }
    }

    get gênero(){
        return this._gênero;
    }

    

}

class Palpatine extends Personagens{
    constructor(nome,idade,gênero,classe){
        super(nome, idade, gênero);
        this.classe = classe;
        
    }
   
}

class Yoda extends Personagens{
    constructor(nome, idade, gênero, classe){
        super(nome, idade, gênero);
        this.classe = classe;
        
    }
}

const yoda = new Yoda('Yoda', 900, 'Masculino', 'Jedi');
const palpatine = new Palpatine('Palpatine', 67, 'Masculino', 'Sith');

console.log(yoda.nome);
console.log(yoda.idade);
console.log(yoda.gênero);
yoda.velocidade()

console.log('\n');

console.log(palpatine.nome);
console.log(palpatine.idade);
console.log(palpatine.gênero);
palpatine.velocidade();
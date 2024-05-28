//objetos aninhados = São objetos dentri de outros objetos. Eles permitem representar estruturas de dados mais complexas. Um objeto filho é delimitado por um objeto pai.

// Ex: Person{Adress{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    nomeCompleto: 'Gabriel da Costa Rodrigues',
    idade: 22,
    estuda: true,
    hobbies: ['Futebol', 'Video Game', 'UFC'],
    endereço:{
        rua: 'Expedicionário Aires Quaresma, 3646',
        cidade:'São Gonçalo',
        país: 'Brasil'

    }
}

// console.log(person.nomeCompleto);
// console.log(person.idade);
// console.log(person.estuda);
// console.log(person.hobbies);
// console.log(person.hobbies[2]);
// console.log(person.endereço);
// console.log(person.endereço.país);


// for(const propriedade in person.endereço){
//     console.log(person.endereço[propriedade])
// }


// let propriedade;

// for(propriedade in person.endereço){
//     console.log(person.endereço[propriedade])
// }

class Pessoa{
    constructor(nome, idade, ...endereço){
        this.nome = nome;
        this.idade = idade;
        this.endereço = new Endereço(...endereço);
    }
}


class Endereço{
    constructor(rua, cidade, país){
        this.rua = rua;
        this.cidade = cidade;
        this.país = país;
    }
}

const pessoa1 = new Pessoa('Gabriel', 22, 'Expedicionário Aires Quaresma', 'São Gonçalo', 'Brasil');


const pessoa2 = new Pessoa('Gabriele', 32, 'Biru Biru', 'Amazonas', 'Brasil');


const pessoa3 = new Pessoa('Gabriela', 42, 'Biru Biru', 'Recife', 'Brasil');
console.log(pessoa1)



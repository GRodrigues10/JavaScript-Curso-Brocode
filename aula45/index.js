//getter = São métodos especiais que torna uma propriedade legível

//setter = São métodos especiais que tornam uma propriedade gravável.

//Podemos usar getters e setters para validar e modificar um valor ao ler/escrever uma propriedade.


//EXEMPLO 1:

// class Retângulo{
//     constructor(largura, altura){
//         this.largura = largura;
//         this.altura = altura;

//     }
//     set largura(novaLargura){
//         if(novaLargura > 0){//Fazendo a verificação de erros ao digitar a largura!
//             this._largura = novaLargura;// Esse '_' informa que é uma propriedade privada, ou seja, você não deveria tocar nela.
//         }
//         else{
//             console.error('Largura tem que ser um número positivo!')
//         }
//     }

//     set altura(novaAltura){//Fazendo a verificação de erros ao digitar a altura!
//         if(novaAltura > 0){
//             this._altura = novaAltura; 
//         }
//         else{
//             console.error('Altura tem que ser um número positivo!')
//         }
//     }

//     get largura(){//Traduzindo os setter de largura e retornando o valor para poder ser lido!
//         return this._largura.toFixed(1);
//     }

//     get altura(){//Traduzindo os setter de altura e retornando o valor para poder ser lido!
//         return this._altura.toFixed(1);; 
//     }

//     get area(){
//         return (this._largura * this._altura).toFixed(1);//Acessando uma propriedade que não existe usando getters. Isso funciona!
//     }
// }



// const retângulo = new Retângulo(6, 7);

// retângulo.largura = 5;//Atualizando a largura atrevés dos setters!
// retângulo.altura = 8//Atuaizando a altura através dos setters!

// console.log(retângulo.largura)
// console.log(retângulo.altura)
// console.log(retângulo.area)



//EXEMPLO 2:

class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    set nome(novoNome){
        if(typeof novoNome === "string" && novoNome.length > 0){
            this._nome = novoNome;
        }
        else{
            console.error('O nome não pode está vazio e tem que ser uma string!')
        }
    }

    set sobrenome(novoSobrenome){
        if(typeof novoSobrenome === "string" && novoSobrenome.length > 0){
            this._sobrenome = novoSobrenome;
        }
        else{
            console.error('O Sobrenome não pode está vazio e tem que ser uma string!')
        }
    }

    set idade(novaIdade){
        if(typeof novaIdade === "number" && novaIdade > 0){
            this._idade = novaIdade;
        }
        else{
            console.error('A idade tem que ser numérica e não pode ser negativa!')
        }
    }





    get nome(){
        return this._nome;
    }

    
    get sobrenome(){
        return this._sobrenome;
    }

    get nomeCompleto(){
        return this._nome + ' ' +  this._sobrenome
    }

    
    get idade(){
        return this._idade;
    }
}

const pessoa = new Pessoa('Gabriel', 'Rodrigues', 22);

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.nomeCompleto);
console.log(pessoa.idade);

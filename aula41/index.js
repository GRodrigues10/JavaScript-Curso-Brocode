// classes = São um recurso es6 que fornece uma maneira mais estruturada e limpa de trabalhar com objetos em comparação com as funções tradicionais do construtor com as quais estamos normalmente acostumados.

//Ex: palavras chaves estáticas, encapsulamente, herança.

class  Produtos{
    constructor(nome, preço){
        this.nome = nome;  
        this.preço = preço; 
    }

    mostrarProduto(){
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: ${this.preço}`);
    }

    calTotal(taxa){
        return this.preço + (this.preço * taxa)
    }
}
const taxa = 0.05;
const produto1 = new Produtos('Arroz', 10.99)
produto1.mostrarProduto();

console.log('\n')

const produto2 = new Produtos('Feijão', 11.99)
produto2.mostrarProduto();

const total = produto1.calTotal(taxa);

console.log(`\nO total do arroz com imposto é ${total.toFixed(2)}`)



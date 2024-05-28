// closure - É uma função definida dentro de outra função, a função interna tem acesso às variáveis e ao escopo da função externa. Usando closure(fechamentos), eles permitem variáveis privadas e estado manutenção. Usado frequentemente em framewoks JS: React, Vue, Angular.

// function externa(){
//     let mensagem = 'Olá'
//     function interna(){
//         console.log(mensagem);
        
        
//     }
//     interna()
    
// }

// //mensagem = 'Adeus!';Isso não funciona, pois a função interna está em um escopo diferente, como se estivesse em outra dimensão.

// externa();

// let contador = 0;//Aqui sempre que você chamar a função, ela contará 1. Pois ela não srá redeclarada.
// function incrementa(){
//     //let contador = 0;Adicionando a variável aqui, ela estará sendo redeclarada sempre que a função é executada, por isso o contador sempre não passará de 1.
//     contador++;
//     console.log(`Contador aumentado para ${contador}`);
// }

// incrementa();
// incrementa();
// incrementa();
// incrementa();
// incrementa();




// function criarContador(){

//     let contador = 0;

// function incrementa(){
    
//     contador++;
//     console.log(`Contador aumentado para ${contador}`);
//  }

//     function pegarContador(){
//         return contador;
//     }

//     return {incrementa,pegarContador};//acessando o escopa da função criarContador.
// }

// const cont = criarContador();
// cont.incrementa();
// cont.incrementa();
// cont.incrementa();

// console.log(`A contagem atual é: ${cont.pegarContador()}`);

function criaJogo(){
    let pontuação = 0;

function incrementaPontuação(pontos){
    pontuação += pontos;
    console.log(`+${pontos}pts`)
}

function decrementaPontuação(pontos){
    pontuação -= pontos;
    console.log(`-${pontos}pts`)
}

function pegarPontuação(){
    return pontuação;
}
    return {incrementaPontuação,decrementaPontuação,pegarPontuação}
}


const game = criaJogo();

game.incrementaPontuação(5);
game.decrementaPontuação(3)
console.log(`A pontuação final é de: ${game.pegarPontuação()}pts`);
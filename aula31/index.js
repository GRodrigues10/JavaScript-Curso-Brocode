// Chamadas de Retorno (callbacks) - É uma função que é passada como argumento para outra função,


//Usados para lidar com operações assíncronas, como:

//  1. Ler um arquivo.
//  2. Solicitações de rede.
//  3. Interagir com bancos de dados. 

//Hey, quando terminar, ligue para o próximo!


// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

// function leave(){
//     console.log('Leave!');
// }

// hello(goodbye)

function sum(callback, x, y){
    let res = x + y;
    callback(res);

}

function displayConsole(res){
    console.log(res)
}

sum(displayPage, 3, 6)


function displayPage(result){
    document.getElementById('myH1').textContent = result
}
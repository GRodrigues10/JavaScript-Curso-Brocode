// while loop = Repetirá algum código enquanto alguma condição for verdadeira.
// do while loop = vairação do while, ele vai fazer algo antes e depois verificar a condição. Ou seja, ele executa pelo menos uma vez

//let userName = "";

//WHILE LOOP:

// while(userName === "" || userName === null){
//     userName = window.prompt("Entre com o seu nome!");
// }
// console.log(`Hello, ${userName}!`);



//DO WHILE LOOP:
// do{
//     userName = window.prompt("Entre com o seu nome!");
    
// }while(userName === "" || userName === null)

// console.log(`Hello, ${userName}!`);




let loggedIn = false;
let name;
let password;

while(!loggedIn){
    userName = window.prompt("Digite o seu nome:");
    password= window.prompt("Digite a sua senha:");


    if(userName === "MyUsername" && password === "MyPassword"){
        loggedIn = true;
        console.log("Você está logado!");
    }else{
        console.log("Credenciais Inválidas! Por favor, tente novamente!")
    }
}
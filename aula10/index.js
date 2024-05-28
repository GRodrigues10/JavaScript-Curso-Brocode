// Declarações IF = Se a condição for verdadeira, execute algum código, se não, faça outra coisa.

// let age = 22;

// if(age >= 18){
//     console.log("Você tem idade para entrar nesse site!")
// }else{
//     console.log("Você não tem idade para entrar nesse site!")
// }

// let time = 9;

// if(time < 12){
//     console.log("Bom dia!")
// }else{
//     console.log("Boa tarde!")
// }

// let isStudent = true;

// if(isStudent){
//     console.log("Você é um estudante!");
// }else{
//     console.log("Você não é um estudante!");
// }

// let age = 22;
// let carteiraMotorista = true;

// if(age >= 18){
//     console.log("Você tem idade para dirigir!")
//     if(carteiraMotorista){
//         console.log("Você tem licensa!");
//     }
//     else{
//         console.log("Você não tem licensa!");
//     }
// }else{
//     console.log("Você não tem idade para dirigir!");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    
    if(age >= 18  && age < 100){
        resultElement.innerHTML = 'Você tem idade para entrar nesse site!';
    }
    else if(age == 0){
        
        resultElement.innerHTML = "Você não pode entrar, tu acabou de nascer man kk";
    }
    else if(age < 0){
        resultElement.innerHTML = "IDADE INVÁLIDA!";
    }
    
    else if(age >= 100){
        console.log("Você é muito velho para entrar nesse site!");
        resultElement.innerHTML = "Você é muito velho para entrar nesse site!";
    }
    
    else{
        resultElement.innerHTML ="Você não tem idade para entrar nesse site!";
        
    }
}


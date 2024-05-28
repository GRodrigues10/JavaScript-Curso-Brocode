// FUNÇÕES: É uma seção de código reutilizável, você declara esse código uma vez e pode usá-lo sempre que quiser! Tudo que você precisa fazer é chamar a função para executar esse código.


// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${username}!`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are ${age} years old!`);

// }

// happyBirthday("Gabriel", 23);
// happyBirthday("Jorge", 43);


// function add(x, y){

//     let result = x + y;

//     return result;

// }

// function subtract(x, y){

//     let result = x - y;

//     return result;

// }


// function multiply(x, y){

//     let result = x * y;

//     return result;

// }


// function divide(x, y){

//     let result = x / y;

//     return result;

// }

// let answer = add(2,4);
// let answer2 = subtract(2,4);
// let answer3 = multiply(2,4);
// let answer4 = divide(2,4);
// console.log(answer);
// console.log(answer2);
// console.log(answer3);
// console.log(answer4);



// function par(num){
//     if(num % 2 === 0){
//         console.log("É par!");
//     }else{
//         console.log("É ímpar!");
//     }
    
// }

// par(2);


function isValidEmail(email){
    if(email.includes("@") ){

        return true;

    }else{
        return false
    }
}

console.log(isValidEmail("gabriel@gmail.com"))

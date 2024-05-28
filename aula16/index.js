//Fatiamento de String: É o processo de criação de uma substring a partir de uma parte outra string. Ex: string.slice(início, final);


const fullName = "Gabriel Rodrigues";

// let firtsName = fullName.slice(0,7);
// let lastName = fullName.slice(8, 17)
// let firtChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);


// let firtsName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firtsName);
// let lastName = fullName.slice(fullName.indexOf(" "));
// console.log(lastName.trim());

// console.log(firtChar);
// console.log(lastChar);


let email = "gabrielrodrigues@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let exetension = email.slice(email.indexOf("@"));

console.log(userName);
console.log(exetension);
// Encademaneto de métodos = É uma técnica de programação onde você chama um método após o outro em uma linha contínua de código.

let userName = window.prompt("Entre com o seu nome:");


// ------- SEM O ENCADEAMENTO DE MÉTODOS -------


// userName = userName.trim();
// let letter = userName.charAt(0);

// letter = letter.toUpperCase();
// extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();

// userName = letter + extraChars;
// console.log(userName);





// ------- COM O ENCADEAMENTO DE MÉTODOS -------

userName = userName.trim().charAt
(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName)





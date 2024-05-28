//toLocaleString() = Retorna uma string com uma representação sensível ao idioma de um número.

//Intl.NumberFormat()

//number.toLocaleString("locale", {options});

// 'locale' = Especifica o idoma a ser usado (undefined = padrão definido pelo navegador).
// 'options' = Você pode enviar um objeto, um objeto de opções de formatação.


let number = 123456.789;

//BRASIL:
// number = number.toLocaleString('pt-BR');

//EUA:
// number = number.toLocaleString('en-US');


//ÍNDIA:
// number = number.toLocaleString('hi-IN');

//Alemanha:
// number = number.toLocaleString('de-DE');

//PADRÃO DO NAVEGADOR:
//  number = number.toLocaleString(undefined);


//Definindo o tipo da moeda do BRASIL:
// number = number.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});


// Definindo o tipo da moeda dos EUA:
// number = number.toLocaleString('EN-us', {style: 'currency', currency:'USD'});

// Definindo o tipo da moeda da Índia:
//  number = number.toLocaleString('hi-IN', {style: 'currency', currency:'INR'});


// Definindo o tipo da moeda da Alemanha:
 number = number.toLocaleString('de-DE', {style: 'currency', currency:'EUR'});
 
console.log(number)
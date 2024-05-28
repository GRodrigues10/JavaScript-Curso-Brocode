//const é uma variável que não pode ser mudada.Geralemnte constantes possuem letras maiúsculas, mas isso só é feito para tipos de dados primitivos, como números e booleanos. Tipos de dados de referência como Strings normalmente não seguem essa convenção.

const PI = 3.14159;
let radious;
let circumference;


//radious = prompt("Digite o raio do círculo:");


//circumference = 2 * PI * radious;

//console.log(circumference)

document.getElementById("mySubmit").onclick = function(){
    radious =  document.getElementById("myText").value;
    radious = Number(radious);
    circumference = 2 * PI * radious;
    document.getElementById("myH3").textContent = circumference + 'cm';

}
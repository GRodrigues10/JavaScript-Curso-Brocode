//seletores de elementos = São métodos usados para direcionar e manipular elementos HTML. Usando esses métodos, eles permitem que você selecione um ou mais elementos HTML múltiplos do DOM(DOCUMENT OBJECT MODEL).

//1. document.getElementById() - ELEMENTO OU NULO
//2. document.getElementsClassName() - COLEÇÃO HTML
//3. document.getElementsByTagName() - COLEÇÃO HTML
//4. document.querySelector() - ELEMENTO OU NULO
//5. document.querySelectorAll() - LISTA DE NÓS


//GET ELEMENT BY ID:

// const myHeading = document.getElementById('my-heading');
// myHeading.style.backgroundColor = 'yellow';
// myHeading.style.textAlign = 'center';
// console.log(myHeading);


//GET ELEMENT BY CLASS NAME:

// const frutas  = document.getElementsByClassName('frutas');
// // frutas[0].style.backgroundColor = 'Yellow'


// // console.log(frutas);

// // for(let fruta of frutas){
// //     fruta.style.backgroundColor ='Yellow'
// // }


// Array.from(frutas).forEach(fruta => {fruta.style.backgroundColor = 'red'});// forEach só funciona com coloeções de html assim.


//GET ELEMENT BY TAG NAME:


const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');
console.log(h4Elements);

// h4Elements[0].style.backgroundColor = 'Yellow'



// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = 'Yellow';
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = 'red';
// }


// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = 'lightblue';
// });



//QUERY SELECTOR:

// const element = document.querySelector('.frutas');

// element.style.backgroundColor = 'lightgreen';
// console.log(element);




//QUERY SELECTOR ALL:

const frutas = document.querySelectorAll('.frutas');

frutas[0].style.backgroundColor = 'brown';
console.log(frutas);

frutas.forEach(fruta => {
    fruta.style.backgroundColor = 'yellow'
})






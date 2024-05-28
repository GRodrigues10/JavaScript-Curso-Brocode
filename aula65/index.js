//DOM Navigation = É o processo de navegar pela estrutura de um documento HTML usando Javascript.

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// --------------.firstElementChild--------------

// const elemento = document.getElementById('frutas');

// const primeiroFilho = elemento.firstElementChild;
// primeiroFilho.style.backgroundColor = 'lightblue';

// const ulElementos = document.querySelectorAll("ul");

// ulElementos.forEach((ulElementos) =>{
//     const primeiroFilho = ulElementos.firstElementChild;
//     primeiroFilho.style.backgroundColor = 'Yellow'
// })




// --------------.lastElementChild--------------


// const elemento = document.getElementById('frutas');
// const últimoFilho = elemento.lastElementChild;
// últimoFilho.style.backgroundColor = 'Green';

// const ulElementos = document.querySelectorAll('ul');
// ulElementos.forEach((ulElementos) =>{
//     const últimoFilho = ulElementos.lastElementChild;
//     últimoFilho.style.backgroundColor = 'yellow'
// })


// --------------.nextElementSibling--------------


// const elemento = document.getElementById('maçã');
//  const próximoIrmão = elemento.nextElementSibling;
//  próximoIrmão.style.backgroundColor = 'yellow'


 // --------------.previousElementSibling--------------

//  const elemento = document.getElementById('laranja');
//  const anteriorIrmão = elemento.previousElementSibling;
//  anteriorIrmão.style.backgroundColor = 'yellow'




  // --------------.parentElement--------------
//   const elemento = document.getElementById('laranja');
//   const pai = elemento.parentElement;
//   pai.style.backgroundColor = 'yellow'
    





   // --------------.children--------------

   const elemento = document.getElementById('frutas');
   const filhos = elemento.children;
   console.log(filhos);
filhos[1].style.backgroundColor = 'lightblue';
//    Array.from(filhos).forEach(filho => {
//     filho.style.backgroundColor = 'yellow';
//    });
//NodeList = É uma coleção estática de elementos HTML(id, class, element).
//Podem ser criados usando o seletor de consulta querySelectorAll().
//São semelhantes a um array, mas eles não tem(map, filter, reduce).
//Nodelist não serão atualizadas automaticamente para refletir as alterações no DOM.

let botões = document.querySelectorAll('.myBtns');

// // console.log(botões)


// //ADD HTML/CSS PROPRIETIES:

// botões.forEach(button => {
//     button.style.backgroundColor = 'red';

//     button.textContent = 'Hello There!'
// });


//CLICK event listener:

// botões.forEach(botão => {
//     botão.addEventListener('click', evento =>{
//         evento.target.style.backgroundColor = 'green';
//     });
// })



//MOUSEOVER + MOUSEOUT + event listener:

// botões.forEach(botao =>{
//     botao.addEventListener('mouseover', evento => {
//         evento.target.style.backgroundColor = 'darkblue'
//     })
// })


// botões.forEach(botao =>{
//     botao.addEventListener('mouseout', evento => {
//         evento.target.style.backgroundColor = 'lightblue'
//     })
// })


// ADD AN ELEMENT:

// const novoBotão = document.createElement('button');//STEP1 = criando um elemento novo pelo JavaScript.


// novoBotão.textContent = 'Button 5';//STEP2 = Adicionar atributos os propriedades CSS.
// novoBotão.classList = 'myBtns';

// //STEP3 = Anexar esse elemento ao DOM.
// document.body.appendChild(novoBotão);

// botões = document.querySelectorAll('.myBtns');//Adicionando o botão 5 na lista(de fato, não só visualmente), atualizando basicamente a lista.


// REMOVE AN ELEMENT:

botões.forEach(botão => {
    botão.addEventListener('click', evento => {
        evento.target.remove();
        botões = document.querySelectorAll('.myBtns');//Apagando os botões da lista(de fato, não só visualmente), atualizando basicamente a lista.
    });
});
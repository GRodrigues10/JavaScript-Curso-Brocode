//classList = É uma propriedade de elemento que é usad apara interagir com uma lista de elementos de classes, ou seja, classe CSS, acessando a propriedade de lista de classes de um elemento.
//Podemos criar classes reutilizáveis para muitos elementos em toda a sua página da web.


// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// // contains()
//  const myH1 = document.getElementById('myH1');
//  const meuBotão = document.getElementById('myBtn');
// // meuBotão.classList.add('enabled');
// // meuBotão.classList.remove('enabled')

// // meuBotão.addEventListener('mouseover', evento =>{
// //     evento.target.classList.toggle('hover');//Poderia usar o add ao invés do toggle.
// // })

// // meuBotão.addEventListener('mouseout', evento =>{
// //     evento.target.classList.toggle('hover');//Poderia usar o add ao invés do toggle.
// // });

// myH1.classList.add('enabled');
// meuBotão.classList.add('enabled');

// myH1.addEventListener('click', evento => {
//     if(evento.target.classList.contains('disabled')){
//         evento.target.textContent += '🤬';
//     }


//     evento.target.classList.replace('enabled','disabled');
// });


// meuBotão.addEventListener('click', evento => {
//     if(evento.target.classList.contains('disabled')){
//         evento.target.textContent += '🤬';
//     }


//     evento.target.classList.replace('enabled','disabled');
// });



let buttons = document.querySelectorAll('.myBtns');

buttons.forEach(button =>{
    button.classList.add('enabled');
});

buttons.forEach(button =>{
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover')
    });
});


buttons.forEach(button =>{
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover')
    });
});


buttons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.classList.contains('disabled')){
            event.target.textContent += '😑'
        }else{
            event.target.classList.replace('enabled', 'disabled');
        }

        
    });

});
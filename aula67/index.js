// eventListener = Escuta eventos específicos para criar páginas da web interativas.
//events: click, mouseover,mouseout
// .addEventListener(event, callback or arrow function or anonymous function);

const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myBtn')



myBox.addEventListener('click', event => {
    
        event.target.style.backgroundColor = 'red'//Target é o alvo, ou seja, o que clicamos(nessa caso específico).
        event.target.textContent = 'AHHH 😫'
    
})

myBox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow'//Target é o alvo, ou seja, o que clicamos(nessa caso específico).
        event.target.textContent = 'Não faça isso!😥'
})

myBox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = 'lightgreen';
    event.target.innerHTML = 'Não clique!😁'
})
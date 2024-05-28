const myButton = document.getElementById('myBtn');
const myImg = document.getElementById('myImg');

myButton.addEventListener('click', (event)=>{

    if(myImg.style.visibility === 'hidden'){//A propriedade display pode ser usada no lugar de visibilty para ocultar, mas ela não irá reserva um espaço para a imagem. A propriedade display pode ser definida como nenhuma, para que a imagem fique ocultada.
        myImg.style.visibility = 'visible';
        myButton.textContent = 'Ocultar';

    }else{

        myImg.style.visibility = 'hidden';
        myButton.textContent = 'Mostrar';
       
    }


})
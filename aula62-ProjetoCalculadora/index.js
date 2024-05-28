//PROJETO CALCULADORA

const display = document.querySelector('#display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);//ISSO AQUI PODE DAR RUIM, SÓ USAR PARA FINS EDUCACIONAIS, NUNCA EM UM PROJETO REAL.
    }
    catch(error){
        display.value = 'Error!'
    }
}


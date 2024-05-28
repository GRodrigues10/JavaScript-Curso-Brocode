//setTimeout() - A função permite agendar a execução de uma função após um período de tempo em milisegundos. Os tempos são aproximados(variam de acordo com a carga de trabalho do seu ambiente de execução em JavaScript).

//setTimeout(callback, delay)
//clearTimeout(timeoutId) - Pode essa função para cancelar um tempo limite antes que ele seja acionado!





// setTimeout(function(){window.alert('Hello!')}, 3000);



// function sayHello(){
//     window.alert('Hello!');
// }

// setTimeout(sayHello, 3000);



// setTimeout(() => window.alert('Hello!'), 3000)


// const timeOutId = setTimeout(() => window.alert('Hello!'), 3000);

// clearTimeout(timeOutId);

let timeOutId
function startTimer(){
    timeOutId = setTimeout(() => window.alert('Hello'), 3000);
    console.log('STARTED');
}

function clearTimer(){
    clearTimeout(timeOutId);
    console.log('CLEARED')
}
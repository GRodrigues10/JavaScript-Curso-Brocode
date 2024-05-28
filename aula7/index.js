// Programa Contador

const decreaseBtn = document.getElementById("decremento");

const resetBtn = document.getElementById("limpar");

const increaseBtn = document.getElementById("incremento");

const counterLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count ++;
    counterLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    counterLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}
// Random Numbers  Genrator


// const min = 50;
// const max = 100;

// let randomNum = parseInt(Math.random() * (max - min)) + min;//Gernando números aleatórios entre 50 e 100.

// console.log(randomNum)

const mybutton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

mybutton.onclick = function(){
    randomNum1 = parseInt(Math.random() * max) + min;
    randomNum2 = parseInt(Math.random() * max) + min;
    randomNum3 = parseInt(Math.random() * max) + min;
    label1.innerHTML = randomNum1
    label2.innerHTML = randomNum2
    label3.innerHTML = randomNum3
}



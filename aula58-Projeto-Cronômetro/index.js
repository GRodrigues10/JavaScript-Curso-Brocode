
//CRONÔMETRO

const display = document.getElementById('display');
let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){

        startTimer = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
}
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTimer;
        isRunning = false;
    }
}


function reset(){
    clearInterval(timer);
    startTimer = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = '00:00:00:00'
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTimer;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);

    let seconds = Math.floor(elapsedTime / 1000 % 60);

    let miliseconds = Math.floor(elapsedTime % 1000 / 10);


        hours = String(hours).padStart(2, '0');

        minutes = String(minutes).padStart(2, '0');

        seconds = String(seconds).padStart(2, '0');

        miliseconds = String(miliseconds).padStart(2, '0');


    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

}
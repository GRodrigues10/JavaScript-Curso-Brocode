//CONVERSOR DE TEMPERARURA

const textBox = document.getElementById("textBox");

const toFahrenheit = document.getElementById("toFahrenheit");


const toCelsius = document.getElementById("toCelsius");

const result = document.getElementById("result");

let temperatura;

function convert(){
    if(toFahrenheit.checked){
        temperatura = Number(textBox.value);

        temperatura = temperatura * (9/5) + 32
        result.textContent = temperatura.toFixed(1) +  "ºF";

    }else if(toCelsius.checked){
        temperatura = Number(textBox.value);

        temperatura = (temperatura - 32) * (5/9);
        result.textContent = temperatura.toFixed(1) +  "ºC";
    }else{
        result.textContent = "Selecione a unidade!"
    }
}


const minNum = 1;
const maxNum = 20;
const resposta = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let tentativas = 0;
let adivinha;
let running = true;

while (running) {
    adivinha = window.prompt(`Adivinhe um número entre ${minNum} e ${maxNum}`);
    adivinha = Number(adivinha);

    if (isNaN(adivinha)) {
        window.alert("Por favor, digite um número!");
    } else if (adivinha < minNum || adivinha > maxNum) {
        window.alert(`Por favor, digite um número entre ${minNum} e ${maxNum}`);
    } else {
        tentativas++;
        if (adivinha < resposta) {
            window.alert(`Número é maior!`);
        } else if (adivinha > resposta) {
            window.alert(`Número é menor!`);
        } else {
            window.alert(`Você acertou! A resposta era ${resposta}. Você levou ${tentativas} tentativas para acertar.`);
            running = false;
        }
    }
}
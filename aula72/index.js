const escolhas = ['pedra', 'papel', 'tesoura'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0

function playGame(escolhajogador){
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];

    let resultado = '';
    if(escolhajogador === escolhaComputador){
        resultado = 'EMPATE!'
    }else{
        switch(escolhajogador){
            case 'pedra':
                resultado = (escolhaComputador === 'tesoura') ? 'VOCÊ GANHOU!': 'VOCÊ PERDEU!';
                break;



            case 'papel':
                resultado = (escolhaComputador === 'pedra') ? 'VOCÊ GANHOU!': 'VOCÊ PERDEU!';
                break;



            case 'tesoura':
                resultado = (escolhaComputador === 'papel') ? 'VOCÊ GANHOU!': 'VOCÊ PERDEU!';
                break;

            
        }
    }
    playerDisplay.textContent = `JOGADOR: ${escolhajogador}`;
    computerDisplay.textContent = `COMPUTADOR: ${escolhaComputador}`;
    resultDisplay.textContent = resultado;

    resultDisplay.classList.remove('greenText', 'redText', 'yellowText')

    switch(resultado){
        case 'VOCÊ GANHOU!':
            resultDisplay.classList.add('greenText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;


        case 'EMPATE!':
            resultDisplay.classList.add('yellowText');
            break;




        case 'VOCÊ PERDEU!':
            resultDisplay.classList.add('redText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
// Como aceitar o input do usuário

//1. JEITO FÁCIL = window.prompt
//2. JEITO PROFISSIONAL = HTML textbox

// let nome;

// nome = window.prompt("Qual é o seu nome?");
// console.log(nome)

let nome;

document.getElementById
("btn").onclick = function(){
    nome = document.getElementById("myText").value;
    console.log(nome);
    document.getElementById("myH1").textContent = ` Hello ${nome}`;
};


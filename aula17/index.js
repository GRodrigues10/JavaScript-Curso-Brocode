// Operadores Lógicos = São usados para combinar e manipular valores booleanos (verdadeiro ou falso)

// E == &&
// OU == ||
// NÃO = !


const temp = 23;

//USANDO O "E"

// if(temp > 0 && temp <= 30){
//     console.log("O tempo está bom!")
// }

// else{
//     console.log("O tempo está ruim!")
// }


//USANDO O "OU":

// if(temp <= 0 || temp >= 30){
//     console.log("O tempo está ruim!")
// }

// else{
//     console.log("O tempo está bom!")
// }


//USANDO O "NÃO"

const isSunny = true;
if(!isSunny){// Se não estiver ensolarado execute o código abaixo:
    console.log("Está nublado!")
}
else{
    console.log("Está ensolarado!")
}
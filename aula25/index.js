// array = Uma estrutura semelhante a uma variável que pode conter mais de um valor.

 let frutas = ["Maçã", "Banana", "Laranja"];
// frutas.push("Coco");//Inserindo elemento na ultima posição
// frutas.pop();//Inserindo elemento na ultima posição
// frutas.unshift("Manga")//Inserindo oelemento na primeira posição.
// frutas.shift();//Removendo elemento da primeira posição.

// console.log(frutas);

// let numOfFruits = frutas.length
// console.log(numOfFruits)

// let index = frutas.indexOf("Maçã");//Mostra a posição do elemento no array.


// console.log(index);


for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log("\nVERSÃO REVERSA:\n")
for(let i = frutas.length - 1; i>=0; i--){
    console.log(frutas[i]);
}

frutas.sort()//Ordena em ordena alfabética!
frutas.reverse()//Reverte!
console.log("\nVersão aprimorada!\n")
for(let fruta of frutas){
    console.log(fruta);
}





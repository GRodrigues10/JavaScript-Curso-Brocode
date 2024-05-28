//Parâmetros de descanso(rest) = (...rest) São um parâmetro prefixado com 3 pontos, eles permitem que uma função funcione com um número variável de argumentos, agrupando-os em um array. É muito semelhante ao operador spread.


//spread = Espande um array em elementos separados por parâmetros.

//rest = Faz o oposto, ele agrupa os elementos separados em um array.

// function openFridge(...foods){
//     console.log(foods);
// }

// function toGetFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "sorvete";
// const food3 = "hamburguer";
// const food4 = "sushi";
// //openFridge(food1,food2, food3,food4);

// const food = toGetFood(food1,food2, food3, food4)
// console.log(food)

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result
// }

// const total = sum(1,2);

// console.log(`Seu total é R$${total}`)

// function media(...numbers){
//          let result = 0;
//          for(let number of numbers){
//              result += number;
//          }
//          return result /numbers.length;
//      }

//      const total = media(75, 100, 85, 90, 50);
//     console.log(total)


function combineStrings(...strings){
    return strings.join(" ");
}

const fullName =   combineStrings("Senhor", "Bob Esponja", "Calça Quadrada");

console.log(fullName)


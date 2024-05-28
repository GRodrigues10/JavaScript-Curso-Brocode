// foreach() = método usando para iterar os elementos de um array e aplicar uma função especificada (callback) para cada elemento. 


// array.forEach(callback)

// let numbers = [1,2,3,4,5];


// numbers.forEach(cube)
// numbers.forEach(display)

// function double(element, index, array)
// {
//     array[index] = element * 2

// }

// function triple(element, index, array)
// {
//     array[index] = element * 3

// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }


// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }




// function display(element){
//     console.log(element);
// }


let fruits = ['apple', 'orange', 'banana', 'coconut'];

fruits.forEach(capitalize)
fruits.forEach(display)

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);


}


function display(element){
    console.log(element);
}
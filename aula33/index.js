// .map() = Aceita um retornod e chamada e aplica essa função a cada elemento de um array. É muito semelhante ao método forEach, porém retorna um novo array.

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);

// console.log(squares)

// const cubes = numbers.map(cube);

// console.log(cubes)

// function square(element){

//     return Math.pow(element, 2);
// }

// function cube(element){

//     return Math.pow(element, 3);
// }

// const students = ['Panaca', 'Dooku', 'Syfodias', 'Ajunta Pall']

// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);

// const studentsLower = students.map(lowerCase);
// console.log(studentsLower);

// function upperCase(element){

//     return element.toUpperCase();

// }

// function lowerCase(element){

//     return element.toLowerCase();

// }


const dates = ['2024-4-15', '2025-5-25', '2026-6-04'];
const formattedDates = dates.map(formatDates);

console.log(formattedDates)

function formatDates(element){
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]} `
}
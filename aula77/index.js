// JSON = (Notação de Objeto ~JavaScript) é um formato de intercâmbio de dados. Na maiorira das vezes é usado para troca de dados entre um servidor e um aplicativo da web.
// JSON files {key:values} OU [value1, value2, value3]

// JSON.stringify() = Converte de objeto JS para JSON string.

// JSON.parse() = Converte de JSON string para objeto JS.





// const nomes = ["Anakin", "Dookan", "Maul", "Sidious"];

// const jsonString = JSON.stringify(nomes);
// console.log(jsonString);

// const person = {
//     "nome":"Anakin",
//     "idade":22,
//     "éJedi?": true,
//     "hobbies": ["Praia", "Churrasco", "Babá"]    
// }


// const jsonString = JSON.stringify(person)

// console.log(jsonString)

// const people = [{
//     "nome":"Anakin",
//     "idade":22,
//     "éJedi?": true
// },
// {
//     "nome":"Maul",
//     "idade":32,
//     "éJedi?": false
// },
// {
//     "nome":"Sidious",
//     "idade":60,
//     "éJedi?": false
// },
// {
//     "nome":"Dookan",
//     "idade":77,
//     "éJedi?": false
// }]
// const jsonString = JSON.stringify(people)

// console.log(jsonString)



// const jsonPeople = `[{"nome":"Anakin","idade":22,"éJedi?": true},
//                    {"nome":"Maul","idade":32,"éJedi?": false},
//                    {"nome":"Sidious","idade":60,"éJedi?": false},
//                    {"nome":"Dookan","idade":77,"éJedi?": false}]`;

// const parseData = JSON.parse(jsonPeople)



// console.log(parseData)

fetch("person.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.nome)))
    .catch(error => console.error(error))


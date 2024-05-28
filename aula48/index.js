const frutas = [{nome: 'Maçã', cor: 'Vermelha', calorias: 95}, 
                {nome: 'Laranja', cor: 'Laranja', calorias: 45}, 
                {nome: 'Banana', cor: 'Amarelo', calorias: 105},
                {nome: 'Coco', cor: 'Wite', calorias: 159},
                {nome: 'Abacaxi', cor: 'Amarelo', calorias: 37}]


//console.log(frutas[2].nome)

//PUSH()

//frutas.push({nome:'Uva', cor:'Roxa', calorias: 62})

//SPLICE()

//frutas.splice(1, 2)// removendo os elementos de 1 a 2.
//console.log(frutas)

//FOR EACH()

// frutas.forEach(frutas => console.log(frutas.cor))

//MAP()

// const nomesFrutas = frutas.map(frutas => frutas.nome);

// console.log(nomesFrutas)

//FILTER()

// const frutasAmarelas = frutas.filter(frutas => frutas.cor === 'Amarelo');

// const caloriaBaixa = frutas.filter(frutas => frutas.calorias < 60)
// const caloriaAlta = frutas.filter(frutas => frutas.calorias > 60)


// console.log(caloriaBaixa)
// console.log(caloriaAlta)

//REDUCE:

const frutasMaior = frutas.reduce((max, frutas) => frutas.calorias > max.calorias ? frutas : max);
const frutasMenor = frutas.reduce((min, frutas) => frutas.calorias < min.calorias ? frutas : min);

console.log(frutasMaior)
console.log(frutasMenor)






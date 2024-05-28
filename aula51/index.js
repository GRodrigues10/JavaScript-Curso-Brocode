// Date objects = São objetos que contém valores que representam datas e horas. Esse objetos de data podem ser alterados e formatados para às nossas necessidades.

// Date Year(year, month, day, hour, minute, second, milisecond)

// const date = new Date(2024, 0, 1,2, 3, 4, 5);
// const date = new Date(4000000000000);//milisegundos

// console.log(date)

// const date = new Date();
// const year = date.getFullYear();
// console.log(year)

// const month = date.getMonth();
// console.log(month)

// const day = date.getDate(); //getDay - pega o dia da semana.
// console.log(day)

// const hour = date.getHours();
// console.log(hour);

// const minutes = date.getMinutes();
// console.log(minutes);

// const seconds = date.getSeconds();
// console.log(seconds);

// const dayOfWeek = date.getDay();
// console.log(dayOfWeek);


// const date = new Date();

// date.setFullYear(2025);//Mudando o ano.
// date.setMonth(5);//Mudando o mês.

// date.setDate(1);//Mudando o dia.
// date.setHours(3);//Mudando a hora.
// date.setMinutes(6);//Mudando os minutos.
// date.setSeconds(7);//Mudando os segundos
// console.log(date);


const date1 = new Date('2023-12-31');
const date2 = new Date('2024-01-01');

if(date2 > date1){
    console.log('Feliz Ano Novo!')
}





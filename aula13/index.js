// SWITCH = Pode ser um substituto eficiente para o de muitas outras instruções if.

// let day = 1;

// switch(day){
//     case 1:
//         console.log("Segunda-Feira");
//         break;
    
//     case 2:
//         console.log("Terça-Feira");
//         break;


//     case 3:
//         console.log("Quarta-Feira");
//         break;


//     case 4:
//         console.log("Quinta-Feira");
//         break;



//     case 5:
//         console.log("Sexta-Feira");
//         break;


//     case 6:
//         console.log("Sábado");
//         break;

//     case 7:
//         console.log("Domingo");
//         break;


//     default:
//         console.log(`${day} não é um dia válido!`)


// }


let testScore = 92;
let letterGrade;


switch(true){
    case testScore >= 90:
        letterGrade = 'A';
        break;


    case testScore >= 80:
        letterGrade = 'B';
        break;


    case testScore >= 70:
        letterGrade = 'C';
        break;


    case testScore >= 60:
        letterGrade = 'D';
        break;

        default:
            letterGrade = 'F';
            break

}

console.log(letterGrade)
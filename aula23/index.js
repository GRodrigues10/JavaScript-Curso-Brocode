//Escopo de variável: O escopa da vairável é onde uma vairável é reconhecida e acessível (local vs global)


//A variável local tem preferência em relação a global
let x = 0;

function1();
function function1(){
    let x = 1;
    console.log(x);
}


function function2(){
    let x = 2;
    console.log(x);

}

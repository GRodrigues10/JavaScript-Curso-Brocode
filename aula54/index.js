//console.time() = É uma ferramenta que permite medir o tempo que uma seção de código ou processo leva para ser executada. É ótimo para identificar gargalos de desempenho para iniciar o método de tempo que você deseja.

//console.time("label");
//console.timeEnd("label");





// console.time('Test')

// for(let i = 0; i < 100000000; i++){

//     //Faça algum código aqui.

// }

// console.timeEnd('Test')



function loadData(){
    console.time('loadData');

    for(let i = 0; i < 1000000000; i++){

        //Finjindo carregar alguns dados.

    }
    console.timeEnd('loadData');
}

function processData(){

    console.time('processData');
    for(let i = 0; i < 1000000; i++){
        //Finjindo processar alguns dados.
    }
    console.timeEnd('processData');
}

loadData();
processData()



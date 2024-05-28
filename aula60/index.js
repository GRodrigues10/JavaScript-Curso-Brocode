//Síncrono = É o código que executa linha por linha consecutivamente de maneira sequencial. O código síncrono espera a conclusão de uma operação.

//Assíncrono = Permite que múltiplas operações executadas simultâneamente sem esperar. O código assíncrono não bloqueia o fluxo de execução e permite que o programa continue(I/O operations, solicitação de rede, busca de dados). 
//Tratado com: retorno de chamadas(callbacks), promessas(promisses) e sincronização(Async)/espera(Await).

function func1(callback){
    setTimeout(()=> {console.log('Tarefa 1'); callback()}, 3000);
}

function func2(){
    //Síncrono
console.log('Tarefa 2');
console.log('Tarefa 3');
console.log('Tarefa 4');

}

func1(func2);






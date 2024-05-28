// callback Hell = É uma situação em JavaScript onde os retornos de chamadas são aninhados dentro de outros retornos de chamadas, a ponto de ser difícil de ler. É um padrão antigo para lidar com funções assíncronas. Use promisses + async/await para evitar callback hell.


function tarefa1(callback){
    setTimeout(() => {
        console.log('Tarefa 1 completa!')
        callback();
    }, 2000 )
    
}   
 

function tarefa2(callback){
    setTimeout(() => {
        console.log('Tarefa 2 completa!')
        callback();
    }, 1000 )
}

function tarefa3(callback){
    setTimeout(() => {
        console.log('Tarefa 3 completa!')
        callback();
    }, 3000 )
}


function tarefa4(callback){
    setTimeout(() => {
        console.log('Tarefa 4 completa!')
        callback();
    }, 1500 )
}

tarefa1(()=>{
    tarefa2(()=>{
        tarefa3(()=>{
            tarefa4(()=>console.log('Todas as tarefas foram completadas!'))
        })
    })
});


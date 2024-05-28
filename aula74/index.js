// Promisse = É um objeto que gerência operações assíncronas, como consultar bancos de dados buscando um arquivo, reunindo recursos. Você pode envolver um objeto de promessa em torno de algum código assíncrono. 'Eu prometo retornar um valor'
//PENDENTE -> RESOLVIDO OU REJEITADO
// new Promisse((resolver, rejeitar) => {código assíncrono});

//FAÇA ESSAS TAREFAS EM ORDEM:

//1. Levar o cachorro para passear.
//2. Limpar a cozinha.
//3. Levar o lixo para fora.

function passearCachorro(){
    return new Promise((resolver, rejeitar) =>{
        setTimeout(() => {

            const cachorroPasseou = false;

            if(cachorroPasseou){
                resolver('Você passeou com o cachorro.🐕');
            }else{
                rejeitar('Você não levou o cachorro para passear!');
            }

            
            
        }, 500);
    });

}


function limparCozinha(){
    return new Promise((resolver, rejeitar) =>{
        
        setTimeout(() => {
            const limpouCozinha = true;
            if(limpouCozinha){
                resolver('Você limpou a cozinha.👍');
            }else{
                rejeitar('Você não limpou a cozinha!');
            }
            
        }, 500);
    });
    

}

function levarLixo(){
    return new Promise((resolver, rejeitar) =>{

        setTimeout(() => {
            const levouLixo = true;
            if(levouLixo){
            resolver('Você retirou o lixo.♻');
            }
            else{
                rejeitar('Você não retirou o lixo!')
            }
            
        }, 500);
    });
}
9
passearCachorro().then(valor => {console.log(valor); return limparCozinha()}).then(valor=>{console.log(valor); return levarLixo()}).then(valor=>{(console.log(valor)); console.log('Tarefas Finalizadas!')}).catch(error => console.error(error));
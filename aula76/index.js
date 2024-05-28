// Async/Await = Async = Faz uma função retornar uma promessa(promisse).
//               Await = Faz uma função esperar por uma promessa(promisse).


//  Usando essas plavras chaves juntas, elas permitem que você escreva um código assíncrono de maneira sídroma.

function passearCachorro(){
    return new Promise((resolver, rejeitar) =>{
        setTimeout(() => {

            const cachorroPasseou = true;

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


async function tarefas(){
    try{
        const passearCachorroResultado = await passearCachorro();
    console.log(passearCachorroResultado);

    const limparCozinhaResultado = await limparCozinha();
    console.log(limparCozinhaResultado);

    const levarLixoResultado = await levarLixo();
    console.log(levarLixoResultado);

    console.log('Você terminou as tarefas!');
    }
    catch(error){
        console.error(error)
    }
    
}

tarefas();
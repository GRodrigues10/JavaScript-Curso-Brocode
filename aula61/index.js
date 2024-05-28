// Error = Erro é um objeto que é criado para representar um problema que ocorre. Ocorrem frequentemente quando aceitamos entrades de usuários ou estabelecemos uma conexão.

//try{ } = Podemos incluir qualquer código que possa causar um erro.
//catch{ } = Captura e trata os erros o erros gerados pelo try.
//finnaly{ } = (Opcional) Sempre é executado. É usado para fechar arquivos, conexões ou liberando recursos.



// try{
//     console.log(x);
//     //PROBLEMAS DE REDE
//     //PROMETEM REJEIÇÃO
//     //ERRO DE SEGURANÇA
// }
// catch(error){
//     console.error(error)
// }

// finally{
//     //FECHAR ARQUIVOS
//     //FECHAR CONEXÕES
//     //LIBERAR RECURSOS
//     console.log('Isso sempre executará')
// }


// console.log('Você chegou no final')


try{
    const dividendo = Number(window.prompt('Entre com o dividendo'));
    const divisor = Number(window.prompt('Entre com o divisor'));


    if(divisor == 0){
        throw new Error('Você não pode dividir por 0.');//Throw new Error() - é uma instrução em JavaScript usada para lançar um erro manualmente. Isso é útil quando você quer indicar que algo deu errado em sua função ou código e deseja interromper a execução normal do programa.

 
    }

    if(isNaN(dividendo) || isNaN(divisor)){
        throw new Error('Os valores não são números!');
    }
    const result = dividendo / divisor;

    console.log(result);
}
catch(error){
    console.error(error)
}

console.log('Você chegou ao fim!');
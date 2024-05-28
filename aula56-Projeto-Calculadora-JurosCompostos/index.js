function calcular() {
    const montanteTotal = document.getElementById('montante-total');
    const principalInput = document.getElementById('principal');
    const taxaInput = document.getElementById('rate');
    const anoInput = document.getElementById('anos');

    let principal = parseFloat(principalInput.value); 
    let taxa = parseFloat(taxaInput.value) / 100;  // Convertendo a taxa para decimal
    let ano = parseFloat(anoInput.value); 

    // Verificando se os valores são válidos
    if (isNaN(principal) || isNaN(taxa) || isNaN(ano)) {
        window.alert('Por favor, insira valores válidos.');
        return;
    }
    
    if(principal < 0){
        principal = 0;
    }
    if(taxa < 0){
        taxa = 0;
    }

    if(ano  < 0){
        ano = 0;
    }

    // Fórmula correta para juros compostos
    const resultado = principal * Math.pow((1 + taxa), ano);

    // Formatando o resultado para exibir como moeda
    montanteTotal.textContent = resultado.toLocaleString(undefined, {style: "currency", currency:"BRL"});
}
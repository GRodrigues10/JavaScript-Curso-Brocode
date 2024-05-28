// Rolo de Dados

function rolaDado(){
    
    const  numeroDoDado = document.getElementById("numeroDoDado").value;

    const resultadoDado = document.getElementById("resultadoDado");

    const imagensDado = document.getElementById("imagensDado");

    const valores= [];
    const imagens = [];

    for(let i = 0; i < numeroDoDado; i++){
        const valor = Math.floor(Math.random() * 6) + 1;
        valores.push(valor);
        imagens.push(`<img src="imagens/${valor}.png" alt = Dado = ${valor}>`);
    }
    resultadoDado.textContent = `Dado: ${valores.join(", ")}`
    imagensDado.innerHTML = imagens.join('');
}
//Checkbox - propriedade que determina o estado de verificado de uma caixa de seleção HTML ou elemento de botão de opção.

const myCheckBox = document.getElementById("myCheckBox");

const visaBtn = document.getElementById("visaBtn")

const masterCardBtn = document.getElementById('masterCardBtn')

const payPalBtn = document.getElementById("payPalBtn")

const mySubmit = document.getElementById("mySubmit")

const subResult = document.getElementById("subResult")

const paymentResult = document.getElementById("paymentResult")

mySubmit.onclick = function(){

    if(myCheckBox.checked){

        subResult.innerHTML = `Você está inscrito!`

    }

    else{
        subResult.innerHTML = `Você não está inscrito!`
    }

    if(visaBtn.checked){
        paymentResult.textContent = "Você está pagando com Visa."
    }

    else if(masterCardBtn.checked){
        paymentResult.textContent = "Você está pagando com MasterCard."
    }


    else if(payPalBtn.checked){
        paymentResult.textContent = "Você está pagando com Paypal."
    }

    else{
        paymentResult.textContent = "Você tem que selecionar um tipo de pagamento."
    }
}



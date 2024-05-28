// cookie = É um pequeno arquivo de texto armazenado no seu computador. É usado para lembrar informações sobre o usuário, os dados dentro de um cookie são salvos em pares de nome e valor.

// console.log(navigator.cookieEnabled);

//  document.cookie = 'firstName=Anakin; expires=Sun, 1 January 12:00:00 UTC; path=/';

//  document.cookie = 'lastName=Skywalker; expires=Sun, 1 January 12:00:00 UTC; path=/';
//  console.log(document.cookie);


// setCookie("firstName", "Anakin", 365)
// setCookie("lastName", "Skywalker", 365)

// console.log(getCookie("firstName"))



const firstText = document.querySelector('#firstText');
const lastText = document.querySelector('#lastText');
const submitBtn = document.querySelector('#submitBtn');
const cookiesBtn = document.querySelector('#cookiesBtn');

submitBtn.addEventListener('click', ()=>{
    setCookie('firstName', firstText.value, 365);
    setCookie('lastName', lastText.value, 365);
})

cookiesBtn.addEventListener('click', ()=>{
   firstText.value = getCookie('firstName');
   lastText.value = getCookie('lastName');
})

function setCookie(nome, valor, diasDeVida) {
    const date = new Date();
    date.setTime(date.getTime() + (diasDeVida * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + date.toUTCString();
    document.cookie = `${nome}=${valor}; ${expires}; path=/`;
}

function deleteCookie(nome) {
    document.cookie = nome + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
}

function getCookie(nome){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split('; ');
    let result = null;

    cArray.forEach((element) =>{
        if(element.indexOf(nome) === 0){
            result = element.substring(nome.length + 1);
        }
    })
    return result;
}


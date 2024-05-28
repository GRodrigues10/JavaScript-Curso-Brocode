// fetch() - É uma função usada para fazer solicitações HTTP para buscar recursos, incluindo, mas não limitando a(dados de estilo JSON, imagens, arquivos).
//Simplifica a busca assíncrona de dados, é usada para interagir com APIs para recuperar dados de forma assíncrona pela web.
//fetch(url, {options})
//fetch(url, {method: "POST"})

// fetch("http://pokeapi.co/api/v2/pokemon/bulbasaur")
// .then(response => {
//     if(!response.ok){
//         throw new Error('Não foi possível buscar o recurso!:(')
//     }
//     return response.json()
// })
// .then(data => console.log(data.name))
// .catch(error => console.error(error));

fetchData()

async function fetchData(){
    try{

        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();


        const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Não foi possível localizar o recurso!");
        }
        const data = await response.json();
        // console.log(data);]
        const pokemonSprite = data.sprites.front_default;
        const imgElement= document.getElementById('pokemonSprite');
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block'
    }
    catch(error){
        console.error(error)
    }
}
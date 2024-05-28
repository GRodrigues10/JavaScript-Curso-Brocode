//DOM = DOCUMENT OBJECT MODEL (Modelo de Objeto de Documento).

//É um objeto Javascript que representa a página que você vê no navegador da web e fornece uma API para interagir com ela. O navegador da Web constrói o DOM quando carrega um documento HTML e estrutura todos os elementos em uma representação semelhante a uma árvore. Podemos  acessar o DOM dinamicamente após o carregamento da página e alterar a estrutura do conteúdo e o estilo de uma página web.

document.title = 'Meu Site'; //Alterando o nome do site pelo Javascript.
document.body.style.backgroundColor = 'brown'//Alterando a cor do site pelo Javascript.

const userName = 'Gabriel da Costa Rodrigues';

const mensagemBemVindo = document.getElementById('bemvindo-msg');

mensagemBemVindo.textContent += userName === '' ? ' Convidado': ` ${userName}`;

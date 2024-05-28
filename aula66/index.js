// ---------- EXEMPLO 1 <h1> ----------

// PASSO 1: CRIAR O ELEMENTO:
const newH1 = document.createElement('h1');

//PASSO 2: ADICIONAR ATRIBUTOS/PROPRIEDADES:
newH1.textContent = 'Eu gosto de pizza!'
newH1.id = 'myH1';
newH1.style.color = 'black';
newH1.style.textShadow = '1px 1px 1px white';
newH1.style.textAlign = 'center'
//PASSO 3: ACRESCENTE ESSE ELEMENTO AO DOM:
//document.body.append(newH1);//Este elemento é o último filho!

//document.body.prepend(newH1);//Este elemento é o primeiro filho!
// document.getElementById('box1').append(newH1);colocando o titulo dentro da caixa(depois do <p>).
//document.getElementById('box2').prepend(newH1); colocando o titulo dentro da caixa(antes do <p>).

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2 )//Inserindo um elemento antes da caixa 2.


// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[3]);//É mesma coisa do de cima, só que eu acesso apenas por uma única classe, como se os ids não existissem. Dessa maneira uso essa espécie de índice para acessar as caixas.

//REMOVER UM ELEMENTO HTML:
// document.body.removeChild(newH1);


 const newListItem = document.createElement('li');
 newListItem.textContent = 'Coco';
// document.getElementById('frutas').append(newListItem)


const ListItem = document.querySelectorAll('#frutas li');
document.getElementById('frutas').insertBefore(newListItem, ListItem[2])

// const laranja = document.getElementById('laranja');
// document.getElementById('frutas').insertBefore(newListItem, laranja)


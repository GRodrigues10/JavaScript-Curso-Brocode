// 2D array = É um array multidimensional que armazena uma matriz de dados em linhas e colunas. É útil em jogos como: Jogo da Velha, Xadrez, Sudoku ou qualquer jogo que você precise de uma matriz ou grade de dados para controlar espaços. Pode ser usado em planilhas como Execel e também para representar imagens. Uma imagem é uma matriz de pixels.


const matriz = [[1, 2, 3], 
                [4, 5, 6],
                [7, 8 ,9],
                ['*', 0, '#']];

// matriz[0][0] = 'X';
// matriz[0][1] = 'O';
// matriz[0][2] = 'X';

// matriz [1][0] = 'O';
// matriz [1][1] = 'X';
// matriz [1][2] = 'O';

// matriz [2][0] = 'X';
// matriz [2][1] = 'O';
// matriz [2][2] = 'X';





for(let linha of matriz){
    const linhaString = linha.join(' ');//Colocando espaço na matriz.
    console.log(linhaString);
}

const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'Imagens/Pac Man.jpeg' },
    { nome: 'Mario Bros', imagem: 'Imagens/Mario Bros.jpeg' },
    { nome: 'Pitfall', imagem: 'Imagens/PitFall.jpeg' },
    { nome: 'Enduro', imagem: 'Imagens/Enduro.jpeg' },
    { nome: 'Donkey Kong', imagem: 'Imagens/Donkey Cong.jpeg' },
    { nome: 'Galaxy', imagem: 'Imagens/Galaxy.jpg' },
    { nome: 'Tennis', imagem: 'Imagens/Tennis.jpeg' },
    { nome: 'Tetris', imagem: 'Imagens/Tetris.jpeg' },
    { nome: 'Street Fighter II', imagem: 'Imagens/Street.jpeg' }, 
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});
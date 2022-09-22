let editedPlayer = 0;
let activePlayer =0;

const players = [
    {
        name :'',
        symbol :'x'
    },
    {
        name:'',
        symbol :'o'
    },
];
const playerConfigOverlay = document.getElementById('configuration-overlay');
const backDropElement = document.getElementById('backdrop');
const formSubmitElement = document.querySelector('form');
const errorMessageElement = document.getElementById('error-msg');


// Access of Button
const editPlayer1btnElement = document.getElementById('edit-player-1-button');
const editPlayer2btnElement = document.getElementById('edit-player-2-button');
const cancelBtnElement = document.getElementById('cancel-config-btn');
const startNewGameElement = document.getElementById('start-game');
const activeGameBoard = document.getElementById('active-game');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameFieldElement = document.getElementById('game-board');
const activePlayerNameElement = document.getElementById('active-player-name');

 editPlayer1btnElement.addEventListener('click',openPlayerConfig);
 editPlayer2btnElement.addEventListener('click',openPlayerConfig);
 cancelBtnElement.addEventListener('click',closePlayerConfig);
 backDropElement.addEventListener('click',closePlayerConfig);
 startNewGameElement.addEventListener('click',startGameBtn);
 activeGameBoard.addEventListener('click',startGameBtn);
 formSubmitElement.addEventListener('submit',savePlayerConfig);

 gameFieldElement.addEventListener('click',selectGameField);

//  for( const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameField);
    
//  }







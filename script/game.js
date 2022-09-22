function startGameBtn(){

    if(players[0].name === '' || players[1].name === ''){
        alert('please Enter the name of players!');  
        return;
    }
    activeGameBoard.style.display = 'block';
}


function gameSwitch(event){
    if(activePlayer === 0){
        activePlayer = 1;
    }else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent  = players[activePlayer].name;
}
function selectGameField(event){
    console.log(event.target.tagName);
    if(event.target.tagName !== "LI"){
        return;
    }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    gameSwitch();
}
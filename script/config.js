function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlay.style.display ='block';
    backDropElement.style.display = 'block';
}
function closePlayerConfig(){
    playerConfigOverlay.style.display = 'none';
    backDropElement.style.display ='none';
    formSubmitElement.firstElementChild.classList.remove('error');
    errorMessageElement.textContent = '';
    formSubmitElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new  FormData(event.target);
    const enteredPlayerName = formData.get('username').trim(); // '   Sandeep   ' => 'sandeep'

    if(!enteredPlayerName){ // if(enteredPlayerName === '')
        event.target.firstElementChild.classList.add('error');
        errorMessageElement.textContent = 'please enter Valid Name';
        return;
    }

    const playerUpdatedElement = document.getElementById('player-' +editedPlayer+ '-data');
    playerUpdatedElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1 ].name = enteredPlayerName;
    closePlayerConfig();
}    
    
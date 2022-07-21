const welcomeMessage = document.getElementById('welcome-message');
const getStartedBtn = document.getElementById('get-started');

getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = 'none';
});

document.addEventListener ('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')
    for(let button of buttons) {
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'rock' || this.getAttribute('data-type') === 'paper'
            || this.getAttribute('data-type') === 'scissors' || this.getAttribute('data-type') === 'john-wick'
            || this.getAttribute('data-type') === 'chuck-norris') {
                let selection = this.getAttribute('data-type');
                runGame(selection)
                displayOpponentsChoice()
            } else if(this.getAttribute('data-type') === 'get-started'){
                
            }
        })
    }
});

function computerSelection() {
    let options = ['Rock', 'Paper', 'Scissors']
    let i = 0
    let randomSelection = options[Math.floor(Math.random() * options.length)];
    console.log(randomSelection)
    return randomSelection;
};

function runGame(selection) {
    if(selection === 'rock'){
        displayRockOutcome();
    }
};

function displayOpponentsChoice() {
    let opponentSelectionOutput = document.getElementById('opponents-selection')
    let opponentPlayed = computerSelection()
    opponentSelectionOutput.innerHTML = `<p>Opponent Played: ${opponentPlayed}</p>`
}

function displayRockOutcome() {
    alert('booyah!');
};
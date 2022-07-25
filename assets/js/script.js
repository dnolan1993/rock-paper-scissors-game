const welcomeMessage = document.getElementById('welcome-message');
const getStartedBtn = document.getElementById('get-started');

getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = 'none';
});

gamePlayClick()

function gamePlayClick() {
    document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'rock' || this.getAttribute('data-type') === 'paper' ||
                this.getAttribute('data-type') === 'scissors' || this.getAttribute('data-type') === 'john-wick' ||
                this.getAttribute('data-type') === 'chuck-norris') {
                let selection = this.getAttribute('data-type');
                runGame(selection)
                displayTurnsRemaining()
            } else if (this.getAttribute('data-type') === 'get-started') {

            }
        })
    }
});
};



const options = ['Rock', 'Paper', 'Scissors']

function computerSelection() {
    let randomSelection = options[Math.floor(Math.random() * options.length)];
    return randomSelection;
};

function runGame(selection) {
    if (selection === 'rock') {
        displayOpponentsChoice()
        displayRockOutcome()
    } else if (selection === 'paper') {
        displayOpponentsChoice()
        displayPaperOutcome()
    } else if (selection === 'scissors') {
        displayOpponentsChoice()
        displayScissorsOutcome()
    } else if (selection === 'john-wick') {
        displayOpponentsChoice()
        displayJohnWickOutcome()
    }  else if (selection === 'chuck-norris') {
        displayOpponentsChoice()
        displayChuckNorrisOutcome()
    }
    };
    
    displayMyScore()

    function displayRockOutcome() {
        if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Rock</p>') {
            displayResult().innerHTML = "<p data-type='tie' id = 'result-needed'>It's a tie!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Paper</p>') {
            displayResult().innerHTML = "<p data-type='loss' id = 'result-needed'>You Lose!</p><p>Paper beats Rock!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Scissors</p>') {
            displayResult().innerHTML = "<p data-type='win' id = 'result-needed'>You Win!</p><p>Rock beats Scissors!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: John Wick</p>') {
            displayResult().innerHTML = "<p data-type='win' id = 'result-needed'>You Win!</p><p>Rock breaks John Wicks pencil! John Wick tears Paper!.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Chuck Norris</p>') {
            displayResult().innerHTML = "<p data-type='loss' id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
        }
    };

    function displayPaperOutcome() {
        if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Rock</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Paper beats Rock!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Paper</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Scissors</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Scissors beats Paper!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: John Wick</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>John Wick tears Paper!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Chuck Norris</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
        }
    };

    function displayScissorsOutcome() {
        if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Rock</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Rock beats Scissors!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Paper</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Scissors beats Paper!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Scissors</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: John Wick</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>John Wick doesn't play with Scissors!.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Chuck Norris</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
        }
    };

    function displayJohnWickOutcome() {
        if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Rock</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Rock breaks John Wicks pencil!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Paper</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose</p><p>John Wick tears Paper!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Scissors</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>John Wick doesn't play with Scissors!</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: John Wick</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p><p>Because only John Wick can contant with John Wick.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Chuck Norris</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because John Wick is a man of focus.</p>";
        }
    };

    function displayChuckNorrisOutcome() {
        if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Rock</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Paper</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Scissors</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: John Wick</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because John Wick is a man of focus.</p>";
        } else if (document.getElementById('opponents-selection').innerHTML === '<p>Opponent Played: Chuck Norris</p>') {
            displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
        }
    };
 
    function displayOpponentsChoice() {
        let opponentSelectionOutput = document.getElementById('opponents-selection')
        let opponentPlayed = computerSelection()
        opponentSelectionOutput.innerHTML = `<p>Opponent Played: ${opponentPlayed}</p>`
        return opponentSelectionOutput;
    }

    function displayResult() {
        let gameResultDisplay = document.getElementById('overall-outcome');
       /* gameResultDisplay.innerHTML = ''; */
        return gameResultDisplay;
    }

    function displayTurnsRemaining() {
        let turnsRemaining = parseInt(document.getElementById("remaining-turns").innerText); 
        document.getElementById("remaining-turns").innerText = --turnsRemaining;
    };
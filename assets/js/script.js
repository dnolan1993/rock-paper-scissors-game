//Global constant declarations
const welcomeMessage = document.getElementById("welcome-message");
const getStartedBtn = document.getElementById("get-started");
const options = ["Rock", "Paper", "Scissors"];

//Global variable declarations
let turnsRemaining = parseInt(document.getElementById("remaining-turns").innerText);
turnsRemaining = 10;
let yourCurrentScore = parseInt(document.getElementById("your-current-score").innerText);
yourCurrentScore = 0;
let opponentsCurrentScore = parseInt(document.getElementById("opponents-current-score").innerText);
opponentsCurrentScore = 0;
let opponentSelectionOutput = document.getElementById("opponents-selection");

//Event listener declarations
getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = "none";
});

//Function declarations
//Wait for the DOM to finish loading before running the game and its welcome message
//Get character buttons and assigns event listeners to them
function gamePlayClick() {
    document.addEventListener("DOMContentLoaded", function () {
        let buttons = document.getElementsByTagName("button");
        for (let button of buttons) {
            button.addEventListener("click", function () {
                if (this.getAttribute("data-role") === "character") {
                    let selection = this.getAttribute("data-type");
                    runGame(selection);
                    displayTurnsRemaining();
                    displayYourScore();
                    displayOpponentScore();
                    displayHiddenChoices();
                    endOfGame();
                    playAgain();
                } else if (this.getAttribute("data-type") === "get-started") {

                }
            });
        }
    });
}

//Function for opponents randomly selected play
function computerSelection() {
    let randomSelection = options[Math.floor(Math.random() * options.length)];
    return randomSelection;
}

//Function to select correct outcome display function to run
function runGame(selection) {
    if (selection === "rock") {
        displayOpponentsChoice();
        displayRockOutcome();
    } else if (selection === "paper") {
        displayOpponentsChoice();
        displayPaperOutcome();
    } else if (selection === "scissors") {
        displayOpponentsChoice();
        displayScissorsOutcome();
    } else if (selection === "john-wick") {
        displayOpponentsChoice();
        displayJohnWickOutcome();
    } else if (selection === "chuck-norris") {
        displayOpponentsChoice();
        displayChuckNorrisOutcome();
    }
}

//Outcome function to display outcome if user selects rock
function displayRockOutcome() {
    if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Rock</p>") {
        displayResult().innerHTML = "<p data-type='tie' id = 'result-needed'>It's a tie!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Paper</p>") {
        displayResult().innerHTML = "<p data-type='loss' id = 'result-needed'>You Lose!</p><p>Paper beats Rock!</p>";
    } else if (document.getElementById('opponents-selection').innerHTML === "<p>Opponent Played: Scissors</p>") {
        displayResult().innerHTML = "<p data-type='win' id = 'result-needed'>You Win!</p><p>Rock beats Scissors!</p>";
    } else if (document.getElementById('opponents-selection').innerHTML === "<p>Opponent Played: John Wick</p>") {
        displayResult().innerHTML = "<p data-type='win' id = 'result-needed'>You Win!</p><p>Rock breaks John Wicks pencil! John Wick tears Paper!.</p>";
    } else if (document.getElementById('opponents-selection').innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        displayResult().innerHTML = "<p data-type='loss' id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
    }
}

//Outcome function to display outcome if user selects paper
function displayPaperOutcome() {
    if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Rock</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Paper beats Rock!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Paper</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Scissors</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Scissors beats Paper!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: John Wick</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>John Wick tears Paper!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
    }
}

//Outcome function to display outcome if user selects scissors
function displayScissorsOutcome() {
    if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Rock</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Rock beats Scissors!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Paper</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Scissors beats Paper!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Scissors</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: John Wick</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>John Wick doesn't play with Scissors!.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because Chuck Norris.</p>";
    }
}

//Outcome function to display outcome if user selects john wick
function displayJohnWickOutcome() {
    if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Rock</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Rock breaks John Wicks pencil!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Paper</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose</p><p>John Wick tears Paper!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Scissors</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>John Wick doesn't play with Scissors!</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: John Wick</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>It's a tie!</p><p>Because only John Wick can content with John Wick.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because John Wick is a man of focus.</p>";
    }
}

//Outcome function to display outcome if user selects chuck norris
function displayChuckNorrisOutcome() {
    if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Rock</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Paper</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Scissors</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Win!</p><p>Because Chuck Norris.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: John Wick</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Because John Wick is a man of focus.</p>";
    } else if (document.getElementById("opponents-selection").innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        displayResult().innerHTML = "<p id = 'result-needed'>You Lose!</p><p>Two Chuck Norris' has created a second Big Bang!</p>";
    }
}

//Outcome function to display opponents chosen character
function displayOpponentsChoice() {
    let opponentPlayed = computerSelection();
    opponentSelectionOutput.innerHTML = `<p>Opponent Played: ${opponentPlayed}</p>`;
    return opponentSelectionOutput;
}

//Function to display result message with outcome of round
function displayResult() {
    let gameResultDisplay = document.getElementById("overall-outcome");
    return gameResultDisplay;
}


//Function for counter to display turns remaining in the game
function displayTurnsRemaining() {
    document.getElementById("remaining-turns").innerText = --turnsRemaining;
}

//Function for counter to display your score in the game
function displayYourScore() {
    let resultNeeded = document.getElementById("result-needed").innerText;
    if (resultNeeded === "You Win!") {
        document.getElementById("your-current-score").innerText = ++yourCurrentScore;
    }
}

//Function for counter to display opponents score in the game
function displayOpponentScore() {
    let resultNeeded = document.getElementById("result-needed").innerText;
    if (resultNeeded === "You Lose!") {
        document.getElementById("opponents-current-score").innerText = ++opponentsCurrentScore;
    }
}

//Function to make hidden icons visible to user at game mid-point
function displayHiddenChoices() {
    let hiddenIcons = document.getElementById("hidden-buttons");
    if (document.getElementById("remaining-turns").innerText <= 5) {
        hiddenIcons.style.visibility = "visible";
        options.push("John Wick", "Chuck Norris");
    }
}

//Function to display end of game message displaying overall outcome of game
function endOfGame() {
    let endOfGameMessage = document.getElementById("end-of-game-message");
    let yourFinalScore = parseInt(document.getElementById("your-current-score").innerText);
    let opponentsFinalScore = parseInt(document.getElementById("opponents-current-score").innerText);
    let finalScores = document.getElementById("final-scores");
    let finalResult = document.getElementById("final-result");
    if (document.getElementById("remaining-turns").innerText <= 0) {
        endOfGameMessage.style.display = "inherit";
        finalScores.innerText = `Your Score was ${yourFinalScore} and your opponent scored ${opponentsFinalScore}`;
        if (yourFinalScore > opponentsFinalScore) {
            finalResult.innerText = "Congratulations! You've Won!";
        } else if (yourFinalScore < opponentsFinalScore) {
            finalResult.innerText = "You have lost!";
        } else if (yourFinalScore === opponentsFinalScore) {
            finalResult.innerText = "It's a Tie!";
        }
    }
}

//Function for reseting game after 'Play Again!' button is clicked
function playAgain() {
    let playAgainBtn = document.getElementById("play-again");
    playAgainBtn.addEventListener("click", function () {
        document.getElementById("overall-outcome").innerText = "";
        document.getElementById("opponents-selection").innerText = "";
        document.getElementById("end-of-game-message").style.display = "none";
        document.getElementById("hidden-buttons").style.visibility = "hidden";
        options.splice(3, 2);  
        turnsRemaining = 10;
        document.getElementById("remaining-turns").innerText = turnsRemaining;
        yourCurrentScore = 0;
        document.getElementById("your-current-score").innerText = yourCurrentScore;
        opponentsCurrentScore = 0;
        document.getElementById("opponents-current-score").innerText = opponentsCurrentScore;
    });
}

//Function calls
gamePlayClick();
//Global constant declarations
const welcomeMessage = document.getElementById("welcome-message");
const getStartedBtn = document.getElementById("get-started");
const options = ["Rock", "Paper", "Scissors"];

//Global variable declarations
let turnsRemaining = 10;
let yourCurrentScore = 0;
let opponentsCurrentScore = 0;
let opponentSelectionOutput = document.getElementById("opponents-selection");
let opponentsChoice = document.getElementById("opponents-selection");
let winLoseOrTie;
let winLoseOrTieMessage;
let characterSpecificMessage;
let overallOutcome = document.getElementById("overall-outcome");



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
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "tie";
        winLoseOrTieMessage = "It's a tie!";
        characterSpecificMessage = "";
        displayResult()
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Paper</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Paper beats Rock!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Scissors</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Rock beats Scissors!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: John Wick</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Rock breaks John Wicks pencil!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
}
}

//Outcome function to display outcome if user selects paper
function displayPaperOutcome() {
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Paper beats Rock!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Paper</p>") {
        winLoseOrTie = "tie";
        winLoseOrTieMessage = "It's a tie!";
        characterSpecificMessage = "";
        displayResult()
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Scissors</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Scissors beats Paper!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: John Wick</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "John Wick tears Paper!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
    }
}

//Outcome function to display outcome if user selects scissors
function displayScissorsOutcome() {
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Rock beats Scissors!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Paper</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Scissors beats Paper!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Scissors</p>") {
        winLoseOrTie = "tie";
        winLoseOrTieMessage = "It's a tie!";
        characterSpecificMessage = "";
        displayResult()
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: John Wick</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "John Wick doesn't play with Scissors!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
    }
}

//Outcome function to display outcome if user selects john wick
function displayJohnWickOutcome() {
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Rock breaks John Wicks pencil!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Paper</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "John Wick tears Paper!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Scissors</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "John Wick doesn't play with Scissors!";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: John Wick</p>") {
        winLoseOrTie = "tie";
        winLoseOrTieMessage = "It's a tie!";
        characterSpecificMessage = "Because only John Wick can content with John Wick.";
        displayResult()
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Because John Wick is a man of focus.";
        displayResult();
    }
}

//Outcome function to display outcome if user selects chuck norris
function displayChuckNorrisOutcome() {
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Paper</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Scissors</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Because Chuck Norris.";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: John Wick</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Because John Wick is a man of focus.";
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "loss";
        winLoseOrTieMessage = "You Lose!";
        characterSpecificMessage = "Two Chuck Norris' has created a second Big Bang!";
        displayResult();
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
    overallOutcome.innerHTML = `
    <p data-type='${winLoseOrTie}' id = 'result-needed'>
    ${winLoseOrTieMessage}</p><p>${characterSpecificMessage}</p>`;

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
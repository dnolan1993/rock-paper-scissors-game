// Global constant declarations
const welcomeMessage = document.getElementById("welcome-message");
const getStartedBtn = document.getElementById("get-started");
const options = ["Rock", "Paper", "Scissors"];

// Global variable declarations
let turnsRemaining = 10;
let yourCurrentScore = 0;
let opponentsCurrentScore = 0;
let opponentSelectionOutput = document.getElementById("opponents-selection");
let opponentsChoice = document.getElementById("opponents-selection");
let winLoseOrTie;
let winLoseOrTieMessage;
let characterSpecificMessage;
let overallOutcome = document.getElementById("overall-outcome");



// Event listener declarations
// Get get-started button and assign event listener to it
// Change display value of welcome-message when clicked
getStartedBtn.addEventListener("click", function () {
    welcomeMessage.style.display = "none";
});

// Wait for the DOM to finish loading before running the game and its welcome message
// Get character buttons and assigns event listeners to them
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
            }
        });
    }
});

// Creates a random number assignd to index of options
// Creates a random choice for the computer to play
function computerSelection() {
    let randomSelection = options[Math.floor(Math.random() * options.length)];
    return randomSelection;
}

// Selects to correct output when button is clicked
// Calls the opponentsChoice function based on outcome
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

// Selects response to computers selection based on 'Rock' being clicked
function displayRockOutcome() {
    if (opponentsChoice.innerHTML === "<p>Opponent Played: Rock</p>") {
        winLoseOrTie = "tie";
        winLoseOrTieMessage = "It's a tie!";
        characterSpecificMessage = "";
        displayResult();
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

// Selects response to computers selection based on 'Paper' being clicked
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
        displayResult();
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

// Selects response to computers selection based on 'Scissors' being clicked
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
        displayResult();
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

// Selects response to computers selection based on 'John Wick' being clicked
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
        displayResult();
    } else if (opponentsChoice.innerHTML === "<p>Opponent Played: Chuck Norris</p>") {
        winLoseOrTie = "win";
        winLoseOrTieMessage = "You Win!";
        characterSpecificMessage = "Because John Wick is a man of focus.";
        displayResult();
    }
}

// Selects response to computers selection based on 'Chuck Norris' being clicked
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

// Displays outcome for opponent 
// Calls computers random selection
function displayOpponentsChoice() {
    let opponentPlayed = computerSelection();
    opponentSelectionOutput.innerHTML = `<p>Opponent Played: ${opponentPlayed}</p>`;
    return opponentSelectionOutput;
}

// Displays result message with outcome of round
// Based on opponent and user selection
function displayResult() {
    overallOutcome.innerHTML = `
    <p data-type='${winLoseOrTie}' id = 'result-needed'>
    ${winLoseOrTieMessage}</p><p>${characterSpecificMessage}</p>`;

}


// Displays turns remaining counter in the game
// Decreases counter value by 1 each time user plays a character
function displayTurnsRemaining() {
    document.getElementById("remaining-turns").innerText = --turnsRemaining;
}

// Displays your score counter in the game
// Increases counter value by 1 each time user wins a round
function displayYourScore() {
    let resultNeeded = document.getElementById("result-needed").innerText;
    if (resultNeeded === "You Win!") {
        document.getElementById("your-current-score").innerText = ++yourCurrentScore;
    }
}

// Displays opponents score counter in the game
// Increases counter value by 1 each time user loses a round
function displayOpponentScore() {
    let resultNeeded = document.getElementById("result-needed").innerText;
    if (resultNeeded === "You Lose!") {
        document.getElementById("opponents-current-score").innerText = ++opponentsCurrentScore;
    }
}

// Changes hidden-buttons visibility value at game mid point
// Adds 2 playable icons to game when turns remaining = 5
function displayHiddenChoices() {
    let hiddenIcons = document.getElementById("hidden-buttons");
    if (document.getElementById("remaining-turns").innerText <= 5) {
        hiddenIcons.style.visibility = "visible";
        options.push("John Wick", "Chuck Norris");
    }
}

// Displays end of game message displaying overall outcome of game
// Changes end of game message visibility value at end of game
// Game ends when turns remaining = 0
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

// Get play-again button and assign event listener to it
// Change display value of end of game message when clicked
// Resets game page when 'Play Again!' button is clicked
// Resets counters values to original values
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
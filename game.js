// Get all necessary DOM nodes
const buttons = Array.from(document.querySelectorAll('input'));
const message = document.querySelector(".message");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const selectionPlayer = document.querySelector('.player-selection');
const selectionComputer = document.querySelector('.computer-selection');

// Initialize scores
let player = 0
let computer = 0


buttons.forEach((button) =>
    button.addEventListener('click', () => {
        if (player >= 5 || computer >= 5) {
            return;
        }
        game(button.value);
    })
    );

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 3)
    let guess = ''

    switch (computerNumber) {
        case 0:
            guess = 'Rock';
            break;
        case 1:
            guess = 'Paper';
            break;
        case 2:
            guess = 'Scissors';
            break;
        default:
            break;
    }
    return guess;
}

function playGameRound(playerSelection, computerSelection) {
    let log = "";

    if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper') {
            log = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            log = 'You Win! Rock beats Scissors';
        } else {
            log = "It's a tie"
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            log = 'You Lose! Scissors cuts Paper';
        } else if (computerSelection === 'Rock') {
            log = 'You Win! Paper covers Rock'
        } else {
            log = "It's a tie";
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            log = 'You Lose! Rock beats Scissors'
        } else if (computerSelection === 'Paper') {
            log = 'You Win! Scissors cuts Paper'
        } else {
            log = "It's a tie"
        }
    }

    return log;
}

function createParagWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}


function game(playerSelect) {
    let playerSelection = capitalize(playerSelect);
    let computerSelection = getComputerChoice();

    let roundResult = playGameRound(playerSelection, computerSelection);

    if (roundResult.search('You Win!') > -1) {
        player++;
    } else if (roundResult.search('You Lose!') > -1) {
        computer++;
    }

    playerScore.textContent = player;
    computerScore.textContent = computer;
    message.textContent = roundResult;
    selectionPlayer.appendChild(createParagWithText(playerSelection));
    selectionComputer.appendChild(createParagWithText(computerSelection));

    if (playerScore >= 5 && computerScore < 5) {
        message.textContent = 'Game Over. You Win!';
      } else if (playerScore < 5 && computerScore >= 5) {
        message.textContent = 'Game Over. You Lose!!';
      }
}

function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function capitalize(string) {
    return (
      string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
    );
  }
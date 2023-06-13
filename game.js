// Initialize scores
let player = 0
let computer = 0

function getComputerChoice() {
    let mixed = Math.floor(Math.random()*3);
    let guess = ''

    switch(mixed) {
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
    let log = '';

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            player += 1
            log = 'You Win! added ' + playerSelection + ' Wins!!'

        if (player === 5) {
            log += 'You Win This Round!!!' 
        }
    }
    else if (playerSelection === computerSelection) {
        log = "TIE!!!"
    }
    else {
        computer += 1
        log = 'You Lose!, ' + computerSelection + ' Wins!!.'

        if (computer === 5) {
            log += 'You Lose This Round'
        }
    }

    return log;
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playGameRound(playerSelection, computerSelection))
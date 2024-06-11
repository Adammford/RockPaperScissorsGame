
let playerScore = 0;
let computerScore = 0;
const choices = ["paper", "rock", "scissors"];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    let isValid = 0;

    while (isValid ==  0) {
        if (choices.includes(humanChoice)) {
            isValid = 1;
            return humanChoice;
        } else {
            humanChoice = prompt("Invalid Choice: Please choose Rock, Paper, Scissors: ");
            };
    };
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${playerChoice}!`);
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else {
        console.log(`Human wins! ${playerChoice} beats ${computerChoice}!`);
        playerScore++;
    }

}

function playGame() {
    let x = 0;
    while (5 > x){
        let playerChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        x++;
    }
    if (playerScore == computerScore) {
        console.log(`It's a tie! You both lose at life.`)
    } else if (playerScore > computerScore) {
        console.log('Player wins!')
    } else {
        console.log('Computer wins!')
    }
}

playGame();
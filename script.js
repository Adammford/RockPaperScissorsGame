
let playerScore = 0;
let computerScore = 0;
const choices = ["paper", "rock", "scissors"];

const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const PLAYBTN = document.querySelector(".start")
let PLAYERSCORE = document.querySelector(".playerScore");
let COMPUTERSCORE = document.querySelector(".computerScore");

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

ROCK.addEventListener("click", () => {
   playRound(getHumanChoice('rock'), getComputerChoice());
    
});
PAPER.addEventListener('click', () => {getHumanChoice('paper')});
SCISSORS.addEventListener('click',() => {getHumanChoice('scissors')});

function getHumanChoice(choice) {
    console.log(choice);
    let humanChoice = choice;
    let isValid = 0;

    while (isValid ==  0) {
        if (choices.includes(humanChoice)) {
            isValid = 1;
            return humanChoice;
        // } else {
        //   humanChoice = prompt("Invalid Choice: Please choose Rock, Paper, Scissors: ");
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


    if (playerScore == computerScore) {
        console.log(`It's a tie! You both lose at life.`)
    } else if (playerScore > computerScore) {
        console.log('Player wins!')
    } else {
        console.log('Computer wins!')
    }
}

PLAYERSCORE.textContent = playerScore;
COMPUTERSCORE.textContent = computerScore;
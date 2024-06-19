
let playerScore = 0;
let computerScore = 0;
const choices = ["Paper", "Rock", "Scissors"];

const ROCK = document.querySelector(".rock");
const PAPER = document.querySelector(".paper");
const SCISSORS = document.querySelector(".scissors");
const PLAYBTN = document.querySelector(".start")
const PLAYERSCORE = document.querySelector(".playerScore");
const COMPUTERSCORE = document.querySelector(".computerScore");
const text = document.querySelector(".text");

ROCK.addEventListener("click", () => {playRound('Rock', getComputerChoice());});
PAPER.addEventListener('click', () => {playRound('Paper', getComputerChoice());});
SCISSORS.addEventListener('click',() => {playRound('Scissors', getComputerChoice());});


function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        text.textContent = `It's a tie! Both chose ${playerChoice}!`
        console.log(`It's a tie! Both chose ${playerChoice}!`);
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        text.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}!`
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        text.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}!`
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        text.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}!`
        console.log(`Computer wins! ${computerChoice} beats ${playerChoice}!`);
        computerScore++;
    } else {
        text.textContent = `Human wins! ${playerChoice} beats ${computerChoice}!`
        console.log(`Human wins! ${playerChoice} beats ${computerChoice}!`);
        playerScore++;
    }

    PLAYERSCORE.textContent = playerScore;
    COMPUTERSCORE.textContent = computerScore;

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

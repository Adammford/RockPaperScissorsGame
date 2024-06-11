
const playerScore = 0;
const computerScore = 0;

function getComputerChoice() {
    const choices = ["Paper", "Rock", "Scissors"]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]

    console.log(computerChoice);


}

getComputerChoice();
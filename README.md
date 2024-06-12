# RockPaperScissorsGame
TOP - rock/paper/scissors game project

Start of Rock Paper Scissors Game for odin project:

///////////////////////////

Game will be played against a computer:

<!-- ESTABLISH playerScore and computerScore;
    - Initialize the scores with 0; -->

<!-- ESTABLISH getComputerChoice function:
    - Establish an array of choices
    - Function will randomly select Rock Paper or Scissors from an array
    -Return the computerChoice; -->

<!-- ESTABLISH getHumanChoice;
    - Use prompt to get user input;
    - Make it so the choice has to be valid;
    - Make it so the choice is case correct;
    - Return the userChoice; -->

ESTABLISH playRound function and logic:
    - playRound should take in two parameters
        1. playerChoice
        2. computerChoice
    -Do the logic for if player choice wins
        1. Rock beats scissors
        2. Paper beats Rock
        3. Scissors beat Paper
        4. Also establish if there is a tie

    -Who ever wins should have their score increment;

ESTABLISH playGame function:
    - Calls playRound 5 times
    - Keeps track of scores;
    - Declares winner at end of game. 
let playerScore = 0;
let computerScore = 0;

let options = ["Rock", "Paper", "Scissors"];


function getComputerChoice() {
    let randChoice = options[Math.floor(Math.random() * options.length)];
    return randChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
    } else if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        return `You need to enter either Rock, Paper, or Scissors.`;
    } else {
        return 2;
    }
}



function game() {

    for (let i = 0; i < 5; i++) {
        let guess = prompt("Rock, Paper, or Scissors?");
        let playerSelection = guess.charAt(0).toUpperCase() + guess.slice(1).toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        playRound(playerSelection, computerSelection);

        if (result === 1) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}. \nYou have ${playerScore} points and Computer has ${computerScore} points.`)
        } else if (result === 2) {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}. \nYou have ${playerScore} points and Computer has ${computerScore} points.`);
        } else if (result === 0) {
            computerScore += 0;
            console.log(`It's a tie.  Computer has ${computerScore} and you have ${playerScore}`);
        }

    }
    alert(`We've completed all five rounds.  \nThe final score is: \nYou: ${playerScore} \nComputer: ${computerScore}`);
}

game();
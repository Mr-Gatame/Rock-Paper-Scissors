let playerScore = 0;
let computerScore = 0;
const options = ["Rock", "Paper", "Scissors"];
const results = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');

scoreboard.setAttribute('align', 'center');



function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

const computerSelection = getComputerChoice();

const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        let computerSelection = getComputerChoice();
        playRound(selectionName, computerSelection);

        if (computerScore === 5) {
            alert(`YOU LOSE!\n Computer has made it to 5 points, leaving you with only ${playerScore}.\n Good Game.`);
        } else if (playerScore === 5) {
            alert(`YOU WIN!\n You made it to 5 points and the computer only has ${computerScore}.\n Well played.`);
        }
    })
})






function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        computerScore += 0;
        results.textContent = `It's a tie. Score remains the same.`;
        scoreboard.textContent = `Player has ${playerScore} points. \n Computer has ${computerScore}.`;
    } else
    if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        scoreboard.textContent = `Player has ${playerScore} points. \n Computer has ${computerScore}.`;
    } else if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        console.log(`You need to enter either Rock, Paper, or Scissors.`)
    } else {
        computerScore++;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        scoreboard.textContent = `Player has ${playerScore} points. \n Computer has ${computerScore}.`;
    }

    // if (computerScore === 5) {
    //     alert(`YOU LOSE!\n Computer has made it to 5 points, leaving you with only ${playerScore}.\n Good Game.`)
    //     return;
    // } else if (playerScore === 5) {
    //     alert(`YOU WIN!\n You made it to 5 points and the computer only has ${computerScore}.\n Well played.`);
    //     return;
    // }
}
// global variables for scores
let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const randomChoices = choices[Math.floor(Math.random() * choices.length)];

// function for computer's choice
function getComputerChoice() {
return  randomChoices;
}

console.log(getComputerChoice());

// function for human's choice

function getHumanChoice() {
    let choice = "";

    choice = prompt("Rock, Paper, or Scissors?");
    switch (choice.toLowerCase()) {
        case "rock":
        console.log(choice);
        break;
        case "paper":
        console.log(choice);
        break;
        case "scissors":
        console.log(choice);
        break;
        default:
            console.log ("not a valid answer");
    }
    return choice;
    }


// function to play a round, using both choices

function playRound(humanChoice, computerChoice) {
}
const humanSelection = getHumanChoice();
console.log(humanSelection)
const computerSelection = getComputerChoice();
console.log(computerSelection)

playRound(humanSelection, computerSelection);

// run 5 total rounds 


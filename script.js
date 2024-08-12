// global variables for scores
let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
const randomChoices = choices[Math.floor(Math.random() * choices.length)];

// function for computer's choice
function getComputerChoice() {
return  randomChoices;
}

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
            alert("not a valid answer");
    }
    return choice;
    }

// computer's choice displayed

// console.log(getComputerChoice());

// function to play a round, using both choices

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice ==="paper") {
        console.log("Paper beats rock, you lose!");
        computerScore = ++computerScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice ==="scissors") {
        console.log("Rock beats scissors, you win!");
        humanScore = ++humanScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice ==="rock") {
        console.log("Paper beats rock, you win!");
        humanScore = ++humanScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice ==="scissors") {
        console.log("Scissors beats paper, you lose!");
        computerScore = ++computerScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice ==="rock") {
        console.log("Rock beats scissors, you lose!");
        computerScore = ++computerScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice ==="paper") {
        console.log("Scissors beats paper, you win!");
        humanScore = ++humanScore;
        console.log(`Human Score: ${humanScore} - Computer Score: ${computerScore}`);
    } else {
        console.log("try again");
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection.toLowerCase(), computerSelection);

// run 5 total rounds 

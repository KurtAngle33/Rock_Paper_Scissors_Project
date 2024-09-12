// global variables for scores
let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

// function for computer's choice
function getComputerChoice() {
let randomChoices = choices[Math.floor(Math.random() * choices.length)];
return  randomChoices;
}

// function for human's choice

/* function getHumanChoice() {
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
    } */


    function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) {
            document.getElementById("result").textContent = "It's a tie!";
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice ==="paper") {
            document.getElementById("result").textContent = "Paper beats rock, you lose!";
            computerScore = ++computerScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice ==="scissors") {
            document.getElementById("result").textContent = "Rock beats scissors, you win!";
            humanScore = ++humanScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice ==="rock") {
            document.getElementById("result").textContent = "Paper beats rock, you win!";
            humanScore = ++humanScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "paper" && computerChoice ==="scissors") {
            document.getElementById("result").textContent = "Scissors beats paper, you lose!";
            computerScore = ++computerScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice ==="rock") {
            document.getElementById("result").textContent = "Rock beats scissors, you lose!";
            computerScore = ++computerScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice ==="paper") {
            document.getElementById("result").textContent = "Scissors beats paper, you win!";
            humanScore = ++humanScore;
            document.getElementById("scores").textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else {
            console.log("try again");
        }
        if (humanScore === 5){
            alert("You won 5 games!");
        } else if (computerScore === 5){
            alert("You lost 5 games!");
            }
    }

const rockBtn = document.querySelector("#rock");

rockBtn.addEventListener('click', () => {
    playRound("rock");
});

const paperBtn = document.querySelector("#paper");

paperBtn.addEventListener('click', () => {
    playRound("paper");
});

const scissorsBtn = document.querySelector("#scissors");

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});


// document.getElementById("scores").innerHTML = "";
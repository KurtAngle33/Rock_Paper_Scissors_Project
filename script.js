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

}

// function to play a round, using both choices


// run 5 total rounds 
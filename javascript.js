function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
           return("rock");
        } else if (randomNumber === 1) {
           return("paper"); 
        } else {
           return("scissors");
        }
} 

function getHumanChoice() {
    let choice= prompt("Choose Rock, Paper or Scissors");
        if (choice.toLowerCase() === "rock") {
            return("rock");
        } else if (choice.toLowerCase() === "paper") {
            return("paper");
        } else if (choice.toLowerCase() === "scissors"){
            return("scissors");
        } else {
            alert("Incorrect value");
        } 
}

let humanScore=0
let computerScore=0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice ==="scissors" || 
        humanChoice === "paper" && computerChoice ==="rock" || 
        humanChoice === "scissors" && computerChoice ==="paper") {
        humanScore++;    
    }
    
    if (humanChoice === "rock" && computerChoice ==="paper") {
    } else if (humanChoice === "paper" && computerChoice ==="scissors") {
    } else if (humanChoice === "scissors" && computerChoice ==="rock") {
    }
    computerChoice++



}

  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
  





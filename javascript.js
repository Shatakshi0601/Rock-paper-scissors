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

function playGame() {

let humanScore=0
let computerScore=0
let round=0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice ==="scissors" || 
        humanChoice === "paper" && computerChoice ==="rock" || 
        humanChoice === "scissors" && computerChoice ==="paper") {
        humanScore++;
        alert("You Won")  
    
    } else if (humanChoice === "rock" && computerChoice ==="paper" || 
        humanChoice === "paper" && computerChoice ==="scissors" || 
        humanChoice === "scissors" && computerChoice ==="rock") {
        computerChoice++;
        alert("You Lost")
        

    } else if (humanChoice === "rock" && computerChoice ==="rock" || 
        humanChoice === "paper" && computerChoice ==="paper" || 
        humanChoice === "scissors" && computerChoice ==="scissors") {
        alert("It's a tie!!");

    } else {
        alert("Game Over");
    }

console.log(humanScore);
console.log(computerScore);

round++;

    if (round<5) { 
        getSelect();
    } else {
        alert("Game Over");    
    }
}    

function getSelect() {
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);
} 
getSelect();

}
playGame();

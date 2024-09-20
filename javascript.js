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
    let response =  prompt("Rock, paper or scissors?");
    if (response === null) {
        alert ("Bye! Close the window or click okay to continue the game.");
    } else if (response.toLowerCase() === "rock") {
        return ("rock");
    } else if (response.toLowerCase() === "paper") {
        return ("paper");
    } else if (response.toLowerCase() === "scissors") {
        return ("scissors");
    } else {
        alert ("Incorrect response, try again in the next round!");
    }
}


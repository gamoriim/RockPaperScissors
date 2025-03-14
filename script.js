humanScore = 0;
computerScore = 0; 

function GetComputerChoice() {
    let number = Math.random();

    if (number < 0.33) {
        return "Rock";
    } else if (number > 0.33 && number < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    } 
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper or Scissors?").toLowerCase();
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {

}
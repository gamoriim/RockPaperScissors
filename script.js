humanScore = 0;
computerScore = 0; 

function GetComputerChoice() {
    let number = Math.random();

    if (number < 0.33) {
        return "rock";
    } else if (number > 0.33 && number < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    } 
}

function getHumanChoice() {
    let sign = prompt("Rock, Paper or Scissors?").toLowerCase();
    return sign;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'nobody wins';
        } else if (computerChoice === 'paper') {
            computerScore++;
            return 'computer wins';
        }
        else {
            humanScore++;
            return 'Human wins';
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            return 'human wins';
        }
        else if (computerChoice === 'paper') {
            return 'nobody wins';
        }
        else {
            computerScore++;
            return 'computer wins';
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return 'computer wins';
        }
        else if (computerChoice === 'paper') {
            humanScore++;
            return 'human wins';
        }
        else {
            return 'nobody wins';
        }
    } else {
        return null; 
    }

}


// OUTPUT 

const humanSelection = getHumanChoice();
const computerSelection = GetComputerChoice();

console.log(`You chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);

const result = playRound(humanSelection, computerSelection);

console.log(result);
console.log(`SCORE -> human:  ${humanScore}`);
console.log(`SCORE -> computer: ${computerScore}`);
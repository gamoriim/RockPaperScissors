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

function playGame() {
    for(let i = 0; i < 5; i++) {
       let userOption = getHumanChoice();
       let computerOption = GetComputerChoice();
       let result = playRound(userOption, computerOption);
       console.log(`You choose ${userOption}`);
       console.log(`Computer choose ${computerOption}`);
       console.log(result);
       console.log(`Score - human: ${humanScore}, computer: ${computerScore}`);
    }
    console.log(`Final Score - human: ${humanScore}, computer: ${computerScore}`);
}
playGame();
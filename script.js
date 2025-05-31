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
/*
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
*/

const div = document.querySelector("div");

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    const computerPick = GetComputerChoice();
    const result = playRound('rock', computerPick);
    div.innerHTML += `You picked: Rock. Computer picked: ${computerPick}<br>Result: ${result}<br><br>`
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", ()=>{
    const computerPick = GetComputerChoice()
    const result = playRound('paper', computerPick)
    div.innerHTML += `You picked: Paper. Computer picked: ${computerPick}<br>Result: ${result}<br><br>`
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", ()=>{
    const computerPick = GetComputerChoice()
    const result = playRound('scissors', computerPick)
    div.innerHTML += `You picked: Scissors. Computer picked: ${computerPick}<br>Result: ${result}<br><br>`
   
});


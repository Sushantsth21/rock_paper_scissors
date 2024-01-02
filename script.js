function getComputerChoice(){
    const choice = ["Rock", "Scissors", "Paper"];
    let random =  Math.floor(Math.random() * 3);
    return choice[random].toLowerCase()
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock"
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats Paper"
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors"
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beat Paper"
    }else{
        return"It's a tie"
    }
}


const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const result = document.createElement('div');
const pscore = document.createElement('div');
const cscore = document.createElement('div');
const final_result = document.createElement('div');
document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissors);
document.body.appendChild(result);
document.body.appendChild(pscore);
document.body.appendChild(cscore);
document.body.appendChild(final_result);

rock.textContent= "rock"
paper.textContent = "paper"
scissors.textContent = "scissors"

// Event listener for 'Rock' button
rock.addEventListener('click', () => {
    result.textContent=game("rock");

});

// Event listener for 'Paper' button
paper.addEventListener('click', () => {
    result.textContent=game("paper");
});

// Event listener for 'Scissors' button
scissors.addEventListener('click', () => {
    result.textContent=game("scissors");
});



let playerScore = 0
let computerScore = 0

function winner(){
    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        final_result.textContent = "You Win";
    }else if(computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        final_result.textContent = "You Lose";
    }
}
function game(player){
    const roundResult = playRound(player, getComputerChoice());

    if (playRound(player, getComputerChoice()).startsWith("You Lose")){
        computerScore += 1;
    } else if(playRound(player, getComputerChoice()).startsWith("You Win")){
        playerScore += 1;
    }
    pscore.textContent = `Player Score: ${playerScore}`;
    cscore.textContent = `Computer Score: ${computerScore}`;
    winner();

    return roundResult;


}







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

function game(){
    playerScore = 0
    computerScore = 0
    play = 1
    while (play = 1){
        let player = prompt("Choose your weapon: Rock, Paper or Scissors");
        if (playRound(player.toLowerCase(), getComputerChoice()) == "You Lose! Paper beats Rock" || playRound(player.toLowerCase(), getComputerChoice()) == "You Lose! Scissors beats Paper" || playRound(player.toLowerCase(), getComputerChoice()) ==  "You Lose! Rock beats Scissors"){
            computerScore += 1;
            console.log(playRound(player.toLowerCase(), getComputerChoice()));
        } else if(playRound(player.toLowerCase(), getComputerChoice()) == "You Win! Paper beats Rock" || playRound(player.toLowerCase(), getComputerChoice()) == "You Win! Rock beats Scissors" || playRound(player.toLowerCase(), getComputerChoice()) ==  "You Win! Scissors beat Paper"){
            playerScore += 1
            console.log(playRound(player.toLowerCase(), getComputerChoice()));
        }else{
            console.log(playRound(player.toLowerCase(), getComputerChoice()));
        }

        if(playerScore == 5){
            console.log("You won!")
            play +=1
        }else if(computerScore == 5){
            console.log("You lost!")
            play -=1
        }
    }
    
}

game()
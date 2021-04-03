function computerPlay(){
    let cmpTurn = Math.floor(Math.random() * 3);
    if(cmpTurn === 0){
        cmpTurn = "rock";
    }
    else if(cmpTurn === 1){
        cmpTurn = "paper";
    }else{
        cmpTurn = "scissors";
    }

    return cmpTurn;
    
}

function playRound(playerSelection, computerSelection){
    let str;
    if(playerSelection.localeCompare("rock")==0 && computerSelection.localeCompare("paper")==0){
        str = "you chose rock, comp chose paper, you lose!";
    }else if(playerSelection.localeCompare("rock")==0 && computerSelection.localeCompare("scissors")==0){
        str = "you chose rock, comp chose scissors, you win!";
    }else if(playerSelection.localeCompare("paper")==0 && computerSelection.localeCompare("scissors")==0){
        str = "you chose paper, comp chose scissors, you lose!";
    }else if(playerSelection.localeCompare("paper")==0 && computerSelection.localeCompare("rock")==0){
        str = "you chose paper, comp chose rock, you win!";
    }else if(playerSelection.localeCompare("scissors")==0 && computerSelection.localeCompare("paper")==0){
        str = "you chose scissors, comp chose paper, you win!";
    }else if(playerSelection.localeCompare("scissors")==0 && computerSelection.localeCompare("rock")==0){
        str = "you chose scissors, comp chose rock, you lose!";
    }else if(playerSelection.localeCompare(computerSelection)==0){
        str = "tie!";
    }

    return str;

}

function game(){
    let computerSelection = computerPlay();
    playerSelection = prompt("choose rock paper or scissors: ");

    return playRound(playerSelection, computerSelection);
}

for(let i=0;i<5;i++){
    console.log(game());
}




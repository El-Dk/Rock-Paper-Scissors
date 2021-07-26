//generete computer's move
function computerPlay(){
    let move = Math.floor(Math.random() * 3);
    switch(move){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

//compare moves to identify winner of the round
function playRound(playerSel, computerSel){
    let result = "";
    if(playerSel === computerSel){
        result = "Draw";
    }
    else{
        switch(playerSel){
            case "Rock":
                if(computerSel === "Paper"){
                    result = "Lose";
                }
                else{
                    result = "Win";
                }
                break;
            case "Paper":
                if(computerSel === "Scissors"){
                    result = "Lose";
                }
                else{
                    result = "Win";
                }
                break;
            default:
                if(computerSel === "Rock"){
                    result = "Lose";
                }
                else{
                    result = "Win";
                }
        }
    }
    return result;
    
}
//function to capitile player's input so it will be in a unique format
function capitilize(str){
    str = str.trim();
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str;
}
//create a game that consists of 5 rounds
function game(){
    let wins = 0;
    let draws = 0;
    let loses = 0;
    let playerMove = "";
    let computerMove = "";
    let roundResult = "";
    for(let round = 0; round < 5; round++){
        playerMove = prompt("Your Move:");
        playerMove = capitilize(playerMove);
        computerMove = computerPlay();
        roundResult = playRound(playerMove, computerMove);
        if(roundResult === "Win"){
            wins++;
            console.log(`You Win! ${playerMove} beats ${computerMove}`);
        }
        else if(roundResult === "Lose"){
            loses++;
            console.log(`You Lose! ${computerMove} beats ${playerMove}`);
        }
        else{
            draws++;
            console.log("It's a draw!");
        }
    }
    console.log(`Game Over! You Won ${wins} games, You lost ${loses} games and there were ${draws} draws\.`);
}
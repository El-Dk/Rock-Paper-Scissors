console.log(computerPlay());
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
    playerSel = capitilize(playerSel);
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

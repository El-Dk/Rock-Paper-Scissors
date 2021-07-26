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

//create a game that consists of 5 rounds
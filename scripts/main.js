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
function playRound(playerSel){
    const para = document.createElement('p');
    let computerSel = computerPlay();
    let result = "";
    resultDiv.innerHTML = "";
    roundsPlayed++;

    if(playerSel === computerSel){
        result = "It's a draw!";
        draws++;
    }
    else{
        switch(playerSel){
            case "Rock":
                if(computerSel === "Paper"){
                    result = `You Lose! ${computerSel} beats ${playerSel}`;
                    loses++;
                }
                else{
                    result = `You Win! ${playerSel} beats ${computerSel}`;
                    wins++;
                }
                break;
            case "Paper":
                if(computerSel === "Scissors"){
                    result = `You Lose! ${computerSel} beat ${playerSel}`;
                    loses++;
                }
                else{
                    result = `You Win! ${playerSel} beats ${computerSel}`;
                    wins++;
                }
                break;
            default:
                if(computerSel === "Rock"){
                    result = `You Lose! ${computerSel} beats ${playerSel}`;
                    loses++;
                }
                else{
                    result = `You Win! ${playerSel} beat ${computerSel}`;
                    wins++;
                }
        }
    }
    score.innerHTML = `<label>Wins: </label>${wins} <label>Loses: </label>${loses} <label>Draws: </label>${draws}`;
    score.classList.add('scoreDiv');
    para.textContent = result;
    resultDiv.appendChild(score);
    resultDiv.appendChild(para);

    if(roundsPlayed === numRounds){
        endGame();
    }
}

function endGame(){
    const para = document.createElement('p');
    const playAgain = document.createElement('button');
    if(wins === loses){
        para.textContent = `Game Over! It was a Draw!`;
    }
    else if(wins > loses){
        para.textContent = `Game Over! You Won!`;
    }
    else{
        para.textContent = `Game Over! You Lost!`;
    }
    playAgain.textContent = "Play Again";
    
    playAgain.addEventListener("click", reset);

    resultDiv.appendChild(para);
    resultDiv.appendChild(playAgain);

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function reset(){
    playGame.disabled = false;
    rounds.disabled = false;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    resultDiv.innerHTML = "";

    wins = 0;
    draws = 0;
    loses = 0;
    roundsPlayed = 0;
    numRounds = Number(rounds.value);

}
function startGame(){
    if(!Number(rounds.value)){
        alert("Number of rounds must be a NUMBER! (1 - 10)");
    }
    else if(Number(rounds.value) < 1 || Number(rounds.value > 10)){
        alert("Set the number of rounds between 1 - 10");
    }
    else{
        playGame.disabled = true;
        rounds.disabled = true;
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;

        wins = 0;
        draws = 0;
        loses = 0;
        numRounds = Number(rounds.value);
        roundsPlayed = 0;
        score.innerHTML = `<label>Wins: </label>${wins} <label>Loses: </label>${loses} <label>Draws: </label>${draws}`;
        score.classList.add('scoreDiv');
        resultDiv.appendChild(score);
    }
}
const rounds = document.querySelector('#rounds');
const playGame = document.querySelector('#playGame');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const resultDiv = document.querySelector('#gameResult');
const score = document.createElement('p');

let wins = 0;
let draws = 0;
let loses = 0;
let roundsPlayed = 0;
let numRounds; 

playGame.addEventListener('click', startGame);
window.addEventListener('beforeunload', reset);

rock.addEventListener('click', () =>{
    playRound(rock.value)
})
paper.addEventListener('click', () =>{
    playRound(paper.value)
})
scissors.addEventListener('click', () =>{
    playRound(scissors.value)
})
function getComputerChoice () {
    switch (Math.floor((Math.random() * 3))+1) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "TIE";
    }
    switch (playerSelection){
        case "PAPER":
            if (computerSelection === "SCISSORS"){
                return "compWin";
            }
            return "playerWin";
        case "ROCK":
            if (computerSelection === "PAPER"){
                return "compWin";
            }
            return "playerWin";
        case "SCISSORS":
            if (computerSelection === "ROCK"){
                return "compWin";
            }
            return "playerWin";
        default:
            return "NULL";
    }
}
function playGame (selection) {
    let roundResult;
    let playerSelection = selection.id
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    roundResult = playRound(playerSelection, computerSelection);
    const resultOutput = document.querySelector("p");
    resultOutput.style.backgroundColor = "white";
    resultOutput.style.color = "black";
    const resultDiv = document.querySelector("#result");
    const playerWins = document.querySelector("#player-wins");
    playerWins.textContent = `Player Wins: ${pWins}`;
    const computerWins = document.querySelector("#computer-wins");
    computerWins.textContent = `Computer Wins: ${cWins}`;
    resultDiv.appendChild(resultOutput);
    if (roundResult === "playerWin"){
        resultOutput.textContent = `Player Wins: ${playerSelection} beats ${computerSelection}`;
        playerWins.textContent = `Player Wins: ${++pWins}`;
    } else if (roundResult === "compWin"){
        resultOutput.textContent = `Computer Wins: ${computerSelection} beats ${playerSelection}`;
        computerWins.textContent = `Computer Wins: ${++cWins}`;
    } else if (roundResult === "TIE"){
        resultOutput.textContent = `It's a Tie! Player chose ${playerSelection} and Computer chose ${computerSelection}`;
    } else {
        resultOutput.textContent = `Invalid Selection: '${playerSelection}', try again`;
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playGame(e.target);
        ++gameCount;
        if (gameCount === 5){
            const resultOutput = document.querySelector("p");
            resultOutput.style.backgroundColor = "green";
            resultOutput.style.color = "white";
            if (pWins > cWins){
                resultOutput.textContent = `You are the winner after 5 games. There were ${5-cWins-pWins} ties`;
            } else if (pWins < cWins) {
                resultOutput.textContent = `The computer is the winner after 5 games. There were ${5-cWins-pWins} ties`;
            } else {
                resultOutput.textContent = `It was a tie after 5 games. There were ${5-cWins-pWins} ties`;
            }
            cWins = 0;
            pWins = 0;
            gameCount = 0;
        }
    });
});
let pWins = 0;
let cWins = 0;
let gameCount = 0;
let result = false;
while (result === true) {
    playGame();
    result = confirm("Play Again?");
}
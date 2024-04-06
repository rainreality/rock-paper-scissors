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
function playGame () {
    let playerWinCount = 0;
    let compWinCount = 0;
    let roundResult;
    let gameCount = 0;
    while (gameCount < 6) {
        let playerSelection = prompt("Please enter either 'ROCK, PAPER, or SCISSORS`","");
        const computerSelection = getComputerChoice();
        playerSelection = playerSelection.toUpperCase();
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === "playerWin"){
            playerWinCount++;
            gameCount++;
            console.log(`Round ${gameCount} - Player Wins ${gameCount} Game(s): ${playerSelection} beats ${computerSelection}`);
        } else if (roundResult === "compWin"){
            compWinCount++;
            gameCount++;
            console.log(`Round ${gameCount} - Computer Wins ${gameCount} Game(s): ${computerSelection} beats ${playerSelection}`);
        } else if (roundResult === "TIE"){
            gameCount++;
            console.log(`Round ${gameCount} - It's a Tie! Player chose ${playerSelection} and Computer chose ${computerSelection}`);
        }
        else {
            console.log (`Invalid Selection: '${playerSelection}', try again`);
        }
    }
    console.log (`You won: ${playerWinCount}. Computer won: ${compWinCount}`);
}
let result = confirm("Play 6 rounds of Rock, Paper, Scissors? (Open Dev Tools Console to see result)");
while (result === true){
    playGame();
    result = confirm("Play Again?");
}
let computerChoice;
let playerChoice;
let result;
let newRound = true;

function getComputerChoice(){
    let initalPick = Math.floor(Math.random() * 100) + 1;
    if (initalPick <= 33) {
        computerChoice = "Rock";
    } else if (initalPick <= 66 && initalPick >= 34) {
        computerChoice = "Paper";
    } else {
        computerChoice ="Scissors";
    };
};

function playRound(playerChoice, computerChoice) {
    playerChoice = prompt("Make your Pick", "Rock");
        if (playerChoice === null) {
            newRound = false;
            console.log("You have canceled the game!")
        } else {
            playerChoice = playerChoice.toLowerCase();
            playerChoiceLow = playerChoice.slice(1);
            playerChoiceCap = playerChoice.slice(0, 1).toUpperCase();
            playerChoice = playerChoiceCap + playerChoiceLow;
            console.log("You Choose: " + playerChoice);
            console.log("Your opponent choose: " + computerChoice);
            if (playerChoice === computerChoice) {
                console.log("You tied, Try again!");
                result = "Tied";
            } else if (playerChoice === "Rock" && computerChoice === "Paper") {
                console.log("Paper covers Rock. You LOSE!");
                result = "Lose";
            } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
                console.log("Rock smashes Scissors. You WIN!");
                result = "Win";
            } else if (playerChoice === "Paper" && computerChoice === "Rock") {
                console.log("Paper covers Rock. You WIN!");
                result = "Win";
            } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
                console.log("Scissors cut Paper. You LOSE!");
                result = "Lose";
            } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
                console.log("Rock smashes Scissors. You LOSE!");
                result = "Lose";
            } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
                console.log("Scissors cut Paper. You WIN!");
                result = "Win";
            } else {
                console.log("You are playing the wrong game");
                result = "Wrong";
            };
        }
}

function game() {
    let playerScore = 0 // resets player score
    let computerScore = 0 // resets computer score 
        while ( newRound === true ) { //loop starts 
             if (playerScore === 3 || computerScore === 3) {
                newRound = false;
                    if (playerScore === 3) {
                        console.log("Congradulations You WIN!");
                        return
                        } else if (computerScore === 3) {
                            console.log("Better luck next time. You LOSE!")
                            return
                        }
                    } else {
                        getComputerChoice();
                        playRound(playerChoice, computerChoice); 
                        if (result === "Win") {
                            playerScore += + 1;
                        } else if (result === "Lose") {
                            computerScore += + 1;
                        }
                        console.log("Player Score: " + playerScore + " || Opponent Score: " + computerScore );
                        }
        }
}


game();
// getComputerChoice();
// playRound(playerChoice, computerChoice);

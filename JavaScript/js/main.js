let playGame = confirm("Shall we play Rock, Paper, or Scissors?");

if (playGame) {
    // Get player's choice
    let playerChoice = prompt("Please enter rock, paper, or scissors.");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            // Computer choice
            let computerChoice = Math.floor(Math.random() * 3) + 1;
            let computer = computerChoice === 1 ? "rock" :
                           computerChoice === 2 ? "paper" : "scissors";

            // Determine result
            let result =
                playerOne === computer
                    ? "Tie game!"
                    : (playerOne === "rock" && computer === "scissors") ||
                      (playerOne === "paper" && computer === "rock") ||
                      (playerOne === "scissors" && computer === "paper")
                    ? "You win!"
                    : "Computer wins!";

            // Output results
            alert(`Player: ${playerOne}\nComputer: ${computer}\nResult: ${result}`);

        } else {
            alert("You must enter rock, paper, or scissors!");
        }

    } else {
        alert("You cancelled the game. Maybe next time!");
    }

} else {
    alert("Ok, maybe next time.");
}

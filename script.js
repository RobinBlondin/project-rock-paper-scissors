
let playerSelection = prompt('Please choose between rock, paper and scissors:'); // asking user for a selection

while (["rock", "paper", "scissors"].indexOf(playerSelection.toLowerCase()) === -1) 
{
    playerSelection = prompt('You need to choose between rock, paper or scissors. Please try again!'); // Makes sure that user input is correct for this program to work
    console.log(playerSelection);
}

let computerSelection = ()  => {
    let rps = ['rock', 'paper', 'scissors'];  
    return rps[Math.floor(Math.random() * 3)];  // Stores a random choice into computerSelection
};


function playRound(computerSelection, playerSelection) {

    if (computerSelection == playerSelection.toLowerCase())
    {
        return "It's a draw!"
    }
    else if (computerSelection == 'rock')
    {
        return (playerSelection.toLowerCase() == 'paper') ? 'You win!' : 'You lose!'
    }
    else if (computerSelection == 'paper')
    {
        return (playerSelection.toLowerCase() == 'scissors') ? 'You win!' : 'You lose!'
    }
    else if (computerSelection == 'scissors')
    {
        return (playerSelection.toLowerCase() == 'rock') ? 'You win!' : 'You lose!'
    }
}
console.log(playRound(computerSelection(), playerSelection));

let playerSelection = prompt('Please choose between rock, paper and scissors:').toLowerCase(); // asking user for a selection

while (["rock", "paper", "scissors"].indexOf(playerSelection) === -1) 
{
    playerSelection = prompt('You need to choose between rock, paper or scissors. Please try again!').toLowerCase(); // Makes sure that user input is correct for this program to work
}



let computerSelection = ()  => 
{
    let rps = ['rock', 'paper', 'scissors'];  
    return rps[Math.floor(Math.random() * 3)];  // Stores a random choice into computerSelection
};


function playRound(computerSelection, playerSelection) 
{
    
    if (computerSelection == playerSelection)
    {
        return "It's a draw!"
    }
    else if (computerSelection == 'rock')
    {
        return (playerSelection == 'paper') ? 'Computer chose rock, You win!' : 'Computer chose rock, You lose!'
    }
    else if (computerSelection == 'paper')
    {
        return (playerSelection == 'scissors') ? 'Computer chose paper, You win!' : 'Computer chose paper, You lose!'
    }
    else if (computerSelection == 'scissors')
    {
        return (playerSelection == 'rock') ? 'Computer chose scissors, You win!' : 'Computer chose scissors, You lose!'
    }
}

console.log(playRound(computerSelection(), playerSelection));

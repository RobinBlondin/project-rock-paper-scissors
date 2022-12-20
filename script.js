
let playerSelection = () => 
{
    let input = prompt('Please choose between rock, paper and scissors:').toLowerCase(); // asking user for a selection

    while (["rock", "paper", "scissors"].indexOf(input) === -1) 
    {
        input = prompt('You need to choose between rock, paper or scissors. Please try again!').toLowerCase(); // Makes sure that user input is correct for this program to work
    }
    return input;
}

let computerSelection = ()  => 
{
    let rps = ['rock', 'paper', 'scissors'];  
    return rps[Math.floor(Math.random() * 3)];  // Stores a random choice into computerChoice
};


function playRound() 
{
    let playerChoice = playerSelection();
    let computerChoice = computerSelection();
    
    if (computerChoice == playerChoice)
    {
        return "It's a draw!"
    }
    else if (computerChoice == 'rock')
    {
        return (playerChoice == 'paper') ? 'Computer chose rock, You win!' : 'Computer chose rock, You lose!'
    }
    else if (computerChoice == 'paper')
    {
        return (playerChoice == 'scissors') ? 'Computer chose paper, You win!' : 'Computer chose paper, You lose!'
    }
    else if (computerChoice == 'scissors')
    {
        return (playerChoice == 'rock') ? 'Computer chose scissors, You win!' : 'Computer chose scissors, You lose!'
    }
}

function game()
{
    let computerScore = 0;
    let playerScore = 0;
    let result = '';

    for (let i = 0; i < 5; i++) 
    {
        result = playRound();
        
        if (result.includes('win'))
        {
            playerScore++;
            console.log(result + '\n\n' + 'Player: ' + playerScore + '\n' + 'Computer: ' + computerScore)
        }
        else if (result.includes('lose'))
        {
            computerScore++;
            console.log(result + '\n\n' + 'Player: ' + playerScore + '\n' + 'Computer: ' + computerScore)
        }
        else
        {
            console.log(result + '\n\n' + 'Player: ' + playerScore + '\n' + 'Computer: ' + computerScore)
        }
    }

    if (playerScore > computerScore)
        console.log('\n\n' + 'You won this game of five. Congratulations!')
    else if (playerScore < computerScore)
        console.log('\n\n' + 'You lost this game of five. Better luch next time!')
    else if (playerScore == computerScore)
        console.log('\n\n' + "Close! It's a draw!");
}

console.log(game())
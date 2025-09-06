// Global scores
let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 1;

// Choice buttons
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Winner display container
let winnerDisplay = document.querySelector('winner');

// Player score display
let playerScoreDisplay = document.querySelector('player-score');
let computerScoreDisplay = document.querySelector('computer-score');

// Get choices
function getComputerChoice() {
  let randomNumber = Math.floor(3 * Math.random());
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
}

function getWinnerChoice(humanChoice, computerChoice) {
  let totalLength = humanChoice.length + computerChoice.length;
  switch (totalLength) {
    case 9:
      return 'paper';
    case 12:
      return 'rock';
    case 13:
      return 'scissors';
    default:
      return 'invalid choice';
  }
}

// Helper functions
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice) {
  console.log(`Human choice: ${humanChoice}`);
}
// Events 
rockBtn.addEventListener('click', () => {
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});
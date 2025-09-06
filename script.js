// Global scores
let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 1;

// Choice buttons
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Player choice display
let playerChoiceDisplay = document.querySelector('#player-choice');
let computerChoiceDisplay = document.querySelector('#computer-choice');

// Winner display container
let winnerDisplay = document.querySelector('.winner');

// Player score display
let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');

// Get choices
function getComputerChoice() {
  let randomNumber = Math.floor(3 * Math.random());
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Insert emoji to display
function insertEmoji(choice) {
  switch (choice) {
    case 'rock':
      return 'rock 🗿';
    case 'paper':
      return 'paper 📄';
    case 'scissors':
      return 'scissors ✂️';
    default:
      return choice;
  }
}
// Update choice display
function updateChoices(playerChoice, computerChoice) {
  playerChoiceDisplay.textContent = insertEmoji(playerChoice);
  computerChoiceDisplay.textContent = insertEmoji(computerChoice);
}

// Determines round winner: 
// true = player wins, 
// false = computer wins, 
// undefined = draw
function getWinner(playerChoice, computerChoice) {
  let totalLength = playerChoice.length + computerChoice.length;
  switch (totalLength) {
    case 9:
      return playerChoice === 'paper';
    case 12:
      return playerChoice === 'rock';
    case 13:
      return playerChoice === 'scissors';
    default:
      return undefined;
  }
}

// Display and update the winner
function displayWinner(winner) {
  let message;
  let bgColor;

  switch (winner) {
    case true:
      message = 'You win!';
      bgColor = '#43c25a';
      break;
    case false:
      message = 'Computer wins!';
      bgColor = '#f85454';
      break;
    case undefined:
      message = `It's a tie!`;
      bgColor = '#f9b50f';
  }

  updateWinner(message, bgColor);
}

function updateWinner(message, bgColor) {
  let existingParagraph = winnerDisplay.querySelector('p');

  // Update text and color if exists
  if (existingParagraph) {
    existingParagraph.textContent = message;
    existingParagraph.style.cssText = `background: ${bgColor};`;
  } else {
    // Create a new paragraph
    let newParagraph = document.createElement('p');
    newParagraph.textContent = message;
    newParagraph.style.cssText = `background: ${bgColor};`;
    winnerDisplay.appendChild(newParagraph);
  }
}

// Update and display scores
function updateScores(winner){
  // Update global scores
  if (winner) {
    playerScore++;
  } else if (winner === false) {
    computerScore++;
  }
  // Change score text
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

// Main function to play a round
function playRound(humanChoice) {
  // Get computer choice
  let computerChoice = getComputerChoice();
  updateChoices(humanChoice, computerChoice);

  // Decide winner
  let winner = getWinner(humanChoice, computerChoice);

  // Display winner and update the scores
  displayWinner(winner);
  updateScores(winner);
}

// Control buttons events listeners
rockBtn.addEventListener('click', () => {
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});

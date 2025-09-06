// Global scores
let humanScore = 0;
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
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');

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

function insertEmoji(choice) {
  switch (choice) {
    case 'rock':
      return 'rock 🗿';
    case 'paper':
      return 'paper 📄';
    case 'scissors':
      return '✂️';
    default:
      return choice;
  }
}
// Update choice display
function updateChoices(humanChoice, computerChoice) {
  playerChoiceDisplay.textContent = insertEmoji(humanChoice);
  computerChoiceDisplay.textContent = insertEmoji(computerChoice);
}

// Determines round winner: true = player wins, false = computer wins, undefined = draw
function getWinner(humanChoice, computerChoice) {
  let totalLength = humanChoice.length + computerChoice.length;
  switch (totalLength) {
    case 9:
      return humanChoice === 'paper';
    case 12:
      return humanChoice === 'rock';
    case 13:
      return humanChoice === 'scissors';
    default:
      return undefined;
  }
}

function displayWinner(winner) {
  let message;
  let bgColor;

  switch (winner) {
    case true:
      message = 'You win!';
      bgColor = '#43c25a';
      break;
    case false:
      message = 'Compueter wins!';
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

  if (existingParagraph) {
    // Update text and color
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

// Main play round
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  console.log('');
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  updateChoices(humanChoice, computerChoice);

  console.log('');
  let winner = getWinner(humanChoice, computerChoice);
  console.log(`Human won?: ${winner}`);

  console.log('');
  displayWinner(winner);
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

console.log('Check your JS!');
/*----- constants -----*/
const CARDS = [
  {
    id: 'ace-clubs',
    image: {
      src: '../images/ace-clubs.svg',
      alt: 'ace of clubs card',
    },
    value: 11,
  },
  {
    id: 'king-clubs',
    image: {
      src: '../images/king-clubs.svg',
      alt: 'king of clubs card',
    },
    value: 10,
  },
  {
    id: 'queen-clubs',
    image: {
      src: '../images/queen-clubs.svg',
      alt: 'queen of clubs card',
    },
    value: 10,
  },
  {
    id: 'jack-clubs',
    image: {
      src: '../images/jack-clubs.svg',
      alt: 'jack of clubs card',
    },
    value: 10,
  },
  {
    id: '10-clubs',
    image: {
      src: '../images/10-clubs.svg',
      alt: '10 of clubs card',
    },
    value: 10,
  },
  {
    id: '9-clubs',
    image: {
      src: '../images/9-clubs.svg',
      alt: '9 of clubs card',
    },
    value: 9,
  },
  {
    id: '8-clubs',
    image: {
      src: '../images/8-clubs.svg',
      alt: '8 of clubs card',
    },
    value: 8,
  },
  {
    id: '7-clubs',
    image: {
      src: '../images/7-clubs.svg',
      alt: '7 of clubs card',
    },
    value: 7,
  },
  {
    id: '6-clubs',
    image: {
      src: '../images/6-clubs.svg',
      alt: '6 of clubs card',
    },
    value: 6,
  },
  {
    id: '5-clubs',
    image: {
      src: '../images/5-clubs.svg',
      alt: '5 of clubs card',
    },
    value: 5,
  },
  {
    id: '4-clubs',
    image: {
      src: '../images/4-clubs.svg',
      alt: '4 of clubs card',
    },
    value: 4,
  },
  {
    id: '3-clubs',
    image: {
      src: '../images/3-clubs.svg',
      alt: '3 of clubs card',
    },
    value: 3,
  },
  {
    id: '2-clubs',
    image: {
      src: '../images/2-clubs.svg',
      alt: '2 of clubs card',
    },
    value: 2,
  },
  {
    id: 'ace-spades',
    image: {
      src: '../images/ace-spades.svg',
      alt: 'ace of spades card',
    },
    value: 11,
  },
  {
    id: 'king-spades',
    image: {
      src: '../images/king-spades.svg',
      alt: 'king of spades card',
    },
    value: 10,
  },
  {
    id: 'queen-spades',
    image: {
      src: '../images/queen-spades.svg',
      alt: 'queen of spades card',
    },
    value: 10,
  },
  {
    id: 'jack-spades',
    image: {
      src: '../images/jack-spades.svg',
      alt: 'jack of spades card',
    },
    value: 10,
  },
  {
    id: '10-spades',
    image: {
      src: '../images/10-spades.svg',
      alt: '10 of spades card',
    },
    value: 10,
  },
  {
    id: '9-spades',
    image: {
      src: '../images/9-spades.svg',
      alt: '9 of spades card',
    },
    value: 9,
  },
  {
    id: '8-spades',
    image: {
      src: '../images/8-spades.svg',
      alt: '8 of spades card',
    },
    value: 8,
  },
  {
    id: '7-spades',
    image: {
      src: '../images/7-spades.svg',
      alt: '7 of spades card',
    },
    value: 7,
  },
  {
    id: '6-spades',
    image: {
      src: '../images/6-spades.svg',
      alt: '6 of spades card',
    },
    value: 6,
  },
  {
    id: '5-spades',
    image: {
      src: '../images/5-spades.svg',
      alt: '5 of spades card',
    },
    value: 5,
  },
  {
    id: '4-spades',
    image: {
      src: '../images/4-spades.svg',
      alt: '4 of spades card',
    },
    value: 4,
  },
  {
    id: '3-spades',
    image: {
      src: '../images/3-spades.svg',
      alt: '3 of spades card',
    },
    value: 3,
  },
  {
    id: '2-spades',
    image: {
      src: '../images/2-spades.svg',
      alt: '2 of spades card',
    },
    value: 2,
  },
  {
    id: 'ace-diamonds',
    image: {
      src: '../images/ace-diamonds.svg',
      alt: 'ace of diamonds card',
    },
    value: 11,
  },
  {
    id: 'king-diamonds',
    image: {
      src: '../images/king-diamonds.svg',
      alt: 'king of diamonds card',
    },
    value: 10,
  },
  {
    id: 'queen-diamonds',
    image: {
      src: '../images/queen-diamonds.svg',
      alt: 'queen of diamonds card',
    },
    value: 10,
  },
  {
    id: 'jack-diamonds',
    image: {
      src: '../images/jack-diamonds.svg',
      alt: 'jack of diamonds card',
    },
    value: 10,
  },
  {
    id: '10-diamonds',
    image: {
      src: '../images/10-diamonds.svg',
      alt: '10 of diamonds card',
    },
    value: 10,
  },
  {
    id: '9-diamonds',
    image: {
      src: '../images/9-diamonds.svg',
      alt: '9 of diamonds card',
    },
    value: 9,
  },
  {
    id: '8-diamonds',
    image: {
      src: '../images/8-diamonds.svg',
      alt: '8 of diamonds card',
    },
    value: 8,
  },
  {
    id: '7-diamonds',
    image: {
      src: '../images/7-diamonds.svg',
      alt: '7 of diamonds card',
    },
    value: 7,
  },
  {
    id: '6-diamonds',
    image: {
      src: '../images/6-diamonds.svg',
      alt: '6 of diamonds card',
    },
    value: 6,
  },
  {
    id: '5-diamonds',
    image: {
      src: '../images/5-diamonds.svg',
      alt: '5 of diamonds card',
    },
    value: 5,
  },
  {
    id: '4-diamonds',
    image: {
      src: '../images/4-diamonds.svg',
      alt: '4 of diamonds card',
    },
    value: 4,
  },
  {
    id: '3-diamonds',
    image: {
      src: '../images/3-diamonds.svg',
      alt: '3 of diamonds card',
    },
    value: 3,
  },
  {
    id: '2-diamonds',
    image: {
      src: '../images/2-diamonds.svg',
      alt: '2 of diamonds card',
    },
    value: 2,
  },
  {
    id: 'ace-hearts',
    image: {
      src: '../images/ace-hearts.svg',
      alt: 'ace of hearts card',
    },
    value: 11,
  },
  {
    id: 'king-hearts',
    image: {
      src: '../images/king-hearts.svg',
      alt: 'king of hearts card',
    },
    value: 10,
  },
  {
    id: 'queen-hearts',
    image: {
      src: '../images/queen-hearts.svg',
      alt: 'queen of hearts card',
    },
    value: 10,
  },
  {
    id: 'jack-hearts',
    image: {
      src: '../images/jack-hearts.svg',
      alt: 'jack of hearts card',
    },
    value: 10,
  },
  {
    id: '10-hearts',
    image: {
      src: '../images/10-hearts.svg',
      alt: '10 of hearts card',
    },
    value: 10,
  },
  {
    id: '9-hearts',
    image: {
      src: '../images/9-hearts.svg',
      alt: '9 of hearts card',
    },
    value: 9,
  },
  {
    id: '8-hearts',
    image: {
      src: '../images/8-hearts.svg',
      alt: '8 of hearts card',
    },
    value: 8,
  },
  {
    id: '7-hearts',
    image: {
      src: '../images/7-hearts.svg',
      alt: '7 of hearts card',
    },
    value: 7,
  },
  {
    id: '6-hearts',
    image: {
      src: '../images/6-hearts.svg',
      alt: '6 of hearts card',
    },
    value: 6,
  },
  {
    id: '5-hearts',
    image: {
      src: '../images/5-hearts.svg',
      alt: '5 of hearts card',
    },
    value: 5,
  },
  {
    id: '4-hearts',
    image: {
      src: '../images/4-hearts.svg',
      alt: '4 of hearts card',
    },
    value: 4,
  },
  {
    id: '3-hearts',
    image: {
      src: '../images/3-hearts.svg',
      alt: '3 of hearts card',
    },
    value: 3,
  },
  {
    id: '2-hearts',
    image: {
      src: '../images/2-hearts.svg',
      alt: '2 of hearts card',
    },
    value: 2,
  },
];

// const INITIAL_GAME_MESSAGE = {
//   top: 'The name of the game is Blackjack.. Place your bet..',
//   bottom: `How much are you betting? <span><input type="number" min=${1} max=${
//     playerDetails.cashLeft
//   }/></span>`,
// };
/*----- app's state (variables) -----*/
// - player state
let playerHandValue;
let playerCardsInHand;
let playerDetails;
let playerActionSelected;

// - dealer state
let dealerHandValue;
let dealerCardsInHand;

// - game state
let isRoundStarted;
let isPlayerTurn;
let cardsInDeck;
let roundWinner;
let gameMessage;

/*----- cached element references -----*/
// - Player details (cash amounts) DOM Elements
const currentBet = document.querySelector('.bet');
const cashLeft = document.querySelector('.cash');
// - Card DOM Elements
const dealerCards = document.querySelector('.dealer-cards');
const playerCards = document.querySelector('.player-cards');
const standBtn = document.querySelector('.stand');
const hitBtn = document.querySelector('.hit');
// - Message DOM Elements
const gameMessageTop = document.querySelector('.game-message p.top');
const gameMessageBottom = document.querySelector('.game-message p.bottom');
const bettingEl = document.querySelector('.betting');
const betInput = document.querySelector('input.bet-input');
const betButton = document.querySelector('button.bet-button');

/*----- event listeners -----*/
betButton.addEventListener('click', handleBetButtonClick);
/*----- functions -----*/
init();
console.log(cardsInDeck);

function init() {
  playerHandValue = 0;
  playerCardsInHand = [];
  playerDetails = {
    bet: 0,
    cashLeft: 500,
  };
  playerActionSelected = '';
  dealerHandValue = 0;
  dealerCardsInHand = [];
  isRoundStarted = false;
  isPlayerTurn = false;
  cardsInDeck = shuffleCards(CARDS);
  roundWinner = '';
  gameMessage = {
    top: 'The name of the game is Blackjack. Place your bet!',
    bottom: 'How much are you betting?',
  };
  render();
}

function render() {
  renderGameMessage();
  renderBettingEl();
  renderPlayerDetails();
}

// - Updates game message.
function renderGameMessage() {
  gameMessageTop.innerText = gameMessage.top;
  gameMessageBottom.innerText = gameMessage.bottom;
}

// - Renders the betting UI
function renderBettingEl() {
  if (isRoundStarted) {
    bettingEl.classList.add('removed');
  } else {
    bettingEl.classList.remove('removed');
  }
}

// - Renders player details content.
function renderPlayerDetails() {
  currentBet.innerText = playerDetails.bet.toFixed(2);
  cashLeft.innerText = playerDetails.cashLeft.toFixed(2);
}

// - Validates initial bet.
// - This will also update the game message state and
//   players details state.
function handleBetButtonClick(event) {
  event.preventDefault();
  if (typeof betInput.value !== 'number') {
    gameMessage.top = 'Enter a valid amount!';
  }

  if (betInput.value < 1) {
    gameMessage.top = 'You must enter at least $1.00';
  } else if (betInput.value > playerDetails.cashLeft) {
    gameMessage.top = `You only have $${playerDetails.cashLeft}. You can't exceed that amount.`;
  } else {
    let bet = Number(parseFloat(betInput.value));
    betInput.value = ''; // Clear input of betting UI.
    playerDetails.bet = bet;
    playerDetails.cashLeft -= bet;
    gameMessage.top = `Good luck!`;
    gameMessage.bottom = ``;
    isRoundStarted = true;

    // **********************
    // **********************
    // TODO
    // **********************
    // **********************
    console.log('Deal cards from deck');
    console.log('Set isPlayersTurn = true');
  }

  render();
}

// - Shuffles full deck of cards
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

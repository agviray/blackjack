/*----- constants -----*/
const CARD_VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  jack: 10,
  queen: 10,
  king: 10,
  aceLow: 1,
  aceHigh: 11,
};
/*----- app's state (variables) -----*/
// - player state
let playerHandValue;
let playerCardsInHand = [];
let playerActionSelected;
let playerBet;
let playerCashLeft;

// - dealer state
let dealerHandValue;
let dealerCardsInHand = [];

// - game state
let currentTurn;
let cardsInDeck;
let roundWinner;
let gameMessage;

/*----- cached element references -----*/
// - Cash DOM Elements
const cashLeft = document.querySelector('.cash');
const currentBet = document.querySelector('.bet');
// - Card DOM Elements
const dealerCards = document.querySelector('.dealer-cards');
const playerCards = document.querySelector('.player-cards');
const standBtn = document.querySelector('.stand');
const hitBtn = document.querySelector('.hit');
// - Message DOM Elements
const gameMessageSection = document.querySelector('.game-message');
const gameMessageTop = gameMessageSection.querySelector('p.top');
const gameMessageBottom = gameMessageSection.querySelector('p.bottom');
/*----- event listeners -----*/

/*----- functions -----*/

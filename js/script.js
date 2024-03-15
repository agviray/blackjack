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

/*----- event listeners -----*/

/*----- functions -----*/

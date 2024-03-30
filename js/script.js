import {
  playBgMusicButton,
  pauseBgMusicButton,
  bgMusicVolumeControls,
  handlePlayButtonClick,
  handlePauseButtonClick,
  handleVolumeChange,
} from './utils/musicUtils.js';

import { playSoundEffect, playCoinJingle } from './utils/soundEffectsUtils.js';

import {
  getDealerWinnerMessage,
  getPlayerWinnerMessage,
  getPushWinnerMessage,
  getGameInProgressMessage,
} from './utils/gameMessageUtils.js';

import { CARDS, shuffleCards } from './utils/cardsUtils.js';

/*----- app's state (variables) -----*/

// - player state
let playerHandValue;
let playerCardsInHand;
let playerDetails;

// - dealer state
let dealerHandValue;
let dealerCardsInHand;

// - game state
let isRoundStarted;
let isInitialDraw;
let cardsInDeck;
let roundWinner;
let gameMessage;
let isContinuedGame;

/*----- cached element references -----*/

// - Player details (cash amounts) DOM Elements
const currentBet = document.querySelector('.bet');
const cashLeft = document.querySelector('.cash');

// - Player controls
const playerControls = document.querySelector('#player-controls');

// - Card DOM Elements
const dealerCards = document.querySelector('.dealer-cards');
const playerCards = document.querySelector('.player-cards');
const standButton = document.querySelector('.stand');
const hitButton = document.querySelector('.hit');

// - Message DOM Elements
const gameMessageTop = document.querySelector('.game-message p.top');
const gameMessageBottom = document.querySelector('.game-message p.bottom');
const bettingUI = document.querySelector('.betting-ui');
const bettingChips = Array.from(
  document.querySelectorAll('.betting-chips > div')
);
// const betInput = document.querySelector('input.bet-input');
const betButton = document.querySelector('button.bet-button');
const clearBetButton = document.querySelector('button.clear-bet-button');
const keepPlayingButtons = document.querySelector('.keep-playing-buttons');
const yesButton = keepPlayingButtons.querySelector('.yes-button');
const noButton = keepPlayingButtons.querySelector('.no-button');
const restartButton = document.querySelector('.restart-button');

/*----- event listeners -----*/

playBgMusicButton.addEventListener('click', handlePlayButtonClick);
pauseBgMusicButton.addEventListener('click', handlePauseButtonClick);
bgMusicVolumeControls.addEventListener('change', handleVolumeChange);
bettingChips.forEach((chip) => {
  chip.addEventListener('click', (event) => {
    playCoinJingle();
    handleChipClick(event);
  });
});
betButton.addEventListener('click', handleBetButtonClick);
clearBetButton.addEventListener('click', handleClearBetButtonClick);
hitButton.addEventListener('click', handleHitButtonClick);
standButton.addEventListener('click', handleStandButtonClick);
yesButton.addEventListener('click', handleYesButtonClick);
noButton.addEventListener('click', resetGame);
restartButton.addEventListener('click', resetGame);

/*----- functions -----*/

init();

function init() {
  playerHandValue = 0;
  playerCardsInHand = [];
  playerDetails = {
    bet: 0,
    cashLeft: 500,
  };
  dealerHandValue = 0;
  dealerCardsInHand = [];
  isRoundStarted = false;
  isInitialDraw = true;
  cardsInDeck = shuffleCards(CARDS);
  roundWinner = '';
  gameMessage = {
    top: `Let's play Blackjack!`,
    bottom: 'How much are you betting?',
  };
  isContinuedGame = false;

  render();
}

function render() {
  renderPlayerDetails();
  renderGameMessage();
  renderPlayerControls();
  renderMessageUI();
  renderDealerCards();
  renderPlayerCards();
  renderRoundWinnerSFX();
  // renderChipClick();
}

// Plays appropriate sound effect depending on round winner.
function renderRoundWinnerSFX() {
  playSoundEffect(roundWinner, playerCardsInHand, playerHandValue);
}

// - Renders game message to DOM.
function renderGameMessage() {
  if (isInitialDraw === true) {
    gameMessageTop.innerText = gameMessage.top;
    gameMessageBottom.innerText = gameMessage.bottom;
  }
  if (isInitialDraw === false) {
    let message;
    if (roundWinner === '') {
      message = getGameInProgressMessage(
        dealerCardsInHand,
        dealerHandValue,
        playerHandValue
      );
      gameMessageTop.innerText = message.topMessage;
      gameMessageBottom.innerText = message.bottomMessage;
    } else {
      if (roundWinner === 'push') {
        gameMessageTop.innerText = getPushWinnerMessage();
      } else if (roundWinner === 'dealer') {
        if (dealerHandValue === 21) {
          gameMessageTop.innerText = `DEALER WINS! Their hand of ${dealerHandValue} beats your hand of ${playerHandValue}!`;
        } else {
          message = getDealerWinnerMessage(dealerHandValue, playerHandValue);
          gameMessageTop.innerText = message.topMessage;
        }
      } else if (roundWinner === 'player') {
        if (playerHandValue === 21) {
          gameMessageTop.innerText = `YOU WIN! Your hand of ${playerHandValue} beats the dealer's hand of ${dealerHandValue}!`;
        } else {
          message = getPlayerWinnerMessage(dealerHandValue, playerHandValue);
          gameMessageTop.innerText = message.topMessage;
        }
      }
      gameMessageBottom.innerText = `Keep playing?`;
    }
  }
}

// Renders the betting UI
function renderMessageUI() {
  // Toggle visibility of betting UI
  if (isRoundStarted) {
    bettingUI.classList.add('removed');
  } else {
    bettingUI.classList.remove('removed');
  }
  // Toggle visibility of the "continue playing" buttons.
  if (roundWinner !== '') {
    keepPlayingButtons.classList.add('visible');
  } else {
    keepPlayingButtons.classList.remove('visible');
  }
}

// Renders player details content.
function renderPlayerDetails() {
  updatePlayerDetails();
  currentBet.innerText = playerDetails.bet;
  cashLeft.innerText = playerDetails.cashLeft;
}

// Updates player details (bet/cashLeft) according to
// roundWinner outcome of most recent round.
function updatePlayerDetails() {
  if (isRoundStarted && roundWinner !== '') {
    if (roundWinner === 'player') {
      playerDetails.cashLeft += playerDetails.bet * 2;
    } else if (roundWinner === 'push') {
      playerDetails.cashLeft += playerDetails.bet;
    }
    playerDetails.bet = 0;
  }
}

// Toggle visibility of player controls ui.
function renderPlayerControls() {
  if (
    isRoundStarted &&
    roundWinner === '' &&
    (playerDetails.bet !== 0 || playerDetails.cashLeft >= 1)
  ) {
    playerControls.classList.add('is-visible');
  } else {
    playerControls.classList.remove('is-visible');
  }
}

// Continues game current game with updated playerDetails (bet/cashLeft)
// depending on roundWinner outcome of most recent round.
function handleYesButtonClick(event) {
  event.preventDefault();
  if (
    isRoundStarted &&
    playerDetails.bet === 0 &&
    (playerDetails.cashLeft === 0 || playerDetails.cashLeft < 1)
  ) {
    gameMessage.top = `Sorry, minimum buy-in is $1.00, and you have $${
      playerDetails.cashLeft
    } ${
      playerDetails.cashLeft > 0 && playerDetails.cashLeft < 1
        ? 'cents'
        : 'dollars'
    }.`;
    gameMessage.bottom = 'Come back soon!';
    restartButton.classList.add('visible');
  } else {
    gameMessage.top = `Good luck!`;
    isRoundStarted = false;
  }

  playerHandValue = 0;
  playerCardsInHand = [];
  dealerHandValue = 0;
  dealerCardsInHand = [];
  isInitialDraw = true;
  cardsInDeck = shuffleCards(CARDS);
  roundWinner = '';

  isContinuedGame = true;

  render();
}

// Completely reset the game.
function resetGame(event) {
  event.preventDefault();
  restartButton.classList.remove('visible');
  init();
}

function handleHitButtonClick() {
  drawPlayerCard();
  // No need to call render here since drawPlayerCard will
  // calls renderPlayerCard, which then calls render()
}

function handleStandButtonClick() {
  roundWinner = checkWinnerOnStand();

  if (roundWinner === '') {
    drawDealerCard();
  }
  render();
}

function checkWinnerOnStand() {
  if (dealerHandValue >= 17) {
    if (dealerHandValue > playerHandValue) {
      return 'dealer';
    } else if (dealerHandValue < playerHandValue) {
      return 'player';
    } else if (dealerHandValue === playerHandValue) {
      return 'push';
    }
  } else if (dealerHandValue < 17) {
    return '';
  }
}

// Adds chip amount to player's current bet amount.
function handleChipClick(event) {
  const chipClass = event.currentTarget.classList[0];
  const chipClassArray = chipClass.split('-');
  const chipValue = Number(chipClassArray[1]);
  playCoinJingle();
  playerDetails.bet += chipValue;
  render();
}

// - Validates initial bet.
// - This will also update the game message state and
//   players details state.
function handleBetButtonClick(event) {
  event.preventDefault();
  const pendingBet = playerDetails.bet;

  if (pendingBet < 1) {
    gameMessage.top = 'You must place a bet of at least $1.00.';
  } else if (pendingBet > playerDetails.cashLeft) {
    gameMessage.top = `You only have $${playerDetails.cashLeft}. You can't exceed that amount.`;
  } else {
    playerDetails.cashLeft -= pendingBet;
    isRoundStarted = true;
    drawInitialCards();
  }
  render();
}

// Clears player's pending bet.
function handleClearBetButtonClick(event) {
  event.preventDefault();
  playerDetails.bet = 0;
  render();
}

// Draw first 2 cards to dealer and player
// at the beginning of a round.
function drawInitialCards() {
  drawPlayerCard();
  drawDealerCard();
  drawPlayerCard();
  drawDealerCard();
  isInitialDraw = false;
  roundWinner = checkForWinnerOnInitialDraw();
}

// Checks for winner on initial draw (ie at the very beginning of the game)
function checkForWinnerOnInitialDraw() {
  if (dealerHandValue === 21 && playerHandValue === 21) {
    return 'push';
  }
  if (dealerHandValue === 21 && playerHandValue < 21) {
    return 'dealer';
  } else if (dealerHandValue < 21 && playerHandValue === 21) {
    return 'player';
  }
  return '';
}

// - Calculates best value for the cards in
//   dealer's or player's hand.
// - Will account Ace value changing from 11 to 1, based
//   on Ace count in hand.
function updateHandTotal(cardsInHand) {
  let handTotal = 0;
  let acesCount = 0;

  cardsInHand.forEach(({ value }) => {
    handTotal += value;
    if (value === 11) {
      acesCount += 1;
    }
  });

  while (handTotal > 21 && acesCount > 0) {
    handTotal -= 10; // - Subract 10 to bring all Ace values (excluding first Ace) to 1.
    acesCount -= 1;
  }

  return handTotal;
}

// - Draw a card for the dealer.
// - Updates dealerCardsInHand and dealerHandValue state.
function drawDealerCard() {
  const cardDeck = [...cardsInDeck];
  const card = cardDeck.pop();

  cardsInDeck = [...cardDeck];
  dealerCardsInHand = [...dealerCardsInHand, card];
  dealerHandValue = updateHandTotal(dealerCardsInHand);

  // Automatically checks for winner upon dealer draw,
  // but only if round continues past first 2 cards dealt.
  if (!isInitialDraw) {
    if (dealerHandValue > 21) {
      roundWinner = 'player';
    } else if (dealerHandValue <= 21) {
      if (dealerHandValue >= 17) {
        if (dealerHandValue === playerHandValue) {
          roundWinner = 'push';
        } else if (dealerHandValue > playerHandValue) {
          roundWinner = 'dealer';
        } else if (dealerHandValue < playerHandValue) {
          roundWinner = 'player';
        }
      } else if (dealerHandValue < 17) {
        drawDealerCard();
      }
    }
  }
  render();
}

// - Draw a card for the player.
// - Updates playerCardsInHand and playerHandValue state.
function drawPlayerCard() {
  const cardDeck = [...cardsInDeck];
  const card = cardDeck.pop();

  cardsInDeck = [...cardDeck];
  playerCardsInHand = [...playerCardsInHand, card];
  playerHandValue = updateHandTotal(playerCardsInHand);

  // Logic for drawing player cards when
  // not the initial draw.
  if (!isInitialDraw) {
    if (playerHandValue > 21) {
      roundWinner = 'dealer';
    } else if (playerHandValue === 21) {
      roundWinner = 'player';
    }
  }
  render();
}

// TODO: Condense some of this logic into a single function
// and apply to renderPlayerCards.
function renderDealerCards() {
  dealerCards.innerHTML = '';
  if (dealerCardsInHand.length > 2) {
    dealerCards.classList.add('stacked');
  }
  dealerCardsInHand.forEach((card, index) => {
    const { src, alt } = card.image;
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    cardDiv.classList.add('card');

    // Shows card design or card face depending on
    // several conditions.
    if (index === 0 && dealerCardsInHand.length <= 2) {
      if (roundWinner === '') {
        cardImg.setAttribute('src', 'images/card-design.svg');
        cardImg.setAttribute('alt', 'Playing card design');
      } else {
        cardImg.setAttribute('src', src);
        cardImg.setAttribute('alt', alt);
      }
    } else {
      cardImg.setAttribute('src', src);
      cardImg.setAttribute('alt', alt);
    }
    cardDiv.appendChild(cardImg);
    dealerCards.appendChild(cardDiv);
  });
}

// TODO: Condense this into a single function
// which can apply to renderDealerCards as well.
function renderPlayerCards() {
  playerCards.innerHTML = '';
  if (playerCardsInHand.length > 2) {
    playerCards.classList.add('stacked');
  }
  playerCardsInHand.forEach((card) => {
    const { src, alt } = card.image;
    const cardDiv = document.createElement('div');
    const cardImg = document.createElement('img');
    cardDiv.classList.add('card');
    cardImg.setAttribute('src', src);
    cardImg.setAttribute('alt', alt);
    cardDiv.appendChild(cardImg);
    playerCards.appendChild(cardDiv);
  });
}

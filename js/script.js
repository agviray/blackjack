/*----- constants -----*/
const CARDS = [
  {
    id: 'ace-clubs',
    image: {
      src: 'images/ace-clubs.svg',
      alt: 'ace of clubs card',
    },
    value: 11,
  },
  {
    id: 'king-clubs',
    image: {
      src: 'images/king-clubs.svg',
      alt: 'king of clubs card',
    },
    value: 10,
  },
  {
    id: 'queen-clubs',
    image: {
      src: 'images/queen-clubs.svg',
      alt: 'queen of clubs card',
    },
    value: 10,
  },
  {
    id: 'jack-clubs',
    image: {
      src: 'images/jack-clubs.svg',
      alt: 'jack of clubs card',
    },
    value: 10,
  },
  {
    id: '10-clubs',
    image: {
      src: 'images/10-clubs.svg',
      alt: '10 of clubs card',
    },
    value: 10,
  },
  {
    id: '9-clubs',
    image: {
      src: 'images/9-clubs.svg',
      alt: '9 of clubs card',
    },
    value: 9,
  },
  {
    id: '8-clubs',
    image: {
      src: 'images/8-clubs.svg',
      alt: '8 of clubs card',
    },
    value: 8,
  },
  {
    id: '7-clubs',
    image: {
      src: 'images/7-clubs.svg',
      alt: '7 of clubs card',
    },
    value: 7,
  },
  {
    id: '6-clubs',
    image: {
      src: 'images/6-clubs.svg',
      alt: '6 of clubs card',
    },
    value: 6,
  },
  {
    id: '5-clubs',
    image: {
      src: 'images/5-clubs.svg',
      alt: '5 of clubs card',
    },
    value: 5,
  },
  {
    id: '4-clubs',
    image: {
      src: 'images/4-clubs.svg',
      alt: '4 of clubs card',
    },
    value: 4,
  },
  {
    id: '3-clubs',
    image: {
      src: 'images/3-clubs.svg',
      alt: '3 of clubs card',
    },
    value: 3,
  },
  {
    id: '2-clubs',
    image: {
      src: 'images/2-clubs.svg',
      alt: '2 of clubs card',
    },
    value: 2,
  },
  {
    id: 'ace-spades',
    image: {
      src: 'images/ace-spades.svg',
      alt: 'ace of spades card',
    },
    value: 11,
  },
  {
    id: 'king-spades',
    image: {
      src: 'images/king-spades.svg',
      alt: 'king of spades card',
    },
    value: 10,
  },
  {
    id: 'queen-spades',
    image: {
      src: 'images/queen-spades.svg',
      alt: 'queen of spades card',
    },
    value: 10,
  },
  {
    id: 'jack-spades',
    image: {
      src: 'images/jack-spades.svg',
      alt: 'jack of spades card',
    },
    value: 10,
  },
  {
    id: '10-spades',
    image: {
      src: 'images/10-spades.svg',
      alt: '10 of spades card',
    },
    value: 10,
  },
  {
    id: '9-spades',
    image: {
      src: 'images/9-spades.svg',
      alt: '9 of spades card',
    },
    value: 9,
  },
  {
    id: '8-spades',
    image: {
      src: 'images/8-spades.svg',
      alt: '8 of spades card',
    },
    value: 8,
  },
  {
    id: '7-spades',
    image: {
      src: 'images/7-spades.svg',
      alt: '7 of spades card',
    },
    value: 7,
  },
  {
    id: '6-spades',
    image: {
      src: 'images/6-spades.svg',
      alt: '6 of spades card',
    },
    value: 6,
  },
  {
    id: '5-spades',
    image: {
      src: 'images/5-spades.svg',
      alt: '5 of spades card',
    },
    value: 5,
  },
  {
    id: '4-spades',
    image: {
      src: 'images/4-spades.svg',
      alt: '4 of spades card',
    },
    value: 4,
  },
  {
    id: '3-spades',
    image: {
      src: 'images/3-spades.svg',
      alt: '3 of spades card',
    },
    value: 3,
  },
  {
    id: '2-spades',
    image: {
      src: 'images/2-spades.svg',
      alt: '2 of spades card',
    },
    value: 2,
  },
  {
    id: 'ace-diamonds',
    image: {
      src: 'images/ace-diamonds.svg',
      alt: 'ace of diamonds card',
    },
    value: 11,
  },
  {
    id: 'king-diamonds',
    image: {
      src: 'images/king-diamonds.svg',
      alt: 'king of diamonds card',
    },
    value: 10,
  },
  {
    id: 'queen-diamonds',
    image: {
      src: 'images/queen-diamonds.svg',
      alt: 'queen of diamonds card',
    },
    value: 10,
  },
  {
    id: 'jack-diamonds',
    image: {
      src: 'images/jack-diamonds.svg',
      alt: 'jack of diamonds card',
    },
    value: 10,
  },
  {
    id: '10-diamonds',
    image: {
      src: 'images/10-diamonds.svg',
      alt: '10 of diamonds card',
    },
    value: 10,
  },
  {
    id: '9-diamonds',
    image: {
      src: 'images/9-diamonds.svg',
      alt: '9 of diamonds card',
    },
    value: 9,
  },
  {
    id: '8-diamonds',
    image: {
      src: 'images/8-diamonds.svg',
      alt: '8 of diamonds card',
    },
    value: 8,
  },
  {
    id: '7-diamonds',
    image: {
      src: 'images/7-diamonds.svg',
      alt: '7 of diamonds card',
    },
    value: 7,
  },
  {
    id: '6-diamonds',
    image: {
      src: 'images/6-diamonds.svg',
      alt: '6 of diamonds card',
    },
    value: 6,
  },
  {
    id: '5-diamonds',
    image: {
      src: 'images/5-diamonds.svg',
      alt: '5 of diamonds card',
    },
    value: 5,
  },
  {
    id: '4-diamonds',
    image: {
      src: 'images/4-diamonds.svg',
      alt: '4 of diamonds card',
    },
    value: 4,
  },
  {
    id: '3-diamonds',
    image: {
      src: 'images/3-diamonds.svg',
      alt: '3 of diamonds card',
    },
    value: 3,
  },
  {
    id: '2-diamonds',
    image: {
      src: 'images/2-diamonds.svg',
      alt: '2 of diamonds card',
    },
    value: 2,
  },
  {
    id: 'ace-hearts',
    image: {
      src: 'images/ace-hearts.svg',
      alt: 'ace of hearts card',
    },
    value: 11,
  },
  {
    id: 'king-hearts',
    image: {
      src: 'images/king-hearts.svg',
      alt: 'king of hearts card',
    },
    value: 10,
  },
  {
    id: 'queen-hearts',
    image: {
      src: 'images/queen-hearts.svg',
      alt: 'queen of hearts card',
    },
    value: 10,
  },
  {
    id: 'jack-hearts',
    image: {
      src: 'images/jack-hearts.svg',
      alt: 'jack of hearts card',
    },
    value: 10,
  },
  {
    id: '10-hearts',
    image: {
      src: 'images/10-hearts.svg',
      alt: '10 of hearts card',
    },
    value: 10,
  },
  {
    id: '9-hearts',
    image: {
      src: 'images/9-hearts.svg',
      alt: '9 of hearts card',
    },
    value: 9,
  },
  {
    id: '8-hearts',
    image: {
      src: 'images/8-hearts.svg',
      alt: '8 of hearts card',
    },
    value: 8,
  },
  {
    id: '7-hearts',
    image: {
      src: 'images/7-hearts.svg',
      alt: '7 of hearts card',
    },
    value: 7,
  },
  {
    id: '6-hearts',
    image: {
      src: 'images/6-hearts.svg',
      alt: '6 of hearts card',
    },
    value: 6,
  },
  {
    id: '5-hearts',
    image: {
      src: 'images/5-hearts.svg',
      alt: '5 of hearts card',
    },
    value: 5,
  },
  {
    id: '4-hearts',
    image: {
      src: 'images/4-hearts.svg',
      alt: '4 of hearts card',
    },
    value: 4,
  },
  {
    id: '3-hearts',
    image: {
      src: 'images/3-hearts.svg',
      alt: '3 of hearts card',
    },
    value: 3,
  },
  {
    id: '2-hearts',
    image: {
      src: 'images/2-hearts.svg',
      alt: '2 of hearts card',
    },
    value: 2,
  },
];

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
const backgroundMusic = document.querySelector('#background-music');
const playBgMusicButton = document.querySelector('.play-music');
const pauseBgMusicButton = document.querySelector('.pause-music');
const bgMusicVolumeControls = document.querySelector('.volume-control');
const gameMessageTop = document.querySelector('.game-message p.top');
const gameMessageBottom = document.querySelector('.game-message p.bottom');
const bettingUI = document.querySelector('.betting-ui');
const betInput = document.querySelector('input.bet-input');
const betButton = document.querySelector('button.bet-button');
const keepPlayingButtons = document.querySelector('.keep-playing-buttons');
const yesButton = keepPlayingButtons.querySelector('.yes-button');
const noButton = keepPlayingButtons.querySelector('.no-button');
const restartButton = document.querySelector('.restart-button');
// - Sound Effects
const positiveBell = new Audio();
positiveBell.src = 'sounds/positive-bell.mp3';
positiveBell.volume = 0.3;
const extraPositiveBell = new Audio();
extraPositiveBell.src = 'sounds/extra-positive-bell.mp3';
extraPositiveBell.volume = 0.3;
const negativeBell = new Audio();
negativeBell.src = 'sounds/negative-bell.mp3';
negativeBell.volume = 0.3;
/*----- event listeners -----*/
playBgMusicButton.addEventListener('click', playBgMusic);
pauseBgMusicButton.addEventListener('click', pauseBgMusic);
bgMusicVolumeControls.addEventListener('change', handleVolumeChange);
betButton.addEventListener('click', handleBetButtonClick);
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
}

function renderRoundWinnerSFX() {
  if (roundWinner === 'player') {
    if (playerCardsInHand.length === 2 && playerHandValue === 21) {
      extraPositiveBell.play();
    } else {
      positiveBell.play();
    }
  } else if (roundWinner === 'dealer' || roundWinner === 'push') {
    negativeBell.play();
  }
}

// - Play/Pause background music.
function playBgMusic(event) {
  event.preventDefault();
  backgroundMusic.play();
}
function pauseBgMusic(event) {
  event.preventDefault();
  backgroundMusic.pause();
}

backgroundMusic.volume = 0.25; // Set bg music to start at 25% volume
function handleVolumeChange(event) {
  backgroundMusic.volume = event.target.value;
}

// - Renders game message to DOM.
function renderGameMessage() {
  if (isInitialDraw === true) {
    gameMessageTop.innerText = gameMessage.top;
    gameMessageBottom.innerText = gameMessage.bottom;
  }
  if (isInitialDraw === false) {
    if (roundWinner === '') {
      if (dealerCardsInHand.length === 2) {
        const dealerUpCard = dealerCardsInHand[1].id
          .split('-')
          .join(' of ')
          .toUpperCase();
        gameMessageTop.innerText = `Dealer upcard: ${dealerUpCard}`;
      } else {
        gameMessageTop.innerText = `Dealer hand: ${dealerHandValue}`;
      }
      gameMessageBottom.innerText = `Your hand: ${playerHandValue}`;
    } else {
      if (roundWinner === 'push') {
        gameMessageTop.innerText = `PUSH! Nobody wins.`;
      } else if (roundWinner === 'dealer') {
        if (dealerHandValue === 21) {
          gameMessageTop.innerText = `DEALER WINS! Their hand of ${dealerHandValue} beats your hand of ${playerHandValue}!`;
        } else {
          if (playerHandValue > 21) {
            gameMessageTop.innerText = `YOU BUST, DEALER WINS! Your hand of ${playerHandValue} exceeds 21!`;
          } else {
            gameMessageTop.innerText = `DEALER WINS! Their hand of ${dealerHandValue} beats your hand of ${playerHandValue}!`;
          }
        }
      } else if (roundWinner === 'player') {
        if (playerHandValue === 21) {
          gameMessageTop.innerText = `YOU WIN! Your hand of ${playerHandValue} beats the dealer's hand of ${dealerHandValue}!`;
        } else {
          if (dealerHandValue > 21) {
            gameMessageTop.innerText = `DEALER BUSTS, YOU WIN! Their hand of ${dealerHandValue} exceeds 21!`;
          } else {
            gameMessageTop.innerText = `YOU WIN! Your hand of ${playerHandValue} beats the dealer's hand of ${dealerHandValue}!`;
          }
        }
      }
      gameMessageBottom.innerText = `Keep playing?`;
    }
  }
}

// - Renders the betting UI
function renderMessageUI() {
  // - Toggle visibility of betting UI
  if (isRoundStarted) {
    bettingUI.classList.add('removed');
  } else {
    bettingUI.classList.remove('removed');
  }
  // - Toggle visibility of the "continue playing" buttons.
  if (roundWinner !== '') {
    keepPlayingButtons.classList.add('visible');
  } else {
    keepPlayingButtons.classList.remove('visible');
  }
}

// - Renders player details content.
function renderPlayerDetails() {
  updatePlayerDetails();
  currentBet.innerText = playerDetails.bet.toFixed(2);
  cashLeft.innerText = playerDetails.cashLeft.toFixed(2);
}

// - Updates player details (bet/cashLeft) according to
//   roundWinner outcome of most recent round.
function updatePlayerDetails() {
  if (isRoundStarted && roundWinner !== '') {
    if (roundWinner === 'player') {
      playerDetails.cashLeft += playerDetails.bet * 2;
    } else if (roundWinner === 'push') {
      playerDetails.cashLeft += playerDetails.bet;
    }
    playerDetails.bet = 0.0;
  }
}

// - Toggle visibility of player controls ui.
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

// - Continues game current game with updated playerDetails (bet/cashLeft)
//   depending on roundWinner outcome of most recent round.
function handleYesButtonClick(event) {
  event.preventDefault();
  if (
    isRoundStarted &&
    playerDetails.bet === 0 &&
    (playerDetails.cashLeft === 0 || playerDetails.cashLeft < 1)
  ) {
    gameMessage.top = `Sorry, minimum buy-in is $1.00, and you have $${playerDetails.cashLeft.toFixed(
      2
    )} ${
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

// - Completely reset the game.
function resetGame(event) {
  event.preventDefault();
  restartButton.classList.remove('visible');
  init();
}

function handleHitButtonClick() {
  drawPlayerCard();
  // - No need to call render here since drawPlayerCard will
  //   calls renderPlayerCard, which then calls render()
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

// - Validates initial bet.
// - This will also update the game message state and
//   players details state.
function handleBetButtonClick(event) {
  event.preventDefault();

  if (betInput.value < 1) {
    gameMessage.top = 'You must enter at least $1.00';
  } else if (betInput.value > playerDetails.cashLeft) {
    gameMessage.top = `You only have $${playerDetails.cashLeft.toFixed(
      2
    )}. You can't exceed that amount.`;
  } else {
    let bet = Number(parseFloat(betInput.value));
    betInput.value = ''; // Clear input of betting UI.
    playerDetails.bet = bet;
    playerDetails.cashLeft -= bet;
    isRoundStarted = true;
    drawInitialCards();
  }
  render();
}

// - Draw first 2 cards to dealer and player
//   at the beginning of a round.
function drawInitialCards() {
  drawPlayerCard();
  drawDealerCard();
  drawPlayerCard();
  drawDealerCard();
  isInitialDraw = false;
  roundWinner = checkForWinnerOnInitialDraw();
}

// - Checks for winner on initial draw (ie at the very beginning of the game)
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
  const card = cardDeck.shift();

  cardsInDeck = [...cardDeck];
  dealerCardsInHand = [...dealerCardsInHand, card];
  dealerHandValue = updateHandTotal(dealerCardsInHand);

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
  const card = cardDeck.shift();

  cardsInDeck = [...cardDeck];
  playerCardsInHand = [...playerCardsInHand, card];
  playerHandValue = updateHandTotal(playerCardsInHand);

  // - Logic for drawing player cards when
  //   not the initial draw.
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

    // - Shows card design or card face depending on
    //  several conditions.
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

// - Shuffles full deck of cards.
// - Only used to initialize deckInCards when init is first invoked.
function shuffleCards(cards) {
  // - Loop through all cards.
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // - Swap card[i] position with card[j] using
    //   destructuring assignment.
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

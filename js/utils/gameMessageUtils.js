// Returns message for a "push" round result.
// A "push" is when the dealer's hand value equals the player's hand value.
// - Technically the player "wins" because they get to keep their money in this situation.
export function getPushWinnerMessage() {
  return 'PUSH! Your bet is returned.';
}

// Return message for dealer win round result.
export function getDealerWinnerMessage(dealerCardsValue, playerCardsValue) {
  let topMessage = '';

  if (playerCardsValue > 21) {
    topMessage = `YOU BUST, DEALER WINS! Your hand of ${playerCardsValue} exceeds 21!`;
  } else {
    topMessage = `DEALER WINS! Their hand of ${dealerCardsValue} beats your hand of ${playerCardsValue}!`;
  }

  return {
    topMessage: topMessage,
  };
}

// Return message for player win round result.
export function getPlayerWinnerMessage(dealerCardsValue, playerCardsValue) {
  let topMessage = '';

  if (dealerCardsValue > 21) {
    topMessage = `DEALER BUSTS, YOU WIN! Their hand of ${dealerCardsValue} exceeds 21!`;
  } else {
    topMessage = `YOU WIN! Your hand of ${playerCardsValue} beats the dealer's hand of ${dealerCardsValue}!`;
  }

  return {
    topMessage: topMessage,
  };
}

// Returns message describing the current values of the dealer's and player's cards in hand.
export function getGameInProgressMessage(
  dealerCards,
  dealerCardsValue,
  playerCardsValue
) {
  let topMessage = '';
  let bottomMessage = '';
  if (dealerCards.length === 2) {
    const dealerUpCard = dealerCards[1].id
      .split('-')
      .join(' of ')
      .toUpperCase();
    topMessage = `Dealer upcard: ${dealerUpCard}`;
  } else {
    topMessage = `Dealer hand: ${dealerCardsValue}`;
  }
  bottomMessage = `Your hand: ${playerCardsValue}`;

  return {
    topMessage: topMessage,
    bottomMessage: bottomMessage,
  };
}

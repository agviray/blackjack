const positiveBell = new Audio();
positiveBell.src = 'sounds/positive-bell.mp3';
positiveBell.volume = 0.3;

const extraPositiveBell = new Audio();
extraPositiveBell.src = 'sounds/extra-positive-bell.mp3';
extraPositiveBell.volume = 0.3;

const negativeBell = new Audio();
negativeBell.src = 'sounds/negative-bell.mp3';
negativeBell.volume = 0.3;

export function playSoundEffect(winner, playerCards, playerCardValue) {
  if (winner === 'player') {
    if (playerCards.length === 2 && playerCardValue === 21) {
      extraPositiveBell.play();
    } else {
      positiveBell.play();
    }
  } else if (winner === 'dealer' || winner === 'push') {
    negativeBell.play();
  }
}

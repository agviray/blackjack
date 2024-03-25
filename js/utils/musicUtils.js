export const backgroundMusic = document.querySelector('#background-music');
export const playBgMusicButton = document.querySelector('.play-music');
export const pauseBgMusicButton = document.querySelector('.pause-music');
export const bgMusicVolumeControls = document.querySelector('.volume-control');

// Set bg music to start at 25% volume
backgroundMusic.volume = 0.25;

export function handlePlayButtonClick(event) {
  event.preventDefault();
  backgroundMusic.play();
}

export function handlePauseButtonClick(event) {
  event.preventDefault();
  backgroundMusic.pause();
}

export function handleVolumeChange(event) {
  backgroundMusic.volume = event.target.value;
}

document.addEventListener('DOMContentLoaded', function() {
  const toggleCards = document.getElementById('toggleCards');
  const cardPack = document.getElementById('large-card-pack');
  const pauseButton = document.getElementById('pauseButton');
  const backgroundAudio = document.getElementById('backgroundAudio');
});
  cardPack.addEventListener('click', function() {
    toggleCards.checked = !toggleCards.checked;
  });

  document.getElementById('pauseButton').addEventListener('click', function() {
    var audio = document.getElementById('backgroundAudio');
    if (audio.paused) {
      audio.play();
      this.innerText = 'Pause';
    } else {
      audio.pause();
      this.innerText = 'Play';
    }
  });
  


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
  
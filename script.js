function openCardPack() {
    var largeCardPack = document.getElementById('large-card-pack');
    var smallCardPacksContainer = document.getElementById('small-card-packs');
  
    // Check if large card pack exists
    if (!largeCardPack) {
      console.error('Large card pack not found!');
      return;
    }
  
    // Remove the large card pack
    largeCardPack.remove();
  
    // Create smaller card packs
    for (var i = 1; i <= 3; i++) {
      var smallCardPack = document.createElement('div');
      smallCardPack.className = 'card-pack';
      
      // Create an image button for opening the pack
      var openButton = document.createElement('img');
      openButton.className = 'open-button';
      openButton.onclick = function() {
        this.parentNode.remove(); // Remove the parent (the small card pack) when the image is clicked
      };
      
      smallCardPack.appendChild(openButton);
      
      for (var j = 1; j <= 3; j++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerText = 'Card ' + ((i - 1) * 3 + j);
        smallCardPack.appendChild(card);
      }
      smallCardPacksContainer.appendChild(smallCardPack);
    }
  }
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
  
var game = document.getElementById("memory-game");
var cardSize = 100;
var cardSpacing = 10;
var columns = 4;
var lines = 4;

createGame();
function createGame() {
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < lines; y++) {
      createCards(x);
    }
  }
}

//Create the default card
function createCards(x) {
  var card = document.createElement("img");

  card.src = "./assets/img/back.png";
  card.style.position = "absolute";
  card.style.left = x * (cardSize + cardSpacing) + cardSpacing + "px";
  card.style.top = x * (cardSize + cardSpacing) + cardSpacing + "px";
  game.appendChild(card);
}

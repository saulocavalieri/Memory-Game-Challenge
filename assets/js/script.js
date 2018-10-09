var game = document.getElementById("memory-game");
var cardSize = 100;
var cardSpacing = 10;

createCards();

//Create the default card
function createCards() {
  var card = document.createElement("img");

  card.src = "./assets/img/back.png";
  card.style.position = "absolute";
  card.style.left = 1 * (cardSize + cardSpacing) + cardSpacing + "px";
  card.style.top = 1 * (cardSize + cardSpacing) + cardSpacing + "px";
  game.appendChild(card);
}

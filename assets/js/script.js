var game = document.getElementById("memory-game");

var cardSize = 100;
var cardSpacing = 10;
var columns = 4;
var lines = 4;
var firstOption = null;
var secondOption = null;

createGame(columns, lines);

function createGame(columns, lines) {
  var vector = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < lines; y++) {
      createCards(vector.pop(), x, y);
    }
  }
}

//Create the default card
function createCards(cardNum, posX, posY) {
  var card = document.createElement("img");
  card.num = cardNum;
  card.src = "./assets/img/back.png";
  card.style.position = "absolute";
  card.style.left = 10 + posX * (cardSize + cardSpacing) + 8 + "px";
  card.style.top = 15 + posY * (cardSize + cardSpacing) + 75 + "px";
  card.onclick = clickedCard;
  game.appendChild(card);
}

//Selected card by the user
function clickedCard(e) {
  var clicked = e.target;

  clicked.src = "./assets/img/card" + clicked.num + ".png";
}

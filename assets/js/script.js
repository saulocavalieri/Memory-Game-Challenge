var game = document.getElementById("memory-game");

createCards();
//Create the default card
function createCards() {
  var card = document.createElement("img");
  card.src = "./assets/img/back.png";
  card.style.position = "absolute";
  card.style.left = "100px";
  card.style.top = "100px";
  game.appendChild(card);
}

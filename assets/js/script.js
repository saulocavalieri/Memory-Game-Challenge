var game = document.getElementById("memory-game");

var cardSize = 100;
var cardSpacing = 10;
var columns = 4;
var lines = 4;
var firstOption = null;
var secondOption = null;

createGame(columns, lines);

function createGame(columns, lines) {
  //Create a vector with columns and lines informed
  var vector = [];
  for (var k = 0; k < (columns * lines) / 2; k++) {
    vector.push(k);
    vector.push(k);
  }

  //Create a shuffle vector
  var shuffle = [];
  while (vector.length > 0) {
    var random = Math.floor(Math.random() * vector.length);
    shuffle.push(vector[random]);
    vector.splice(random, 1);
  }

  //Generate with my shuffle vector
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < lines; y++) {
      createCards(shuffle.pop(), x, y);
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

  if (firstOption == null) {
    clicked.src = "./assets/img/card" + clicked.num + ".png";
    firstOption = clicked;
    
  } else if (firstOption == clicked) {
    firstOption.src = "./assets/img/back.png";
    firstOption = null;
    
  } else if (secondOption == null) {
    clicked.src = "./assets/img/card" + clicked.num + ".png";
    secondOption = clicked;
    setTimeout(checkOptions, 1000);
  }
}

function checkOptions() {
  if (firstOption.num == secondOption.num) {
    game.removeChild(firstOption);
    game.removeChild(secondOption);
  } else {
    firstOption.src = "./assets/img/back.png";
    secondOption.src = "./assets/img/back.png";
  }

  firstOption = null;
  secondOption = null;
}

var game = document.getElementById("memory-game");

var cardSize = 100;
var cardSpacing = 10;
var columns = 4;
var lines = 4;
var firstOption = null;
var secondOption = null;
var size = (columns * lines) / 2;
var endGame = 0;
var storage = null;

createGame(columns, lines);

function createGame(columns, lines) {
  //Create a vector with columns and lines informed
  var vector = [];
  for (var k = 0; k < size; k++) {
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
  //webkit below - prevent drag and select all the images
  card.style.cssText =
    "-webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -o-user-select: none; user-select: none; -webkit-user-drag: none; -khtml-user-drag: none; -moz-user-drag: none; -o-user-drag: none; user-drag: none;";
  card.style.position = "absolute";
  card.style.left = posX * (cardSize + cardSpacing) + cardSpacing + "px";
  card.style.top = posY * (cardSize + cardSpacing) + cardSpacing + "px";
  card.onclick = clickedCard;
  game.appendChild(card);
}

//Selected card by the user
function clickedCard(e) {
  if (storage != null) {
    clearTimeout(storage);
    checkOptions();
  }

  var clicked = e.target;
  clicked.src = "./assets/img/card" + clicked.num + ".png";

  if (firstOption == null) {
    firstOption = clicked;
  } else if (firstOption == clicked) {
    firstOption.src = "./assets/img/back.png";
    firstOption = null;
  } else if (secondOption == null) {
    secondOption = clicked;
    storage = setTimeout(checkOptions, 1000);
  }
}

function checkOptions() {
  if (firstOption.num == secondOption.num) {
    game.removeChild(firstOption);
    game.removeChild(secondOption);
    endGame++;
    if (endGame >= size) {
      thanksCiandt();
    }
  } else {
    firstOption.src = "./assets/img/back.png";
    secondOption.src = "./assets/img/back.png";
  }

  firstOption = null;
  secondOption = null;
  storage = null;
}


function thanksCiandt() {
  document.getElementById("end-game").style.visibility = "visible";
}

function reset() {
  window.location.reload(true);
}

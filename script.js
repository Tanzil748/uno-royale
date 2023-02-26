const cardArray = [
  // blue cards
  {
    img: "images/blue_0.png",
    color: "blue",
    value: 0,
  },
  {
    img: "images/blue_1.png",
    color: "blue",
    value: 1,
  },
  {
    img: "images/blue_2.png",
    color: "blue",
    value: 2,
  },
  {
    img: "images/blue_3.png",
    color: "blue",
    value: 3,
  },
  {
    img: "images/blue_4.png",
    color: "blue",
    value: 4,
  },
  {
    img: "images/blue_5.png",
    color: "blue",
    value: 5,
  },
  {
    img: "images/blue_6.png",
    color: "blue",
    value: 6,
  },
  {
    img: "images/blue_7.png",
    color: "blue",
    value: 7,
  },
  {
    img: "images/blue_8.png",
    color: "blue",
    value: 8,
  },
  {
    img: "images/blue_9.png",
    color: "blue",
    value: 9,
  },
  {
    img: "images/blue_plus2.png",
    color: "blue",
    value: 10,
  },
  {
    img: "images/blue_reverseDirection.png",
    color: "blue",
    value: 11,
  },
  {
    img: "images/blue_skip.png",
    color: "blue",
    value: 12,
  },

  // green cards
  {
    img: "images/green_0.png",
    color: "green",
    value: 0,
  },
  {
    img: "images/green_1.png",
    color: "green",
    value: 1,
  },
  {
    img: "images/green_2.png",
    color: "green",
    value: 2,
  },
  {
    img: "images/green_3.png",
    color: "green",
    value: 3,
  },
  {
    img: "images/green_4.png",
    color: "green",
    value: 4,
  },
  {
    img: "images/green_5.png",
    color: "green",
    value: 5,
  },
  {
    img: "images/green_6.png",
    color: "green",
    value: 6,
  },
  {
    img: "images/green_7.png",
    color: "green",
    value: 7,
  },
  {
    img: "images/green_8.png",
    color: "green",
    value: 8,
  },
  {
    img: "images/green_9.png",
    color: "green",
    value: 9,
  },
  {
    img: "images/green_plus2.png",
    color: "green",
    value: 10,
  },
  {
    img: "images/green_reverseDirection.png",
    color: "green",
    value: 11,
  },
  {
    img: "images/green_skip.png",
    color: "green",
    value: 12,
  },

  // red cards
  {
    img: "images/red_0.png",
    color: "red",
    value: 0,
  },
  {
    img: "images/red_1.png",
    color: "red",
    value: 1,
  },
  {
    img: "images/red_2.png",
    color: "red",
    value: 2,
  },
  {
    img: "images/red_3.png",
    color: "red",
    value: 3,
  },
  {
    img: "images/red_4.png",
    color: "red",
    value: 4,
  },
  {
    img: "images/red_5.png",
    color: "red",
    value: 5,
  },
  {
    img: "images/red_6.png",
    color: "red",
    value: 6,
  },
  {
    img: "images/red_7.png",
    color: "red",
    value: 7,
  },
  {
    img: "images/red_8.png",
    color: "red",
    value: 8,
  },
  {
    img: "images/red_9.png",
    color: "red",
    value: 9,
  },
  {
    img: "images/red_plus2.png",
    color: "red",
    value: 10,
  },
  {
    img: "images/red_reverseDirection.png",
    color: "red",
    value: 11,
  },
  {
    img: "images/red_skip.png",
    color: "red",
    value: 12,
  },

  // yellow cards
  {
    img: "images/yellow_0.png",
    color: "yellow",
    value: 0,
  },
  {
    img: "images/yellow_1.png",
    color: "yellow",
    value: 1,
  },
  {
    img: "images/yellow_2.png",
    color: "yellow",
    value: 2,
  },
  {
    img: "images/yellow_3.png",
    color: "yellow",
    value: 3,
  },
  {
    img: "images/yellow_4.png",
    color: "yellow",
    value: 4,
  },
  {
    img: "images/yellow_5.png",
    color: "yellow",
    value: 5,
  },
  {
    img: "images/yellow_6.png",
    color: "yellow",
    value: 6,
  },
  {
    img: "images/yellow_7.png",
    color: "yellow",
    value: 7,
  },
  {
    img: "images/yellow_8.png",
    color: "yellow",
    value: 8,
  },
  {
    img: "images/yellow_9.png",
    color: "yellow",
    value: 9,
  },
  {
    img: "images/yellow_plus2.png",
    color: "yellow",
    value: 10,
  },
  {
    img: "images/yellow_reverseDirection.png",
    color: "yellow",
    value: 11,
  },
  {
    img: "images/yellow_skip.png",
    color: "yellow",
    value: 12,
  },

  // wild cards
  {
    img: "images/wild_plus4_1.png",
    color: "black",
    value: 13,
  },
  {
    img: "images/wild_plus4_2.png",
    color: "black",
    value: 13,
  },
  {
    img: "images/wild_plus4_3.png",
    color: "black",
    value: 13,
  },
  {
    img: "images/wild_plus4_4.png",
    color: "black",
    value: 13,
  },
  {
    img: "images/wildCard_1.png",
    color: "black",
    value: 14,
  },
  {
    img: "images/wildCard_2.png",
    color: "black",
    value: 14,
  },
  {
    img: "images/wildCard_3.png",
    color: "black",
    value: 14,
  },
  {
    img: "images/wildCard_4.png",
    color: "black",
    value: 14,
  },
];

const placedCardsDisplay = document.getElementById("placedCardsDisplay");
const playerDeckDisplay = document.querySelector(".playerCardContainer");
const originalDeckDisplay = document.getElementById("originalDeck");
const computerCardCount = document.querySelector(".computerCardCount");
const playerCardCount = document.querySelector(".playerCardCount");

let playerDeck = [];
let computerDeck = [];
let placedCards = [];

// child variables used in selectImage calls
let originalDeckBack;
let latestPlacedCard;
let playerCards;

// select an element or class from html file & set images to it (used in roundStart function)
function selectImage(parentVariable, childVariable, imageLink) {
  childVariable = document.createElement("img");
  childVariable.setAttribute("src", imageLink);
  childVariable.style.width = "100px";
  childVariable.style.borderRadius = "10px";
  parentVariable.append(childVariable);
}

const roundStart = () => {
  // randomly shuffle array
  const randomShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  randomShuffle(cardArray);

  // player & computer each given 7 cards while mutating original deck
  playerDeck = cardArray.splice(0, 7);
  computerDeck = cardArray.splice(0, 7);

  // this is starting placed card taken from the back of deck
  placedCards = cardArray.pop();

  // original card deck (facedown)
  selectImage(originalDeckDisplay, originalDeckBack, "images/unoBackdrop.png");

  // this shows latest placed card
  selectImage(placedCardsDisplay, latestPlacedCard, placedCards.img);

  // displays player deck on screen
  for (let i = 0; i < playerDeck.length; i++) {
    selectImage(playerDeckDisplay, playerCards, playerDeck[i].img);
  }
};

roundStart();

// computer/player card count
computerCardCount.innerText = computerDeck.length;
playerCardCount.innerText = playerDeck.length;

console.log(cardArray);
console.log(playerDeck);
console.log(computerDeck);
console.log(placedCards);

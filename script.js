const originalDeck = [
  // blue cards
  {
    cardFace: "images/blue_0.png",
    color: "blue",
    value: 0,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_1.png",
    color: "blue",
    value: 1,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_2.png",
    color: "blue",
    value: 2,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_3.png",
    color: "blue",
    value: 3,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_4.png",
    color: "blue",
    value: 4,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_5.png",
    color: "blue",
    value: 5,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_6.png",
    color: "blue",
    value: 6,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_7.png",
    color: "blue",
    value: 7,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_8.png",
    color: "blue",
    value: 8,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_9.png",
    color: "blue",
    value: 9,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_plus2.png",
    color: "blue",
    value: 10,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_reverseDirection.png",
    color: "blue",
    value: 11,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/blue_skip.png",
    color: "blue",
    value: 12,
    cardBack: "images/unoBackdrop.png",
  },

  // green cards
  {
    cardFace: "images/green_0.png",
    color: "green",
    value: 0,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_1.png",
    color: "green",
    value: 1,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_2.png",
    color: "green",
    value: 2,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_3.png",
    color: "green",
    value: 3,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_4.png",
    color: "green",
    value: 4,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_5.png",
    color: "green",
    value: 5,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_6.png",
    color: "green",
    value: 6,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_7.png",
    color: "green",
    value: 7,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_8.png",
    color: "green",
    value: 8,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_9.png",
    color: "green",
    value: 9,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_plus2.png",
    color: "green",
    value: 10,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_reverseDirection.png",
    color: "green",
    value: 11,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/green_skip.png",
    color: "green",
    value: 12,
    cardBack: "images/unoBackdrop.png",
  },

  // red cards
  {
    cardFace: "images/red_0.png",
    color: "red",
    value: 0,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_1.png",
    color: "red",
    value: 1,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_2.png",
    color: "red",
    value: 2,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_3.png",
    color: "red",
    value: 3,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_4.png",
    color: "red",
    value: 4,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_5.png",
    color: "red",
    value: 5,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_6.png",
    color: "red",
    value: 6,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_7.png",
    color: "red",
    value: 7,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_8.png",
    color: "red",
    value: 8,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_9.png",
    color: "red",
    value: 9,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_plus2.png",
    color: "red",
    value: 10,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_reverseDirection.png",
    color: "red",
    value: 11,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/red_skip.png",
    color: "red",
    value: 12,
    cardBack: "images/unoBackdrop.png",
  },

  // yellow cards
  {
    cardFace: "images/yellow_0.png",
    color: "yellow",
    value: 0,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_1.png",
    color: "yellow",
    value: 1,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_2.png",
    color: "yellow",
    value: 2,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_3.png",
    color: "yellow",
    value: 3,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_4.png",
    color: "yellow",
    value: 4,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_5.png",
    color: "yellow",
    value: 5,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_6.png",
    color: "yellow",
    value: 6,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_7.png",
    color: "yellow",
    value: 7,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_8.png",
    color: "yellow",
    value: 8,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_9.png",
    color: "yellow",
    value: 9,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_plus2.png",
    color: "yellow",
    value: 10,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_reverseDirection.png",
    color: "yellow",
    value: 11,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/yellow_skip.png",
    color: "yellow",
    value: 12,
    cardBack: "images/unoBackdrop.png",
  },

  // wild cards
  {
    cardFace: "images/wild_plus4_1.png",
    color: "black",
    value: 13,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wild_plus4_2.png",
    color: "black",
    value: 13,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wild_plus4_3.png",
    color: "black",
    value: 13,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wild_plus4_4.png",
    color: "black",
    value: 13,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wildCard_1.png",
    color: "black",
    value: 14,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wildCard_2.png",
    color: "black",
    value: 14,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wildCard_3.png",
    color: "black",
    value: 14,
    cardBack: "images/unoBackdrop.png",
  },
  {
    cardFace: "images/wildCard_4.png",
    color: "black",
    value: 14,
    cardBack: "images/unoBackdrop.png",
  },
];

const compHandDisplay = document.getElementById("compHand");
const playerHandDisplay = document.getElementById("playerHand");
const originalDeckDisplay = document.getElementById("originalDeck");
const placedCardsDisplay = document.getElementById("placedCards");

// used to display card decks on screen
const displayDeck = (variableSelector, imageLink) => {
  let card = document.createElement("img");
  card.setAttribute("src", imageLink);
  card.style.width = "100px";
  card.style.borderRadius = "10px";
  variableSelector.append(card);
};

// this is the initial conditions of a game when it starts
const roundStart = () => {
  let playerDeck = [];
  let computerDeck = [];
  let placedCards = [];

  // randomly shuffle array
  const randomShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  randomShuffle(originalDeck);

  // player & computer each given 7 cards while mutating original deck
  playerDeck = originalDeck.splice(0, 7);
  computerDeck = originalDeck.splice(0, 7);
  placedCards = originalDeck.pop();

  // displaying all decks
  for (let i = 0; i < computerDeck.length; i++) {
    displayDeck(compHandDisplay, computerDeck[i].cardBack);
  }
  for (let i = 0; i < playerDeck.length; i++) {
    displayDeck(playerHandDisplay, playerDeck[i].cardFace);
  }
  displayDeck(
    originalDeckDisplay,
    originalDeck[originalDeck.length - 1].cardBack
  );
  displayDeck(placedCardsDisplay, placedCards.cardFace);

  console.log(playerDeck);
  console.log(computerDeck);
  console.log(placedCards);
  console.log(originalDeck);
};

roundStart();

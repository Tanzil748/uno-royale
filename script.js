const cardArray = [
  {
    img: "images/blue_0.png",
  },
];

// console.log(cardArray[0]);

const playerCardDisplay = document.getElementById("playerCardDisplay");
const playerCards = document.querySelector(".playerCards");

const card = playerCardDisplay.createElement("img");
// card.setAttribute("src", cardArray[0].img);
card.textContent = text;
playerCards.appendChild(card);

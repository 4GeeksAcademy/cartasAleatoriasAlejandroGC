/* eslint-disable */
import "bootstrap";
import "./style.css";

const symbols = ["♦", "♥", "♠", "♣"];
const cardsValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function renderCard(symbol, value) {
  let color = "";
  if (symbol === "♦" || symbol === "♥") color = "text-danger";

  document.querySelector(".card").innerHTML = `
    <div class="symbol d-flex align-items-center ${color} h-25">${symbol}</div>
    <div class="value d-flex align-items-center justify-content-center h-50">${value}</div>
    <div class="symbol reverse d-flex align-items-center ${color} h-25">${symbol}</div>`;
}

window.onload = function() {
  newCard();
  const card = document.getElementById("card");
  let intervalID;

  const newCardBtn = document.getElementById("newCardBtn");
  const cardWidth = document.getElementById("cardWidth");
  const cardHeight = document.getElementById("cardHeight");
  const timeSelect = document.getElementById("timeSelect");

  newCardBtn.addEventListener("click", newCard);

  cardWidth.addEventListener("change", () => {
    card.style.width = `${cardWidth.value}px`;
    cardHeight.value = "";
    cardWidth.value > 100
      ? (card.style.fontSize = `${cardWidth.value / 2.8}px`)
      : (card.style.fontSize = `39px`);
  });
  cardHeight.addEventListener("change", () => {
    card.style.width = `${(cardHeight.value * 6) / 9}px`;
    cardWidth.value = "";
    cardHeight.value > 150
      ? (card.style.fontSize = `${((cardHeight.value / 2.8) * 6) / 9}px`)
      : (card.style.fontSize = `39px`);
  });

  timeSelect.addEventListener("change", () => {
    clearInterval(intervalID);
    if (timeSelect.value !== "disabled") {
      intervalID = setInterval(newCard, parseInt(timeSelect.value * 1000));
    }
  });
};

function newCard() {
  let cardSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  let cardValue = cardsValues[Math.floor(Math.random() * cardsValues.length)];
  renderCard(cardSymbol, cardValue);
}

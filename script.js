"use strict";
const nav = document.querySelector(".nav");
const randomBtn = document.querySelector(".btn");
const colorName = document.querySelector("div > p");
const box = document.querySelector(".box");
const container = document.querySelector(".container");

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const updateUI = function (color) {
  colorName.textContent = color;
  document.body.style.backgroundColor = color;
};

const randomColorHex = function () {
  const hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexColor = "#";
  for (let x = 0; x < 6; x++) {
    hexColor += hexCharacters[randomNumber(0, hexCharacters.length - 1)];
  }

  return hexColor;
};

const randomColorRgb = function () {
  let rgbColor = `RGB(${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )}, ${randomNumber(0, 255)})`;

  return rgbColor;
};

const showContainer = function () {
  container.classList.remove("hidden");
};

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("h1");
  if (!clicked) return;
  showContainer();
  colorName.textContent =
    clicked.textContent === "HEX" ? "#_______" : "RGB(___, ___, ___,)";
  const changeColor = function () {
    clicked.textContent === "HEX"
      ? updateUI(randomColorHex())
      : updateUI(randomColorRgb());
  };
  clicked.textContent === "HEX"
    ? randomBtn.addEventListener("click", changeColor)
    : randomBtn.addEventListener("click", changeColor);
});

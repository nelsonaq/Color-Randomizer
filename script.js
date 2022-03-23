"use strict";
const nav = document.querySelector(".nav");
const hexText = document.querySelector(".hex");
const rgbText = document.querySelector(".rgb");
const randomBtn = document.querySelector(".btn");
const colorName = document.querySelector("div > p");
const container = document.querySelector(".container");

/**
 * Generates a random number between the given parameters
 * @param {number} min - The minumum number
 * @param {number} max - The maximum number
 * @returns {number} A random number between the given arguments
 */
const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Renders the color code and background color on the DOM
 * @param {string} color - The color that gets rendered
 */
const updateUI = function (color) {
  colorName.textContent = color;
  document.body.style.backgroundColor = color;
};

/**
 * Generates a random hexadecimal color code
 * @returns {string} A hexadecimal color code
 */
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

/**
 * Generates a random rgba color code
 * @returns {string} A rgba color code
 */
const randomColorRgb = function () {
  let rgbColor = `RGB(${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )}, ${randomNumber(0, 255)})`;

  return rgbColor;
};

/**
 * Displays the color randomizer once an initial color type has been selected
 */
const showContainer = function () {
  container.classList.remove("hidden");
  nav.style.fontSize = "1rem";
  nav.style.height = "8vh";
};

const activePage = function (activePage) {
  if (activePage) {
    colorName.textContent = "#_______";

    hexText.style.textShadow = `0 0 1rem rgb(66, 133, 244)`;
    hexText.style.opacity = 1;

    rgbText.style.textShadow = `0 0 0 rgb(219, 68, 55)`;
    rgbText.style.opacity = 0.4;
  }
  if (!activePage) {
    colorName.textContent = "RGB(___, ___, ___,)";

    rgbText.style.textShadow = `0 0 1rem rgb(219, 68, 55)`;
    rgbText.style.opacity = 1;

    hexText.style.textShadow = `0 0 0 rgb(66, 133, 244)`;
    hexText.style.opacity = 0.4;
  }
};

nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("h1");
  if (!clicked) return;
  const active = clicked.textContent === "HEX";
  showContainer();
  activePage(active);
  const changeColor = function () {
    active ? updateUI(randomColorHex()) : updateUI(randomColorRgb());
  };
  randomBtn.addEventListener("click", changeColor);
});

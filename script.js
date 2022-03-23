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
const renderColor = function (color) {
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

/**
 * Displays which color type is active
 * @param {boolean} activeColorType - If true, it means HEX is the active color type else it's RGB
 */
const activeColorTypeUI = function (activeColorType) {
  if (activeColorType) {
    colorName.textContent = "#_______";

    hexText.classList.toggle("active");
    rgbText.classList.toggle("inactive");

    hexText.classList.remove("inactive");
  }
  if (!activeColorType) {
    colorName.textContent = "RGB(___, ___, ___,)";

    rgbText.classList.toggle("active");
    hexText.classList.toggle("inactive");

    rgbText.classList.remove("inactive");
  }
};

/**
 * An event listner for the HEX and RGB selection the nav bar
 * @returns {undefined} - Returns if anything aside from an h1 element has been clicked
 */
nav.addEventListener("click", function (e) {
  const clicked = e.target.closest("h1");
  if (!clicked) return;
  const active = clicked.textContent === "HEX";
  showContainer();
  activeColorTypeUI(active);

  /**
   * Determines which color type is active and renders it in the DOM
   */
  const changeColor = function () {
    active ? renderColor(randomColorHex()) : renderColor(randomColorRgb());
  };
  randomBtn.addEventListener("click", changeColor);
});

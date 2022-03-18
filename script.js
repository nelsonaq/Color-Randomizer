"use strict";
const hexPage = document.querySelector(".hex");
const rgbPage = document.querySelector(".rgb");
const randomBtn = document.querySelector(".btn");
const colorName = document.querySelector("div > p");

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
  console.log(hexColor);
  colorName.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
};

const randomColorRGB = function () {
  let rgbColor = `RGB(${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )}, ${randomNumber(0, 255)})`;
  console.log(rgbColor);
  colorName.textContent = rgbColor;
  document.body.style.backgroundColor = rgbColor;
};

randomBtn.addEventListener("click", randomColorHex);

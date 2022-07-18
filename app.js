"use strict";

const textareaElement = document.getElementById("textarea");
const enteredCharsElement = document.getElementById("entered-chars-num");
const charactersLeftElement = document.getElementById("chars-left");
const limitReachedElement = document.getElementById("max-limit-reached");
const resetElement = document.getElementById("reset");

const getRandomValue = (minRange, maxRange) => {
  return Math.floor(Math.random() * (maxRange - minRange) + minRange);
};

let maxCharsLimit = 100;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const reset = () => {
  textareaElement.value = "";
  // set max character limit - random value [50, 100]
  maxCharsLimit = getRandomValue(50, 100);

  textareaElement.setAttribute("maxlength", maxCharsLimit);
  document.getElementById("max-limit").textContent = maxCharsLimit;

  charactersLeftElement.textContent = maxCharsLimit;
  enteredCharsElement.textContent = 0;

  limitReachedElement.classList.remove("visible");
};

textareaElement.addEventListener("input", (e) => {
  if (e.target.id === textareaElement.id) {
    const currCharsLength = e.target.value.length;
    const charsLeft = maxCharsLimit - currCharsLength;

    enteredCharsElement.textContent = currCharsLength;
    charactersLeftElement.textContent = charsLeft;

    if (charsLeft === 0) {
      limitReachedElement.classList.add("visible");
    }
  }
});

resetElement.addEventListener("click", (event) => {
  event.preventDefault();
  reset();
});

reset();

const textareaElement = document.getElementById("textarea");
const enteredCharsElement = document.getElementById("entered-chars-num");
const charactersLeftElement = document.getElementById("chars-left");

const getRandomValue = (minRange, maxRange) => {
  return Math.floor(Math.random() * (maxRange - minRange) + minRange);
};

// set max character limit - random value [50, 100]
const maxCharsLimit = getRandomValue(50, 100);
textareaElement.setAttribute("maxlength", maxCharsLimit);
document.getElementById("max-limit").textContent = maxCharsLimit;

charactersLeftElement.textContent =
  maxCharsLimit - textareaElement.value.length;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

textareaElement.addEventListener("input", (e) => {
  if (e.target.id === textareaElement.id) {
    const currCharsLength = e.target.value.length;

    enteredCharsElement.textContent = currCharsLength;
    charactersLeftElement.textContent = maxCharsLimit - currCharsLength;
  }
});

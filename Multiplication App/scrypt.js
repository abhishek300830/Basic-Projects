const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");

value1.innerText = num1;
value2.innerText = num2;

const correctAns = num1 * num2;

const score = document.getElementById("score-counter");
let scoreCounter = JSON.parse(localStorage.getItem("score"));
if (!scoreCounter) {
  scoreCounter = 0;
}
score.innerText = scoreCounter;

const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", () => {
  const userAns = Number(input.value);

  if (userAns == correctAns) {
    scoreCounter++;
    updateLocalStorage();
  } else {
    scoreCounter--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(scoreCounter));
}

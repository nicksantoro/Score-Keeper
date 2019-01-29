let p1button = document.getElementById("p1");
let p2button = document.getElementById("p2");
let resetButton = document.getElementById("reset")

let numInput = document.querySelector("input[type = 'number']")
let winningScoreDisplay = document.querySelector("p span")
let p = document.querySelector("p")

let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display")

let p1score = 0;
let p2score = 0;
let gameOver = false;
let winningScore = 5;


p1button.addEventListener("click", function () {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      p1display.classList.add("winner");
      gameOver = true;
    }
    p1display.textContent = p1score
  }
})

p2button.addEventListener("click", function () {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      p2display.classList.add("winner");
      gameOver = true;
    }
    p2display.textContent = p2score
  }
})

resetButton.addEventListener("click", function () {
  reset();
})

function reset() {
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner")
  p2display.classList.remove("winner")
  gameOver = false;
}

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = this.value
  winningScore = Number(this.value);
  reset();
})

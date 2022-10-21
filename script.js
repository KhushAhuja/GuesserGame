"use strict";

let score = 20;

let highscore = 0;

const message = function (statement) {
  document.querySelector(".command").textContent = statement;
};

const again = function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".current_score").textContent = score;
  message("Start guessing...");
  document.querySelector(".main_attraction").textContent = "?";
  document.querySelector(".guessed_number").value = null;
};

document.querySelector(".check").addEventListener("click", function () {
  let input = Number(document.querySelector(".guessed_number").value);
  if (!input) {
    message("No Number!!");
  } else if (input >= 1 && input <= 20 && input % 1 == 0) {
    let winning_number = Math.trunc(Math.random() * score) + 1;
    if (input == winning_number) {
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector(".main_attraction").textContent = input;
      document.querySelector(".highest_score_value").textContent = highscore;
      message("Fantastic! You got it");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".guessed_number").value = null;
      const button = document.querySelector(".check");
      button.disabled = true;
    } else {
      message("Wrong Guess!!");
      score--;
      document.querySelector(".current_score").textContent = score;
      document.querySelector(".guessed_number").value = null;
      if (score == 0) {
        message("You lost the game!!");
        const button = document.querySelector(".check");
        button.disabled = true;
      }
    }
  } else {
    message("Invalid Number");
    document.querySelector(".guessed_number").value = null;
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".current_score").textContent = score;
  message("Start guessing...");
  document.querySelector(".main_attraction").textContent = "?";
  document.querySelector(".guessed_number").value = null;
});

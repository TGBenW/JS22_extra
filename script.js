"use strict";

let number;
let steps;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomInteger = function (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const newNumber = function () {
  number = randomInteger(1, 100);
  steps = 10;
};

const game = function () {
  let attempt = prompt("Угадай число от 1 до 100");
  if (attempt == null) {
    alert("Игра окончена");
  } else if (steps == 1) {
    alert("Игра окончена");
    if (confirm("Начать новую игру?")) {
      newNumber();
      game();
    }
  } else if (!isNumber(attempt)) {
    alert("Введи число! Осталось попыток - " + steps);
    game();
  } else {
    if (attempt > number) {
      steps--;
      alert("Загаданное число меньше, осталось попыток - " + steps);
      game();
    } else if (attempt < number) {
      steps--;
      alert("Загаданное число больше, осталось попыток - " + steps);
      game();
    } else if (attempt == number) {
      alert("Поздравляю, Вы угадали!!!");
      if (confirm("Начать новую игру?")) {
        newNumber();
        game();
      }
    }
  }
};

newNumber();
game();

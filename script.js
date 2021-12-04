"use strict";

let number;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomInteger = function (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const newNumber = function () {
  number = randomInteger(1, 100);
};

const game = function () {
  let attempt = prompt("Угадай число от 1 до 100");
  console.log(attempt);
  console.log(parseInt(attempt));
  if (attempt == null) {
    alert("Игра окончена");
  } else if (!isNumber(attempt)) {
    alert("Введи число!");
    game();
  } else {
    if (attempt > number) {
      alert("Загаданное число меньше");
      game();
    } else if (attempt < number) {
      alert("Загаданное число больше");
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

"use strict";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (number) {
  const repeat = function (number) {
    if (number === true) {
      starter = game(randomInteger(1, 100));
      starter(prompt("Угадайте число от 1 до 100"));
    } else {
      alert("Игра окончена");
    }
  };
  return function (attempt) {
    console.log(attempt);
    if (attempt == null) {
      alert("Игра окончена");
    } else if (!isNumber(attempt)) {
      starter(prompt("Введите число!"));
    } else if (attempt > 100 || attempt < 1) {
      starter(prompt("Введите число в диапазоне от 1 до 100!"));
    } else {
      if (number < attempt) {
        starter(prompt(`Загаданное число меньше`));
      } else if (number > attempt && attempt !== 0) {
        starter(prompt(`Загаданное число больше`));
      } else if (number == attempt) {
        repeat(confirm("Поздравляю, Вы угадали!!! Начать новую игру?"));
      } else if (attempt === 0) {
        alert("Игра окончена");
      }
    }
  };
};

let starter = game(randomInteger(1, 100));
starter(prompt("Угадайте число от 1 до 100"));

"use strict";

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (number, steps) {
  steps = 10;
  const repeat = function (number) {
    if (number === true) {
      steps = 10;
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
      steps--;
      if (steps > 0) {
        if (number < attempt) {
          starter(prompt(`Загаданное число меньше, осталось попыток - ${steps}`));
        } else if (number > attempt && attempt !== 0) {
          starter(prompt(`Загаданное число больше, осталось попыток - ${steps}`));
        } else if (number == attempt) {
          repeat(confirm("Поздравляю, Вы угадали!!! Начать новую игру?"));
        } else if (attempt === 0) {
          alert("Игра окончена");
        }
      } else {
        repeat(confirm("Попытки закончились, начать новую игру?"));
      }
    }
  };
};

let starter = game(randomInteger(1, 100));
starter(prompt("Угадайте число от 1 до 100"));

"use strict";

const arrLength = 7;

let arr = [];

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const promptNumber = function () {
  let n;
  do {
    n = prompt("Введите число");
  } while (!isNumber(n));
  return +n;
};

const fillArray = function () {
  for (let i = 0; i < arrLength; i++) {
    arr[i] = promptNumber();
  }
};

const checkArray = function () {
  for (let i = 0; i < arrLength; i++) {
    if (arr[i].toString()[0] == 2 || arr[i].toString()[0] == 4) {
      console.log(arr[i]);
    }
  }
};

const isPrime = function (prime) {
  let counter = 0;
  for (let i = 2; i <= prime; i++) {
    if (prime % i == 0) {
      counter++;
    }
  }
  if (counter == 1) {
    return true;
  } else {
    return false;
  }
};

const primeNumbers = function () {
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      console.log(i + " - делители этого числа: 1 и " + i);
    }
  }
};

fillArray();
checkArray();
primeNumbers();

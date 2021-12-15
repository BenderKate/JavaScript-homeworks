"use strict"

// Задание 1
function getArrayParams(arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
      arr[i] = max;
    }
    if (arr[i] < max) {
      arr[i] = min;
    }
    sum = sum + arr[i];
  }

  avg = (sum / arr.length).toFixed(2);
  avg = Number;

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker > max) {
      worker = max;
    }
  }
  return max;
}


// Задание 3
function worker2(arr) {
  let min = -Infinity;
  let max = Infinity;
  let difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > min) {
      arr[i] = max;
    }
    if (arr[i] < max) {
      arr[i] = min;
    }
    difference = min - max;
    difference = Math.abs(difference);
  }
  return difference;
}



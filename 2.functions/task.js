"use strict"

// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

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
  let max = -Infinity;
  let value = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    value[i] = func(arrOfArr[i]);
    if (value[i] > max) {
      max = value[i];
    }
  }
  return max;
}




// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    } 
  }
  return Math.abs(min - max);
}

// function makeWork(arrOfArr, func) {
//   let max = -Infinity;
//   let value = [];

//   for (let i = 0; i < arrOfArr.length; i++) {
//     value[i] = func(arrOfArr[i]);
//     if (value[i] > max) {
//       max = value[i];
//     }
//   }
//   return max;
// }










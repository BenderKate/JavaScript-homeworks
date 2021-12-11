"use strict"

function solveEquation(a, b, c) {
  let arr;
  let D = (b * b) - (4 * a * c);

  if (D < 0) {
    arr = [];
  } else if (D = 0) {
    arr = [-b / (2 * a)];
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D) ) / (2 * a);
    let x2 = (-b - Math.sqrt(D) ) / (2 * a);
    arr = [x1, x2];
  } 
  return arr;
}




// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }

// Part A
// let input = require("./input");
// let gammaBinary = "";
// let epsilonBinary = "";
// let countZero = 0;
// let countOne = 0;

// for (let k = 0; k < input[0].length; k++) {
//   for (let i = 0; i < input.length; i++) {
//     if (input[i][k] === "0") {
//       countZero++;
//     } else {
//       countOne++;
//     }
//   }

//   if (countZero > countOne) {
//     gammaBinary += "0";
//     epsilonBinary += "1";
//   } else {
//     gammaBinary += "1";
//     epsilonBinary += "0";
//   }

//   countZero = 0;
//   countOne = 0;
// }

// const gammaDecimal = parseInt(gammaBinary, 2);
// const epsilonDecimal = parseInt(epsilonBinary, 2);

// console.log(gammaDecimal * epsilonDecimal);

// Part B

let oxygenGeneratorInput = require("./input");
let C02ScrubberInput = require("./input");

function calculateRating(input, type) {
  let countZero = 0;
  let countOne = 0;

  for (let k = 0; k < input[0].length; k++) {
    for (let i = 0; i < input.length; i++) {
      if (input[i][k] === "0") {
        countZero++;
      } else {
        countOne++;
      }
    }

    if (countZero > countOne) {
      if (type === "oxygen") {
        input = input.filter((number) => number.charAt(k) !== "1");
      } else {
        input = input.filter((number) => number.charAt(k) !== "0");
      }
    } else {
      // 1 is greater or they are equal
      if (type === "oxygen") {
        input = input.filter((number) => number.charAt(k) !== "0");
      } else {
        input = input.filter((number) => number.charAt(k) !== "1");
      }
    }

    if (input.length === 1) {
      return input;
    } else {
      countZero = 0;
      countOne = 0;
    }
  }
}

const oxygenGeneratorRating = calculateRating(oxygenGeneratorInput, "oxygen");
const C02ScrubberRating = calculateRating(C02ScrubberInput, "c02");
console.log(
  parseInt(oxygenGeneratorRating, 2) * parseInt(C02ScrubberRating, 2)
);

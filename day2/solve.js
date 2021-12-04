const input = require("./input");

// Part 1

// let horizontal = 0;
// let depth = 0;

// input.forEach((line) => {
//   const [direction, value] = line.split(" ");

//   if (direction === "forward") {
//     horizontal += Number(value);
//   }

//   if (direction === "down") {
//     depth += Number(value);
//   }

//   if (direction === "up") {
//     depth -= Number(value);
//   }
// });

// console.log(horizontal * depth);

// Part 2

let horizontal = 0;
let depth = 0;
let aim = 0;

input.forEach((line) => {
  const [direction, value] = line.split(" ");

  if (direction === "down") {
    aim += Number(value);
  }

  if (direction === "up") {
    aim -= Number(value);
  }

  if (direction === "forward") {
    horizontal += Number(value);
    depth += aim * Number(value);
  }
});

console.log(horizontal * depth);

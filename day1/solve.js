const input = require("./input");

let count = 0;

// Part 1
// for (let i = 0; i < input.length; i++) {
//   if (input[i] < input[i + 1]) {
//     count++;
//   }
// }

// console.log(count);

// Part 2

for (let i = 0; i < input.length; i++) {
  const a = input[i] + input[i + 1] + input[i + 2];
  const b = input[i + 1] + input[i + 2] + input[i + 3];
  if (b > a) {
    count++;
  }
}

console.log(count);

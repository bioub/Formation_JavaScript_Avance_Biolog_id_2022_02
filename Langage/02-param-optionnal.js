// function sum(a, b, c) {
//   if (c === undefined) {
//     c = 0;
//   }
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c || 0;
//   return a + b + c;
// }

// function sum(a, b, c) {
//   c = c ?? 1; // ES2021
//   return a + b + c;
// }

// ES2015
function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2, 0)); // 3

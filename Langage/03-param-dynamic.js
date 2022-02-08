// function sum(a, b) {
//   let result = a + b;
//   for (let i = 2; i < arguments.length; i++) {
//     const nb = arguments[i];
//     result += nb;
//   }
//   return result;
// }

function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}


console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

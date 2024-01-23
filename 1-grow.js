// challenge day 1
// Beginner - Reduce but Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

function grow(x) {
  return (result = x.reduce((acc, curr) => acc * curr, 1));
}

console.log(grow([2, 2, 2, 2, 2, 2]));

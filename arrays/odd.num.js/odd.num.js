// find all odd numbers from given collection using filter method
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 67, 43, 30, 56, 28, 71];
var oddnumbers = n.filter((num) => {
  return num % 2 > 0;
});
console.log(oddnumbers);

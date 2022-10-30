//let n = 10;
//const primeNumber = (n) => {
//for (let i = 4; i <= n; i++) {
//let isPrimeNumber = true;
//for (let j = 2; j < i; j++) {
//if (i % j == 0) {
//isPrimeNumber = false;
//break;
//}
//}
//if (isPrimeNumber) {
//console.log(i);
//}
//}
//};
//primeNumber(100);

//const add = (a, b) => a + b;
//console.log(add(5, 4));

// *
// **
// ***
// ****
// *****

const printStars = (n) => {
  // Loop is for traversing lines.
  for (let i = 1; i <= n; i++) {
    let stars = "";
    // Inner loop.
    // *****
    // Creating stars on each line.
    for (let j = 1; j <= i; j++) {
      //  stars=stars+"*";
      stars += "*";
    }
    console.log(stars);
  }
};

printStars(5);

// when n = 5
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

//for (let i = 1; i <= 100; i++) {
//console.log(i);
//}
//print all even numbers from 1 to 100
//for (let i = 1; i <= 100; i++) {
//if (i % 2 == 0) {
//console.log(i);
//}
//}
//print multiplication table for any number
//var num = 9;
//for (let i = 1; i <= 100; i++) {
//if (i % num == 0) {
//console.log(i);
//}
//}
//or

//let n = 40;
//for (let i = 1; i <= 10; i++) {
//console.log(i * n);
//}

//1 var i = 1;
//while (i <= 10) {
//console.log(i * n);
//i++;
//}

//2 var i = 1;
//while (i <= 100) {
//if (i % 2 == 0) {
//console.log(i * n);
//i++;
//}
//}
//write a program using loops to print prime numbers from 1 to 100
let n = 10;
for (let i = 4; i <= n; i++) {
  let isPrimeNumber = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrimeNumber = false;
      break;
    }
    if (isPrimeNumber) {
      console.log(i);
    }
  }
}

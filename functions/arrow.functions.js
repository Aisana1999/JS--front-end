let n = 10;
const primeNumber = (n) => {
  for (let i = 4; i <= n; i++) {
    let isPrimeNumber = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    if (isPrimeNumber) {
      console.log(i);
    }
  }
};
primeNumber(100);

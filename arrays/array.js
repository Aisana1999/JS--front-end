var numbers = [10, 20, 30, 70];
var names = ["Daniel", "Aisha"];
console.log(names);

var mixedArray = [10, 20, "Daniel", true, undefined, false, (x) => [x * x]];
console.log(mixedArray);

console.log(mixedArray[1]);
console.log(mixedArray[4]);

mixedArray[4] = 50;
console.log(mixedArray[4]);

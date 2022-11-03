var numbers = [10, 20, 30, 40, 70];
var names = ["Daniel", "Aisha"];
console.log(names);

var mixedArray = [10, 20, "Daniel", true, undefined, false, (x) => [x * x]];
console.log(mixedArray);

console.log(mixedArray[1]);
console.log(mixedArray[4]);

mixedArray[4] = 50;
console.log(mixedArray[4]);

numbers.push(80);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(80);
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.splice(3, 0, 100);
console.log(numbers);

numbers.splice(2, 1);
console.log(numbers);

numbers.splice(2, 2, -30, -100);
console.log(numbers);

// find function :

function findhelper(num) {
  return num == 40;
}
const result = numbers.find(findHelper);
console.log(result);

//or
const result = numbers.find((num) => num == 30);
console.log(result);

// filter function

const filterResult = numbers.filter((num) => num > 50);
console.log(filterResult);

function filterHelper(num) {
  return num > 50;
}

//write a program to find all the names having 'a' character in it
const filterResult = names.filter((names) => character > a);
console.log(filterResult);

function filterHelper(character) {
  return character > a;
}

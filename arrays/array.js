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
const givenresult = numbers.find(findHelper);
console.log(givenresult);

//or
const result = numbers.find((num) => num == 30);
console.log(result);

// filter function

const filterResult = numbers.filter((num) => num > 50);
console.log(filterResult);

function filterHelper(num) {
  return num > 50;
}

var usernames = ["Daniel", "Aisha", "Totorro", "Momondo"];
//write a program to find all the names having 'a' character in it
const usernamesResult = names.filter((username) => {
  return username.includes("a");
});
console.log(usernamesResult);

//or using for loop
const namesResult = names.filter((name) => {
  for (let i = 0; i < name.length; i++) {
    if (name[i] == "a") {
      return true;
    }
  }
  return false;
});

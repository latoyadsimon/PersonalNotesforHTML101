// 01/25/23 Learning applicatives with Jon in a class chat

const numbers = [1, 2, 3, 4, 5];

// callback = n => n * 2
// 1
// const two = callback(1)

function map(array, callback) {
  let returnValue = [];
  for (let el of array) {
    returnValue.push(callback(el));
  }
  return returnValue;
}

const newNumbers = map(numbers, (n) => n * 2);

console.log({
  newNumbers,
});

// node recursive.js to run

//codewars problem, jon is testing my level

function numberJoy(n) {
  // your code
  //  turn n into a string, split n into an array, turn n back into a number
  let stringArray = n.toString().split("");
  console.log(stringArray);
  const toNumbers = (arr) => arr.map(Number); //helper function
  let numberArray = toNumbers(stringArray);
  console.log(numberArray);

  //add up all the numbers in the array
  let total = 0;
  let sum = numberArray.map((num) => (total += num));
  console.log(sum);
  let nSum = sum.pop();
  console.log(nSum);
  //reverse the sum by: turn sum into a string, split sum into an array,
  let sumStringArray = nSum.toString().split("");
  let sumNumArray = toNumbers(sumStringArray);
  console.log("sum array", sumNumArray);
  //reverse the array, turn sum back into a number
  let revNumArray = sumNumArray.reverse();
  console.log("rev num:", revNumArray);
  let revNum = revNumArray.join("");
  console.log(revNum);
  // multiply the sum by the reversed number
  let result = revNum * nSum;
  console.log("product:", result);
  //if the product is equal to n, return true, if not return false.
  return result === n ? true : false;
}

//lets clean it up:
function numberJoy(n) {
  let stringArray = n.toString().split("");

  const toNumbers = (arr) => arr.map(Number); //helper function
  let numberArray = toNumbers(stringArray);

  let total = 0;
  let sum = numberArray.map((num) => (total += num));

  let nSum = sum.pop();

  let sumStringArray = nSum.toString().split("");
  let revNum = toNumbers(sumStringArray).reverse().join("");

  let result = revNum * nSum;

  return result === n ? true : false;
}

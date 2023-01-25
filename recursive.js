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

//do not change this code*********************

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}
//do not change this code*********************
/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  //
  //My notes:
  //find the multiples of n, in the range of 1 to n
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  //console.log("n:", n, "array:", array)
  //put it in an array
  //iterate through the array
  for (let i = 0; i < array.length; i++) {
    //console.log("array", array.length)
    let num = array[i];
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
      //return("FizzBuzz")
    } else if (num % 3 === 0) {
      console.log("Fizz");
      //return("Fizz")
    } else if (num % 5 === 0) {
      console.log("Buzz");
      //return("Buzz")
    } else {
      console.log(num);
      //return(num)
    }
  }
  //if i is a multiple of 3 && a multiple of 5 print FizzBuzz
  //use is i%3===0 , i%5===0
  //if i is a multiple of just 3 print Fizz
  //if i is a multiple of just 5 print Buzz
  //else print the value of i
}

//console.log(6%5 === 0)

function main() {
  const n = parseInt(readLine().trim(), 10);

  fizzBuzz(n);
}

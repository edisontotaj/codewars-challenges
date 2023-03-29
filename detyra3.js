"use strict";
/*


// 1.
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left
function removeSmallest(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const removed = sorted.splice(1);
  return removed;
}
console.log(removeSmallest([1, 2, 3, 4, 5]));

// zgjidhja tjeter
const removeSmallest = (numbers) =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));

//   2.
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
const greet = function (name, owner) {
  if (name === owner) return "Hello boss";
  else return "Hello guest";
};
console.log(greet("Albatin", "Albatin"));


// 3.
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not
const check = function (a, x) {
  if (a.includes(x)) return true;
  else return false;
};
console.log(check([66, 101], 66));

// 4.
// Complete the solution so that it reverses the string passed into it.
const solution = function (str) {
  const splitedAndReversed = str.split("").reverse().join("");
  return splitedAndReversed;
};
console.log(solution("hello"));

// 5.
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = function (num) {
  if (num > 0) return num * -1;
  else return num;
};
console.log(makeNegative(-1));

// 6.
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
const findShort = function (s) {
  const splited = s.split(" ");
  const short = splited.sort((a, b) => a.length - b.length);
  return short[0].length;
};
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// 7.
// Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x) {
  return x.reduce((a, b) => a * b);
}
console.log(grow([1, 2, 3, 4]));

// 8.
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even"
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

// 9.
// We need a function that can transform a string into a number. What ways of achieving this do you know?
const stringToNumber = function (str) {
  return +str;
};
console.log(stringToNumber("1234"));

// 10.
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case
let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);
console.log(isIsogram("Dermatoglyphics"));

function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// 11.
//
function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  var mult = 1;
  var splitStr = num.toString().split("");
  for (var i = 0; i < splitStr.length; i++) {
    mult *= parseFloat(splitStr[i]);
  }
  return 1 + persistence(parseFloat(mult));
}

// 12.
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present)
const countSheeps = function (arrayOfSheep) {
  const filtered = arrayOfSheep.filter(function (val, i) {
    if (val === true) return val;
  });
  return filtered.length;
};
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// 13.
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string
const addBinary = function (a, b) {
  return (a + b).toString(2);
};
console.log(addBinary(1, 1));

// 14.
// Write a program that returns the girl's age (0-9) as an integer.
const getAge = function (inputString) {
  const arr = inputString.split(" ").shift([0]);
  const num = +arr;
  return num;
};
console.log(getAge("4 years old"));

// 15.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
const toNumberArray = function (stringarray) {
  const mapp = stringarray.map(function (val, i) {
    return +val;
  });
  return mapp;
};
console.log(toNumberArray(["1", "2", "3"]));

// 16.
// Return their respective ages now as [humanYears,catYears,dogYears]
const humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [humanYears, humanYears * 15, humanYears * 15];
  else if (humanYears === 2)
    return [humanYears, humanYears + 9, humanYears + 9];
  else return [humanYears, humanYears + 5, humanYears + 4];
};
console.log(humanYearsCatYearsDogYears(1));
*/

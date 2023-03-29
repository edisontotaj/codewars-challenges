"use strict";

/*


// 1.
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!Examples (a, b) --> output (explanation)

const getSum = function (a, b) {
  if (a === b) return a;
  else if (a < b) return a + getSum(a + 1, b);
  else return a + getSum(a - 1, b);
};
console.log(getSum(2, -1));
 

// 2.
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
const countBy = function (x, n) {
  const z = [];
  for (let i = 1; i <= n; i++) z.push(x * i);
  return z;
};
console.log(countBy(1, 10));


// 3.
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
const SeriesSum = function (n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
};
console.log(SeriesSum(2));


// 4.
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
const rowSumOddNumbers = function (n) {
  return n * n * n;
};
console.log(rowSumOddNumbers(42));


// 4.
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const removeExclamationMarks = function (s) {
  const exclamation = s.replace(/!/g, "");
  return exclamation;
};
console.log(removeExclamationMarks("hahah!aa!hha!hh"));


// 5.
// Write a function that removes the spaces from the string, then return the resultant string.
const noSpace = function (x) {
  const no = x.replace(/ /g, "");
  return no;
};
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));


// 6.
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
const evenOrOdd = function (number) {
  if (number % 2 == 0) return "Even";
  else return "Odd";
};
console.log(evenOrOdd(-7));


// 7.
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

const getGrade = function (s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};
console.log(getGrade(100, 50, 40));


// 8.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
const calculateYears = function (principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
};
console.log(calculateYears(1000, 0.05, 0.18, 1100));

// 9.
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
const accum = function (s) {
  const splitstr = s.split("");
  const multiples = splitstr
    .map(function (val, i) {
      return val.toUpperCase() + val.toLowerCase().repeat(i);
    })
    .join("-");

  return multiples;
};
console.log(accum("abcd"));

// 10.
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

const stray = function (numbers) {
  const reduced = numbers.reduce(function (val, i) {
    return val ^ i;
  });
  if (numbers.length < 3) return 0;
  else return reduced;
};
console.log(stray([1, 1, 2]));

// 11.
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
const openOrSenior = function (data) {
  const mapped = data.map(function (val, i) {
    if (val[0] >= 55 && val[1] > 7) return "Senior";
    else return "Open";
  });
  return mapped;
};
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];

// 12.
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = , Output = ["Ryan", "Yous"]
const friend = function (friends) {
  const filtered = friends.filter(function (val, i) {
    if (val.length === 4) return val;
  });
  return filtered;
};
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// 13.
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

const validatePIN = function (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < "0" || pin[i] > "9") {
      return false;
    }
  }
  return true;
};
console.log(validatePIN("1234"));

// function validatePIN(pin) {
//   return (
//     typeof pin === "string" && // verify that the pin is a string
//     Number.isInteger(+pin) && // make sure that the string is an integer when converted into a number
//     [4, 6].includes(pin.length)
//   ); // only accepts 4 and 6 character pins
// }


// 14.
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

const longest = function (s1, s2) {
  const concated = s1.concat(s2);
  const arr = concated.split("");
  const filtered = arr.filter(function (val, i, arr) {
    return arr.indexOf(val) === i;
  });
  const sorted = filtered.sort();
  const joined = sorted.join("");
  return joined;
};
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
*/

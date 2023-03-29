"use strict";
/*
 
// 1.
//Write a function which converts the input string to uppercase.
const makeUpperCase = function (str) {
  const toUper = str.toUpperCase();
  return toUper;
};
console.log(makeUpperCase("hello"));


// 2.
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
const getCount = function (str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;

  //   const matched = str.match(/[aeiou]/gi || []).length;
  //   return matched;
};
console.log(getCount("my pyx"));


// 3.
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2],
// drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].
const deleteNth = (arr, c) =>
  arr.reduce(
    (a, v) => (a.filter((e) => e === v).length < c ? [...a, v] : a),
    []
  );
console.log(deleteNth([20, 37, 20, 21], 1));

// 4.
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits
// of n taken to the successive powers of p is equal to k * n.
// function digPow(n, p) {
//     var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//     return x % n ? -1 : x / n
//   }
const digPow = function (n, p) {
  let sum = 0;
  let myArray = [];
  let holder = n;

  for (let i = n.toString().length - 1; i >= 0; i--) {
    myArray[i] = holder % 10;

    holder = Math.trunc(holder / 10);
    myArray[i] = Math.pow(myArray[i], p + i);
    sum += myArray[i];
  }

  if (sum % n == 0) {
    return sum / n;
  } else {
    return -1;
  }
};
console.log(digPow(92, 1));


// 5.
// Your task is to create a function that does four basic mathematical operations.
const basicOp = function (operation, value1, value2) {
  if (operation === "+") return value1 + value2;
  else if (operation === "-") return value1 - value2;
  else if (operation === "*") return value1 * value2;
  else if (operation === "/") return value1 / value2;
};
console.log(basicOp("+", 4, 7));

// 6.
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
const countSmileys = function (arr) {
  const smileys = [
    ":)",
    ":D",
    ":-)",
    ":~)",
    ":-D",
    ":~D",
    ";)",
    ";D",
    ";-)",
    ";~)",
    ";-D",
    ";~D",
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
};
console.log(countSmileys([]));

// 7.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

const bouncingBall = function (h, bounce, window) {
  const cond = h > 0 && bounce > 0 && bounce < 1 && window < h;
  if (cond) {
    return h < window ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
  } else {
    return -1;
  }
};
console.log(bouncingBall(3.0, 0.66, 1.5));


// 8.
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
const highAndLow = function (numbers) {
  const toArr = numbers.split(" ");
  const sorted = toArr.sort(function (a, b) {
    return b - a;
  });
  let empty = [];
  empty.unshift(sorted[0], sorted[sorted.length - 1]);
  const toStr = empty.join(" ");
  return toStr;
};
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// 9.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
const number = function (busStops) {
  let totalEntries = 0;
  let totalDowns = 0;
  busStops.map((arr) => {
    totalEntries += arr[0];
    totalDowns += arr[1];
  });

  return totalEntries - totalDowns;
};
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

// 10.
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

const bmi = function (weight, height) {
  const bmii = weight / (height * height);
  if (bmii <= 18.5) return "Underweight";
  else if (bmii <= 25.0) return "Normal";
  else if (bmii <= 30.0) return "Overweight";
  else if (bmii > 30) return "Obese";
};
console.log(bmi(80, 1.8));

// 11.
// Complete the solution so that the function will break up camel casing, using a space between words.
const solution = function (string) {
  return string.replace(/([A-Z])/g, " $1");
};
console.log(solution("camelCasing"));

// 12.
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
const duplicateCount = function (text) {
  try {
    return text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
};
console.log(duplicateCount("aabbcde"));

// 13.
// Write a function that returns both the minimum and maximum number of the given list/array.
const minMax = function (arr) {
  const sorted = arr.sort(function (a, b) {
    return a - b;
  });

  let array = [];
  array.unshift(sorted[0], sorted[sorted.length - 1]);
  return array;
};
console.log(minMax([1, 2, 3, 4, 5]));


// 14.
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1
function findEvenIndex(arr) {
  let sum = 0;
  const total = arr.reduce((a, b) => a + b, 0);
  return arr.findIndex((x, i) => (total - (sum += x)) * 2 + x === total);
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// 15.
// Write Number in Expanded Form
const expandedForm = function (num) {
  return num
    .toString()
    .split("")
    .reverse()
    .map((val, i) => val * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(" + ");
};
console.log(expandedForm(12));

// 16.
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
const isPangram = function (string) {
  const result = new Set();
  for (const ch of string.toUpperCase()) {
    if (/[A-Z]/.test(ch)) {
      result.add(ch);
    }
  }
  return result.size === 26;
};
console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// 17.
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2) {
  const mapped = array1.map(function (val) {
    return val * val;
  });
  const reduced1 = mapped.reduce((a, b) => a + b, 0);

  const reduced2 = array2.reduce((a, b) => a + b, 0);

  if (reduced1 === reduced2) return true;
  else if (
    reduced1.length === 0 ||
    reduced2.length === 0 ||
    reduced1 === null ||
    reduced2 === null
  )
    return false;
  else return false;
}
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
//  OSE
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

// 18.
// Given an array of integers your solution should find the smallest integer.
const findSmallestInt = function (args) {
  const smallest = args.sort((a, b) => a - b);
  return smallest[0];
};
console.log(findSmallestInt([34, 15, 88, 2]));

// ME KLASE
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 19.
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

const count = function (string) {
  const toArr = string.split("");
  const mapped = toArr.reduce(function (acc, val) {
    acc[val] = ++acc[val] || 1;

    return acc;
  }, {});
  return mapped;
};

console.log(count("aba"));

// 20.
// We need a function to collect these numbers, that may receive two integers
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
const sumDigPow = function (a, b) {
  let emptyArr = [];
  let numbers;
  for (let i = a; i <= b; i++) {
    numbers = String(i).split("");
    if (
      i ===
      numbers.reduce(function (acc, currentVal, cureentInd) {
        return acc + currentVal ** (cureentInd + 1);
      }, 0)
    ) {
      emptyArr.push(i);
    }
  }
  return emptyArr;
};
console.log(sumDigPow(8, 9));
  */

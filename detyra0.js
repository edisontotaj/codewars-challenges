"use strict";

/* console.log("Hello World");

// const arr = [-1, 0, 2, -4, -3, 5, 6];
// const arr2 = arr.filter((nr) => nr >= 0).sort();
// console.log(arr2);

// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(1, 2));

// console.log(NaN === NaN);

// let str = "two\nlines";
// console.log(str);

// 1.
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
function sumArray(array) {
  if (array) {
    array.sort(function (a, b) {
      return a - b;
    });
    var newAry = array.slice(1, -1);
    return newAry.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  } else {
    return 0;
  }
}
console.log(sumArray([1, 0, null, 4, 2, 7]));

// 2.
// Write a function to split a string and convert it into an array of words.
const str = function (str1) {
  const strCopy = str1.split(" ");
  return strCopy;
};
console.log(str("Edison Totaj"));


// 3.
// Given an array of integers, return a new array with each value doubled.
const arr = function (arr1) {
  const arr2 = arr1.map(function (val, i, array) {
    return val * 2;
  });
  return arr2;
};
console.log(arr([1, 4, 5, 6]));

// 4.
// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
const cycliN = function (timee) {
  return timee * 0.5;
};
console.log(cycliN(10));

// 5.
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const nr = function (numberr) {
  if (numberr % 2 === 0) {
    return numberr * 8;
  } else {
    return numberr * 9;
  }
};
console.log(nr(3));

// 6.
// Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.
const boolToString = function (boo) {
  const booo = boo.toString();
  return booo;
};
console.log(boolToString(false));

// 7.
// Can you find the needle in the haystack? Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says: "found the needle at position " plus the index it found the needle,
const arr2 = function (str) {
  const arr1 = str
    .map(function (val, i, arr) {
      if (val === "needle") {
        return `found the needle at position: ${i}`;
      }
    })
    .join("");
  return arr1;
};
console.log(
  arr2(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// 8.
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
const arr = function (arr1) {
  const arr2 = arr1.map(function (val, i, arr) {
    return val * -1;
  });
  return arr2;
};
console.log(arr([1, 2, -1, -2]));

// 9.
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const four = function (length, width) {
  if (length === width) {
    return length * length;
  } else {
    return 2 * length + 2 * width;
  }
};
console.log(four(5, 5));

// 10.
// ne nje string zevendeso t me u dmth si adn me e shnderru ne arn "GCAT"  =>  "GCAU"
const str = function (symbol) {
  const symb = symbol.replace("T", "U");
  return symb;
};
console.log(str("TGCA"));

// 11.
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
const str = function (str1) {
  const str2 = str1
    .split("")
    .map(function (val, i, arr) {
      return val + val;
    })
    .join("");
  return str2;
};
console.log(str("tini"));

// 12.
// Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element
// is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array
const arr = function (arr1) {
  if (arr1 == null || arr1.length == 0) return [];

  let positive = 0;
  let negative = 0;

  for (let i = 0, l = arr1.length; i < l; i++) {
    if (arr1[i] > 0) positive++;
    else negative += arr1[i];
  }

  return [positive, negative];
};
console.log(arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// 13.
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0
// 2 -> 3 (1 + 2)
const summ = function (nrmm) {
  const summm = (nrmm * (nrmm + 1)) / 2;
  return summm;
};
console.log(summ(8));

// 14.
// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.
const arr = function (arr1) {
  const arr2 = arr1
    .filter(function (val) {
      return val > 0;
    })
    .reduce(function (val, i) {
      const sum = val + i;
      if (!sum) return 0;
      else return sum;
    });

  return arr2;
};
console.log(arr([1, -4, 7, 12]));

// 15.
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"] --> ["Keep", "Keep", "Keep"]
const arr = function (arr1) {
  const arr2 = arr1.filter(function (value, index) {
    return index % 2 === 0;
  });

  return arr2;
};
console.log(arr(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"]));

// 16.
// You're writing code to control your town's traffic lights. You need a function
// to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the
// current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.
const str = function (str1) {
  if (str1 === "green") {
    return "yellow";
  } else if (str1 === "yellow") {
    return "red";
  } else if (str1 === "red") {
    return "green";
  }
};
console.log(str("red"));

// 17.
// A hero is on his way to the castle to complete his mission.
// However, he's been told that the castle is surrounded with a couple of powerful dragons!
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
//  Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons,
// will he survive? Return True if yes, False otherwise :)
const castle = function (bullets, dragons) {
  if (bullets / 2 > dragons) return true;
  else return false;
};
console.log(castle(54, 20));

// 18.
// Write a function named setAlarm which receives two parameters.
// The first parameter, employed, is true whenever you are employed and the second parameter,
// vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation
// (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
const setAlarm = function (employed, vacation) {
  if (employed && !vacation) {
    return true;
  } else return false;
};
console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));

// 19.
// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
const angles = function (a, b) {
  const c = 180 - (a + b);
  return c;
};
console.log(angles(60, 60));

// 20.
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
const calcAge = function (dad, son) {
  const double = -(dad - son * 2);
  return double;
};
console.log(calcAge(65, 30));

// 21.
// When provided with a number between 0-9, return it in words.
const nrm = function (str) {
  switch (str) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "None";
  }
};
console.log(nrm(0));

// 22.
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
const nrm = function (str) {
  let strr = "";
  for (let i = 1; i <= str; i++) {
    strr += `${i} sheep...`;
  }
  return strr;
};
console.log(nrm(4));

// 23.
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter;
// and month 11 (November), is part of the fourth quarter.
const year = function (month) {
  if (month >= 1 && month <= 3) return 1;
  else if (month >= 4 && month <= 6) return 2;
  else if (month >= 7 && month <= 9) return 3;
  else if (month >= 10 && month <= 12) return 4;
};
console.log(year(11));

// 24.
// We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?
let num = 4;
let str = num.toString();
console.log(str, typeof str);

// 25.
// Very simple, given an integer or a floating-point number, find its opposite.
const num = function (numm) {
  return numm * -1;
};
console.log(num(-1));


// 26.
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
const str = function (str1) {
  if (str1 <= 5) return "0";
  else return "1";
};
console.log(str("40"));

// 27.
// Complete the function that takes a non-negative integer n as input, and returns a list of
// all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
const num = function (n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
};
console.log(num(2));

// 28.
// Write a function that checks if a given string (case insensitive) is a palindrome.
const str = function (str1) {
  const strToarr = str1.split("").reverse().join("");
  if (str1 === strToarr) return true;
  else return false;
};
console.log(str("madam"));

// 29.
// This function should test if the factor is a factor of base. Return true if it is a factor or false if it is not.
const factorsMath = function (base, factor) {
  if (base % factor == 0) return true;
  else return false;
};
console.log(factorsMath(7, 2));

// 30.
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string): "4",  "5" --> "9"
const funy = function (x, y) {
  let xx = +x;
  let yy = +y;
  let sum = xx + yy;

  return sum.toString();
};
console.log(funy("2", "6"));

// 31.
// Given a year, return the century it is in.
const century = function (year) {
  const years = year / 100;
  const yearRoundes = Math.ceil(years);
  return yearRoundes;
};
console.log(century(1705));

// 32.
// Create a function that accepts a string and a single character,
// and returns an integer of the count of occurrences the 2nd argument is found in the first one: ("Hello", "o")  ==>  1
const word = function (str1, str2) {
  return str1.split(str2).length - 1;
};
console.log(word("hello", "o"));
*/

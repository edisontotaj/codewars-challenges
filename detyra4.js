"use strict";
/*
// 1.
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format
//  "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x)
// got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
console.log(
  points(["3:1", "2:2", "1:1", "2:1", "5:0", "2:0", "1:3", "1:1", "0:1", "2:2"])
);

// 2.
// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each. If one of the flowers has an even number
// of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they
//  are in love and false if they aren't

const lovefunc = function (flower1, flower2) {
  if (
    (flower1 % 2 == 0 && flower2 % 2 == 1) ||
    (flower2 % 2 == 0 && flower1 % 2 == 1)
  )
    return true;
  else return false;
};
console.log(lovefunc(5, 5));

// 3.
// Messi is a soccer player with goals in three leagues: // LaLiga // Copa del Rey // Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
const goals = function (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};
console.log(goals(250, 49, 80));

// 4.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d)
const rentalCarCost = function (d) {
  if (d < 3) return d * 40;
  if (7 > d && d >= 3) return d * 40 - 20;
  if (d >= 7) return d * 40 - 50;
};
console.log(rentalCarCost(7));

// 5.
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// const min = function (list) {
//   const filteredList = list.filter(function (val) {
//     return val < 0;
//   });
//   const filteredListMin = Math.min(...filteredList);
//   return filteredListMin;
// };
// console.log(min([1, 2, 3, 4, -2, -3]));

// const max = function (list) {
//   const filteredList = list.filter(function (val) {
//     return val > 0;
//   });
//   const filteredListMin = Math.max(...filteredList);
//   return filteredListMin;
// };
// console.log(max([1, 2, 3, 4, -2, -3]));

const min = function (list) {
  return Math.min.apply(null, list);
};

const max = function (list) {
  return Math.max.apply(null, list);
};
console.log(min([1, 2, 3, 4, -2, -3]), max([1, 2, 3, 4, -2, -3]));

// 6.
// You will be given a list of strings. You must sort it alphabetically
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.
const twoSort = function (s) {
  return s.sort()[0].split("").join("***");
};

console.log(twoSort(["bitcoin", "take", "over", "the", "world"]));

// 7.
// Write a function that takes an array of words and smashes them together into a sentence
// and returns the sentence. You can ignore any need to sanitize words or add punctuation,
// but you should add spaces between each word. Be careful, there shouldn't be a space at
// the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const smash = function (words) {
  return words.join(" ");
};
console.log(smash(["hello", "world", "this", "is", "great"]));

// 8.
// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0
const sum = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
};
console.log(sum([1, 2, 3, 4]));

// 9.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
const correct = function (string) {
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
};
console.log(correct("5time"));

// 10.
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
const repeatStr = function (n, s) {
  if (n > 0) return s.repeat(n);
  else return "";
};
console.log(repeatStr(4, "I"));

// 11.
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
const expressionMatter = function (a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
};
console.log(expressionMatter(3, 1, 2));

// 12.
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
const reverseList = function (list) {
  const reversed = list.reverse();
  return reversed;
};
console.log(reverseList([1, 2, 3, 4]));

// 13.
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
const shortcut = function (string) {
  const stringToArr = string.replace(/[aeiou]/g, "");

  return stringToArr;
};
console.log(shortcut("codewars"));

// 14.
//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
const hoopCount = function (n) {
  if (n >= 10) return "Great, now move on to tricks";
  else return "Keep at it until you get it";
};
console.log(hoopCount(2));

// 15.
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
// Write a function that given a floor in the american system returns the floor in the european system.
// With the 1st floor being replaced by the ground floor and the 13th floor being removed,
// the numbers move down to take their place. In case of above 13, they move down by two
// because there are two omitted numbers below them.
// Basements (negatives) stay the same as the universal level
const getRealFloor = function (n) {
  if (n > 0 && n <= 12) return n - 1;
  else if (n === 13 || n === 0 || n < 0) return n;
  else return n - 2;
};
console.log(getRealFloor(5));


// 16.
//  shkronja e pare dhe e fundit e emrit te bishes duhet me qene te njejta me ato te dish
const feast = function (beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1])
    return true;
  else return false;
};

console.log(feast("great blue heron", "garlic naan"));

// 17.
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
const toJaden = function (str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const arr1 = arr.join(" ");
  return arr1;
};
console.log(toJaden("How can mirrors be real if our eyes aren't real"));

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// 18.
// Given an integral number, determine if it's a square number:
const isSquare = function (n) {
  if (Math.sqrt(n) % 1 === 0) return true;
  else return false;
};
console.log(isSquare(2));

// 19.
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
const findNextSquare = function (sq) {
  if (Math.sqrt(sq) % 1 === 0) return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  else return -1;
};
console.log(findNextSquare(121));

// 20.
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removeChar = function (str) {
  const removeS = str.slice(1, str.length - 1);
  return removeS;
};
console.log(removeChar("edison"));

// 21.
// Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.
// const findAverage = function (array) {
//   const arr1 = array.reduce((val, i, arr) => val + i / array.length, 0);
//   return arr1;
// };
// console.log(findAverage([1, 2, 3, 4]));

const findAverage = function (array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};


// 22.
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)
// solution('abc', 'bc') // returns true
const solution = function (str, ending) {
  return str.endsWith(ending);
};
console.log(solution("samurai", "ai"));


// 23.
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
const filter_list = function (l) {
  const filtered = l.filter(function (val, i) {
    return typeof val === "number";
  });

  return filtered;
};
console.log(filter_list([1, 2, "a", "b"]));

// 24.
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Input: 145263 Output: 654321
const descendingOrder = function (n) {
  const t = n.toString();
  const ordered = t.split("").map(function (val) {
    return +val;
  });

  const des = ordered.sort(function (a, b) {
    return b - a;
  });
  const dess = des.join("");
  const nrm = Number(dess);
  return nrm;
};
console.log(descendingOrder(145263));
*/

// 25.
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
const squareDigits = function (num) {
  const str = num.toString();
  const sq = str.split("").map(function (val) {
    return val * val;
  });
  const sqToStr = sq.join("");
  const nrm = Number(sqToStr);
  return nrm;
};

console.log(squareDigits(765));

// 26.
// zevendeso dna a me t dhe anasjelltas po ashtu g me c
const DNAStrand = function (dna) {
  let pairs = { A: "T", T: "A", C: "G", G: "C" };
  const dnna = dna.replace(/./g, (c) => pairs[c]);
  return dnna;
};
console.log(DNAStrand("ATTGC"));

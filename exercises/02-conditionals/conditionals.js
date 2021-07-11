import { interfaces } from "mocha";

/***
 * Change below so that it will also compare data types.
 * ```javascript
 * compareEquality(50, 50); // should return "Equal"
 * compareEquality(50, "50"); // should return "Not Equal"
 * ```
 */
function compareEquality(a, b) {
  if (typeof a === typeof b) {
    return "Equal";
  }
  else;
    return "Not Equal";
}

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line

  if (typeof a !== typeof b) {
    // Only Change Code Above this Line
    return "Not Equal";
  }
  return "Equal";
}

/**
 * Given a number "age", return whether or not someone is a teenager
 * This is someone who is between 13 and 19 years old.
 * Use the logical && operator
 */

const isTeen = true;
const notTeen = false;

function isTeenager(age) {
  if (age >=13 && age <=19){
    return isTeen; // Return something here
}
else (age < 13 && age >19);{
  return notTeen;}
}
 

/**
 * "stringOrNumber" should be true if stringOrNumber is:
 * - a number
 * - a string with numeric characters only (e.g. "5", "1.25", "-4")
 * Use the logical || operator
 * Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumeric(stringOrNumber) {

  if (parseInt(stringOrNumber) || parseFloat(stringOrNumber)) {
    return true;}
  else{ isNaN(stringOrNumber)  ; 
  return false; 
}}


/***
 *  Using conditional logic compare both arguments and return the largest argument
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber = 0;
  if (arg1 > arg2){
    largestNumber = arg1;
    return largestNumber;
  }
    else (largestNumber = arg2);{
      return largestNumber;
    }
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  if (isEven % 2 === 0){
    return "Is Even";
} 
  else (isEven % 2 === 1);{
    return "Is Odd";
  }// return something here
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
  let answer = " ";
    switch (num){
    case 1:
      answer = "ONE";
      break;
    case 2:
      answer = "TWO";
      break;
    case 3:
      answer = "THREE";
      break;
    case 4:
      answer = "FOUR";
      break;
    case 5:
      answer = "FIVE";
      break;
    case 6:
      answer = "SIX";
      break;
    case 7:
      answer = "SEVEN";
      break;
    case 8:
      answer = "EIGHT";
      break;
    case 9:
      answer = "NINE";
      break;
    default:
      return "PLEASE TRY AGAIN";
  }
  return answer;
  }

export {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  isTeenager,
  isNumeric,
  getLargerNumber,
  caseInSwitch,
};

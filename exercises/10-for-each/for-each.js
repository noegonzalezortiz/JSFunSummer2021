/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {
  let newArr =[];
  for(let i=0; i < arr.length; i++){
    newArr.push(callback(arr[i],i,arr));
  }
  return newArr;
};

const findFirst = (arrayOfNum, callback) => {
  for(let i=0; arrayOfNum.length; i++){
    if (callback(arrayOfNum[i])){
      return arrayOfNum[i];
    }
  }
};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
 const showFirstAndLast = (arr) => {
  let result = [];
  arr.forEach((str) => result.push(`${str[0]}${str[str.length - 1]}`));
  return result;
};
  
export { forEach, showFirstAndLast };

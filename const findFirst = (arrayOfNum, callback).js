const findFirst = (arrayOfNum, callback) => {
  for(let i=0; arrayOfNum.length; i++){
    if (callback(arrayOfNum[i])){
      return arrayOfNum[i];
    }
  }
};


const isNumberEven = (num) => {
     if (num % 2 === 0) return true;
     else return false;
   };

console.log(findFirst([3,5,6,7,8],isNumberEven)) 
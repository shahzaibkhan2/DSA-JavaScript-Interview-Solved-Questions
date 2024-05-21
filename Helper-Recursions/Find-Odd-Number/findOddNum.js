// FIND ODD NUMBERS USING RECURSION METHOD

const findOddNum = (arr) => {
  let result = [];
  function recursionHelper(helperArray) {
    if (helperArray.length === 0) {
      return;
    } else if (helperArray[0] % 2 !== 0) {
      result.push(helperArray[0]);
    }
    recursionHelper(helperArray.slice(1));
  }

  recursionHelper(arr);
  return result;
};

const res = findOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(res);

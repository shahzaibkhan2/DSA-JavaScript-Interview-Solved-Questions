// WITH BUILT IN JAVASCRIPT FUNCTIONS AND METHODS

const checkPalindrome = (str) => {
  let newStr = str.split("").reverse().join("");

  return newStr.toLowerCase() === str.toLowerCase();
};

const result = checkPalindrome("deed");
console.log(result);

// ------------------------------ 2nd Question ---------------------------------------

// WITHOUT BUILT IN JAVASCRIPT FUNCTIONS AND METHODS AND ACCORDING TO THE DSA

const modifiedCheckPalindrome = (str) => {
  let newStr = str.toLowerCase();

  let leftPointer = 0;
  let rightPointer = newStr.length - 1;

  while (leftPointer < rightPointer) {
    if (newStr[leftPointer] !== newStr[rightPointer]) return false;

    leftPointer++;
    rightPointer--;
  }

  return true;
};

result2 = modifiedCheckPalindrome("deed");
console.log(result2);

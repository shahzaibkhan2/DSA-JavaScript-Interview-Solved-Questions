// Find the palindrome
const findPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) return "Yes ! This string is palindrome.";
  else return "Sorry ! This string is not palindrome.";
};

const example = findPalindrome("A man, A plan, A canal, panama");
console.log(example);

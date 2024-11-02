const findNumberOfVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");

  let countVowel = 0;
  for (let val of strArr) {
    if (vowels.includes(val.toLowerCase())) countVowel++;
  }

  return countVowel;
};

const example1 = findNumberOfVowels("Hello there how are You");
const example2 = findNumberOfVowels("JavaScript Is awesome");

console.log(
  `Example one has ${example1} vowels and example two has ${example2}`
);

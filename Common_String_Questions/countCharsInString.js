// Count the number of characters in the provided string.

const countCharsInString = (str, char) => {
  // For Single Word
  str = str.toLowerCase();
  // For Multiple Words
  str = str.split(" ").join("").toLowerCase();
  char = char.toLowerCase();
  const result = str.split("").reduce((accum, curChar) => {
    if (curChar === char) accum++;
    return accum;
  }, 0);

  return result;
};

const example = countCharsInString("Functionality", "i");
const exampleTwo = countCharsInString("Functionality of website", "i");
console.log(exampleTwo);

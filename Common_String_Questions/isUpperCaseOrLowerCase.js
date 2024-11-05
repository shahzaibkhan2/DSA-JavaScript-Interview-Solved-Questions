const isUpperCaseOrLowerCase = (letter) => {
  if (letter === letter.toUpperCase()) return `${letter} is upper case`;
  else if (letter === letter.toLowerCase()) {
    return `${letter} is upper case`;
  }
};

// Second approach
const isUpperCaseOrLowerCase = (letter) => {
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90)
    return `${letter} is upper case`;
  else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
    return `${letter} is lower case`;
  else {
    return `${letter} is neither upper nor lower case`;
  }
};

example = isUpperCaseOrLowerCase("s");
console.log(example);

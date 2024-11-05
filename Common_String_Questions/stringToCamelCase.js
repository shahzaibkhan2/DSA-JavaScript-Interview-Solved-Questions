const stringToCamelCase = (str) => {
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");
};

const example = stringToCamelCase("hello world how are you");
console.log(example);

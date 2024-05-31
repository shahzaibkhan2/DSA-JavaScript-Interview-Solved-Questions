const maxOccurringLetter = (str) => {
  let tempObj = {};
  str
    .toLowerCase()
    .split("")
    .forEach((element) => {
      tempObj[element] = tempObj[element] ? tempObj[element] + 1 : 1;
    });

  let max = 1;
  let letter = str[0];

  for (let key in tempObj) {
    if (tempObj[key] > max) {
      max = tempObj[key];
      letter = key;
    }
  }

  return letter;
};

const result = maxOccurringLetter("React is Awesome");
console.log(result);

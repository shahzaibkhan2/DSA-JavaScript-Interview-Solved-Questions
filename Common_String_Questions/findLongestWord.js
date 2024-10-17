// Case 1
const findLongestString = (str) => {
  if (str.trim().length < 1) return "Please provide a string.";
  let myArr = str.split(" ");
  myArr.sort((a, b) => a.length - b.length);
  return myArr.at(-1);
};

// Case 2

const findLongestStringInArray = (str) => {
  if (str.trim().length < 1) return "Please provide a string.";
  let myArr = str.split(" ");
  return myArr.reduce((acum, res) => (acum.length > res.length ? acum : res));
};

const example = findLongestString(
  "Hello world ! This is the javascript question"
);
console.log(example);

const example2 = findLongestStringInArray(
  "Hello world ! This is the javascript question"
);
console.log(example2);

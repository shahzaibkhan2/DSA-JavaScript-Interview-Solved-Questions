// FIND ANAGRAM OF THE GIVEN VALUE IN THE AN ARRAY

const findAnagram = (str1, str2) => {
  let counter = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let key of str1) {
    counter[key] = (counter[key] || 0) + 1;
  }

  for (let key of str2) {
    if (!counter[key]) {
      return false;
    }

    counter[key] -= 1;
  }

  return true;
};

let result = findAnagram("araam", "maraaj");
console.log(result);

// Find Duplicates
// Linear Time Complexity

const findDuplicates = (arr) => {
  let seen = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (seen[arr[i]] === 1) {
        duplicates.push(arr[i]);
      }
      seen[arr[i]]++;
    } else {
      seen[arr[i]] = 1;
    }
  }

  return duplicates;
};

console.log(findDuplicates([1, 1, 2, 3, 4, 5, 2, 3, 7, 8, 9]));

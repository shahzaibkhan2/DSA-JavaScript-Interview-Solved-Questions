// LINEAR TIME COMPLEXITY
// CHECK SQUARE OF THE EACH VALUE IN THE GIVEN ARRAY

const checkSquare = (arr1, arr2) => {
  let obj1 = {};
  let obj2 = {};

  for (let item1 of arr1) {
    obj1[item1] = (obj1[item1] || 0) + 1;
  }

  for (let item2 of arr2) {
    obj2[item2] = (obj2[item2] || 0) + 1;
  }

  for (key in obj1) {
    if (!obj2[key * key]) {
      return false;
    }

    if (obj1[key] !== obj2[key * key]) {
      return false;
    }
  }

  return true;
};

const result = checkSquare([4, 3, 2, 1], [16, 9, 4, 1]);
console.log(result);

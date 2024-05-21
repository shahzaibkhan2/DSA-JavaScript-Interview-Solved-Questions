// QUADRATIC TIME COMPLEXITY
//  CHECK THE SQUARE OF EACH VALUE OF THE GIVEN ARRAY
const checkSquare = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }

      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
};

const result = checkSquare([1, 2, 3, 4], [1, 4, 9, 16]);
console.log(result);

const isPowerOfTwo = (num) => {
  let flag = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === 8) flag = true;
  }

  return flag;
};

const example1 = isPowerOfTwo(4);
const example2 = isPowerOfTwo(3);
console.log(example1);
console.log(example2);

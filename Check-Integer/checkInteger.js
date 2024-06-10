// DSA approach

const checkInteger = (param) => {
  if (param % 1 === 0) {
    return `${param} is integer.`;
  } else {
    return `${param} is not integer.`;
  }
};

console.log(checkInteger(3.43));

// Built-in JavaScript methods approach

const checkIntegerBuiltIn = (param) => {
  if (Number.isInteger(param)) {
    return `${param} is integer.`;
  } else {
    return `${param} is not integer.`;
  }
};

console.log(checkIntegerBuiltIn(2.2));

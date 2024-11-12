const truncateString = (str, count) => {
  return count <= 0 ? str : str.slice(0, count).concat("...");
};

const example = truncateString("Hello world ! how you are doing ?", 9);
console.log(example);

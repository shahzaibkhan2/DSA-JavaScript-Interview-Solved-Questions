// Generate hashtag and make first character of each word capital.
const generateHashtag = (str) => {
  if (str.trim().length === 0 || str.length > 200)
    return "Please provide a string and length must not be more than 200 characters.";
  str = str.split(" ");
  str = str.map((word) => word.replace(word[0], word[0].toUpperCase()));
  str = `#${str.join("")}`;
  return str;
};

const example = generateHashtag("hello world");
console.log(example);

const passwordValidator = (passwordStr) => {
  let isNumber = false;
  let isUppercase = false;
  let isLowercase = false;

  for (let char of passwordStr) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
      isLowercase = true;
    else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
      isUppercase = true;
    else if (!isNaN(Number(char))) isNumber = true;
  }

  if (!isLowercase || !isNumber || !isUppercase || passwordStr.length < 8)
    return false;
  else return true;
};

console.log(passwordValidator("38fdkjSjfk5"));
console.log(passwordValidator("DfHfdkjSjfk"));
console.log(passwordValidator("fdfjdkf3jdkf"));

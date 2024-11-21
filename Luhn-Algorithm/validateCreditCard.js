const validateCreditCard = (str) => {
  str = str.replace(/\D/g, "");
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  const validated = revStr
    .split("")
    .map((value, index) => {
      if (index % 2 !== 0) value *= 2;
      if (value > 9) value = value - 9;
      else value = value;
      return value;
    })
    .reduce((accum, currValue) => accum + Number(currValue), 0);

  return validated % 10 === 0
    ? "Validation of your card is successful !"
    : "Invalid card !";
};

console.log(validateCreditCard("8973 0832 0931 1234"));

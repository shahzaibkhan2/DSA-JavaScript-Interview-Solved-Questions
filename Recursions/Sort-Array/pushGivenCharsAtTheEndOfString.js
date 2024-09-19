const pushGivenCharsAtTheEndOfString = (str, index, counter, emptyStr) => {
  if (index === str.length) {
    for (let i = 0; i < counter; i++) {
      emptyStr += "s";
    }
    console.log(emptyStr);
    return;
  }

  let currentCharacter = str.charAt(index);
  if (currentCharacter === "s") {
    counter++;
    pushGivenCharsAtTheEndOfString(str, index + 1, counter, emptyStr);
  } else {
    emptyStr += currentCharacter;
    pushGivenCharsAtTheEndOfString(str, index + 1, counter, emptyStr);
  }
};

pushGivenCharsAtTheEndOfString("hesllosworsld", 0, 0, "");

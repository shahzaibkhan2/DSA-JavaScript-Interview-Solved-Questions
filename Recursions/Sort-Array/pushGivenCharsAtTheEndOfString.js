const pushAllGivenCharsAtTheEndOfString = (str, index, counter, emptyStr) => {
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
    pushAllSAtTheEndOfString(str, index + 1, counter, emptyStr);
  } else {
    emptyStr += currentCharacter;
    pushAllSAtTheEndOfString(str, index + 1, counter, emptyStr);
  }
};

pushAllSAtTheEndOfString("hesllosworsld", 0, 0, "");

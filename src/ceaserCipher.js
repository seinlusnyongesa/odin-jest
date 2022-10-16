function ceaserCipher(word, shift = 1) {
  let result = "";
  let chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < word.length; i++) {
    let cypherCode = (word[i].charCodeAt(0) - "a".charCodeAt(0) + shift) % 26;

    if (cypherCode < 0) {
      let lowerCase = word[i].toLowerCase();
      cypherCode = (lowerCase.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26;
      if (cypherCode < 0) {
        result += word[i];
      } else {
        result += chars[cypherCode].toUpperCase();
      }
    } else {
      result += chars[cypherCode];
    }
  }
  return result;
}

module.exports = ceaserCipher;

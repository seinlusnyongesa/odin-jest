function reverseString(word) {
  let reversed = word.split("").reverse().join("");
  return reversed;
}

module.exports = reverseString;

function capitalize(word) {
  let firstLetter = word.slice(0, 1);
  return firstLetter.toUpperCase() + word.slice(1, word.length).toLowerCase();
}

module.exports = capitalize;

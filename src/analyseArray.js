function analyseArray(arr) {
  return {
    length: findLength(arr),
    max: findMax(arr),
    min: findMin(arr),
    average: findAverage(arr),
  };
}

function findLength(arr) {
  return arr.length;
}
function findMax(arr) {
  let max = -Infinity;
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

function findMin(arr) {
  let min = Infinity;
  for (let i of arr) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}

function findAverage(arr) {
  let total = arr.reduce((prev, next) => next + prev, 0);
  return total / arr.length;
}

module.exports = analyseArray;

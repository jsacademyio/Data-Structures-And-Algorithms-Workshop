const array = [
  [1, 2, 3, 4],
  [3, 6, 7, 9],
  [3, 6, 7, 9],
  [3, 6, 7, 9],
];

// Major: 1, 6, 7, 9 = 23
// Minor: 4, 7, 6, 3 = 20

// Find sum of major diagonal
// Find sum of minor diagonal
// subtract the two
// Get the absolute value of the difference

// Items on the major diagonal have the same index for column and row
function majorDiagonal(squareArray) {
  let sum = 0;
  const length = squareArray.length;
  for (let i = 0; i < length; i++) {
    sum = sum + squareArray[i][i];
  }
  return sum;
}

// Items on the minor diagonal have a column and row index equal
// to the size of the array plus one
function minorDiagonal(squareArray) {
  let sum = 0;
  const length = squareArray.length;
  for (let i = 0; i < length; i++) {
    const column = length - i - 1;
    sum = sum + squareArray[i][column];
  }
  return sum;
}

function findDiagonalDifference(squareArray) {
  const major = majorDiagonal(squareArray);
  const minor = minorDiagonal(squareArray);
  const difference = major - minor;
  return Math.abs(difference);
}

const difference = findDiagonalDifference(array);
console.log(difference);
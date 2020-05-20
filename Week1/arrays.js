const arr = [1, 2, 3, 4, 10, 11, 3, 6, 50, 8];

function findLargestNumber (array) {
  let largest = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

let largestNumber = findLargestNumber(arr);
console.log(largestNumber);
const arr = [1, 2, 3];

// Iterate through array and add items
function iterativeSum(array) {
  let sum = 0;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

// Recursively find the sum of items in the array
function recursiveSum(array) {
  if (array.length === 0) {
    return 0;
  }
  let first = array[0];
  let newArray = array.slice(1);
  return first + recursiveSum(newArray);
}

let sum = iterativeSum(arr);
console.log('iterative sum:', sum);

let anotherSum = recursiveSum(arr);
console.log('recursive sum:', anotherSum);
const unsortedArray = [3, 1, 5, 8];

// For each item in an array, find any item to its left which is larger, and swap their positions
function bubbleSort (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap items j and (j + 1)
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

  }
  return arr;
}

const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);

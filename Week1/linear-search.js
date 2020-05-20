const unsorted = [8, 3, 7, 9, 2, 7];

function linearSearch (array, item) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  // If we're here, we didn't find what we were looking for
  return -1;
}

const index = linearSearch(unsorted, 7);
console.log('Found at:', index);

// A number we won't find
const notFound = linearSearch(unsorted, 30);
console.log('Returned:', notFound);
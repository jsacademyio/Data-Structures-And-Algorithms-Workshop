// Given an array of prices for items we want to buy, `prices`, and a fixed
// budget, `budget`, what is the maximum number of items we can buy?
const prices = [1, 2, 2, 3, 7, 5];
const budget = 10;

function bubbleSort (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {

    for (let j = 0; j < length; j++) {
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

// First sort the array in ascending order
// Subtract items prices from the budget
// if budget is not exhausted, count that subtraction
function numberOfPurchases (arr, budget) {
  const sorted = bubbleSort(arr);
  let length = sorted.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    budget = budget - sorted[i]; // try buying an item
    if (budget >= 0) { // there is still money
      count = count + 1;
    } else { // stop attempting to buy if there is no money
      break;
    }
  }
  return count;
}

const numberOfItemsBought = numberOfPurchases(prices, budget);
console.log(numberOfItemsBought);
// Fibonacci(1) = 1
// Fibonacci(2) = 1 + 2
// Fibonacci(3) = 1 + 2 + 3
// Fibonacci(5) = 1 + 2 + 3 + 4 + 5

function fibonacci (n) {
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + n;
}

const value = fibonacci(3);
console.log(value);
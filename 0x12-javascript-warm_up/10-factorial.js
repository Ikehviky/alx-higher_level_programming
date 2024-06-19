#!/usr/bin/node

const num = parseInt(process.argv[2]);

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial(n-1)
  return n * factorial(n - 1);
}

// Check if num is NaN (not a number)
if (isNaN(num)) {
  console.log(1);
} else {
  // Calculate factorial
  const result = factorial(num);
  console.log(result);
}

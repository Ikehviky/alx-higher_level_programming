#!/usr/bin/node

const args = process.argv.slice(2).map(Number);

if (args.length <= 1) {
  console.log(0);
} else {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;

  for (let num of args) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2 && num < max1) {
      max2 = num;
    }
  }

  console.log(max2);
}

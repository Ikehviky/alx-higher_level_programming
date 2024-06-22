#!/usr/bin/node

exports.converter = function (base) {
    // Define a recursive function to convert a number to the specified base
    function convert(number) {
      if (number < base) {
        // Base case: when the number is less than the base, return it as a string
        return number.toString(base);
      } else {
        // Recursive case: divide the number by base and convert the quotient recursively
        return convert(Math.floor(number / base)) + (number % base).toString(base);
      }
    }
  
    // Return the closure function that performs the conversion
    return convert;
  };
  
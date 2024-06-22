#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor(size) {
    // Call parent class constructor with size for both width and height
    super(size, size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Default character is 'X' if not provided
    }

    // Print the square using character c
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;

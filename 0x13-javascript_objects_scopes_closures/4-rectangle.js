#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is not a positive integer, create an empty object
        Object.create(null);
      }
    }
  
    print() {
      // If width or height is undefined or zero, do not print anything
      if (!this.width || !this.height) {
        return;
      }
  
      // Loop through height to print rows of 'X'
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  
    rotate() {
      // Swap width and height
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Double the width and height
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  
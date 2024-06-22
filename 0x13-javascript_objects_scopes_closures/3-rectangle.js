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
  }
  
  module.exports = Rectangle;
  
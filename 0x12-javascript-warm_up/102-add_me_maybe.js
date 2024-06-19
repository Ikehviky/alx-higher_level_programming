#!/usr/bin/node

function addMeMaybe(number, theFunction) {
    const incrementedNumber = number + 1;
    theFunction(incrementedNumber);
  }
  
  module.exports = { addMeMaybe };
  
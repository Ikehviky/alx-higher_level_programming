#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
    // Initialize a counter for occurrences
    let count = 0;
  
    // Iterate through the list
    for (let i = 0; i < list.length; i++) {
      // Check if the current element matches the searchElement
      if (list[i] === searchElement) {
        count++;
      }
    }
  
    return count;
  };
  
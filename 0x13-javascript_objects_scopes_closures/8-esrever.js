#!/usr/bin/node

exports.esrever = function (list) {
    // Initialize pointers
    let start = 0;
    let end = list.length - 1;
  
    // Swap elements from start to end
    while (start < end) {
      // Temporary variable to hold the value at start
      let temp = list[start];
      // Swap start and end elements
      list[start] = list[end];
      list[end] = temp;
      // Move pointers towards the center
      start++;
      end--;
    }
  
    return list;
  };
  
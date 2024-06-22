#!/usr/bin/node

const { dict } = require('./101-data');

// Initialize an empty object to store the new dictionary
const occurrencesDict = {};

// Iterate through each key-value pair in the original dictionary
for (let userId in dict) {
  // Get the number of occurrences from the original dictionary
  const occurrences = dict[userId];

  // If occurrences is not a key in occurrencesDict, initialize it as an empty array
  if (!occurrencesDict[occurrences]) {
    occurrencesDict[occurrences] = [];
  }

  // Push the userId to the array corresponding to occurrences
  occurrencesDict[occurrences].push(userId);
}

// Print the new dictionary
console.log(occurrencesDict);

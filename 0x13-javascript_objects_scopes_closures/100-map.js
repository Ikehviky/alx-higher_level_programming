#!/usr/bin/node

const { list } = require('./100-data');

// Use map to create a new array where each element is multiplied by its index
const newList = list.map((value, index) => value * index);

// Print the initial list and the new list
console.log(list);
console.log(newList);

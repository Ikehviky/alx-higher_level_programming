#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments are provided
if (process.argv.length !== 5) {
  console.error('Usage: ./102-concat.js fileA fileB fileC');
  process.exit(1);
}

// Read file paths from command line arguments
const fileAPath = process.argv[2];
const fileBPath = process.argv[3];
const fileCPath = process.argv[4];

// Function to read and concatenate two files
function concatFiles(fileA, fileB, destination) {
  try {
    // Read contents of fileA
    const dataA = fs.readFileSync(fileA, 'utf8');
    
    // Read contents of fileB
    const dataB = fs.readFileSync(fileB, 'utf8');
    
    // Concatenate contents of fileA and fileB with a newline separator
    const concatenatedData = dataA.trim() + '\n' + dataB.trim() + '\n';
    
    // Write concatenated data to destination file
    fs.writeFileSync(destination, concatenatedData);
    
    console.log(`Concatenation complete. Output written to ${destination}`);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

// Invoke the concatFiles function with provided file paths
concatFiles(fileAPath, fileBPath, fileCPath);

#!/usr/bin/node
const args = process.argv.slice(2);
const num = parseInt(args[0]);

if(isNaN(num)){
    console.log("Not a Number");
}else{
    console.log(`my number : ${num}`);
}

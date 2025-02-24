//Local Modules

const {add, x} = require('./local-module-1')
const {add: add2, x:x2} = require('./local-module-2')

const sum = add(4, 8);
const value = x;


const sum2 = add(4, 8, 10);
const value2 = x2;

console.log(sum, value, sum2, x2)

// Built-in modules

const path = require("path");

const directoryName = path.dirname("/home/hafij/Documents/Dev/Personal/hello-nodejs/index.js")
const parsedPath = path.parse("/home/hafij/Documents/Dev/Personal/hello-nodejs/index.js")
const joinedPath = path.join("/home/hafij/Documents/Dev/Personal/hello-nodejs/", "local-module-1.js")

console.log(directoryName)
console.log(parsedPath)
console.log(joinedPath)
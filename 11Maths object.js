// Math.random()

// Generate a decimal number between 0 and 0.99
Math.random();

//  save it to a variable:
var decimal = Math.random();

//log the value of decimal to the console
console.log(decimal);

// log the value of decimal MULTIPLIED by 10
console.log(decimal * 10);

// Math.ceil()

// Round up any decimal number to the nearest integer
// var rounded = Math.ceil(0.0001);
var value = Math.ceil(0.5);
// var rounded = Math.ceil(2.99);
console.log(value);

var figure = Math.random() * 10;
var digit = Math.ceil(figure);
console.log(digit)
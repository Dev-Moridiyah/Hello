function localScopeExample() {
    var localVar = 10;
    console.log(localVar); // Accessing localVar inside the function
  }
  
  localScopeExample(); // Outputs: 10
  // Trying to access localVar outside the function will result in an error
  // console.log(localVar); // This will throw an error

var globalVariable = 42;
  function myFunction() {
    console.log(globalVariable); // Accessing globalVariable from within a function
  }
  
  myFunction(); // Outputs: 42
  console.log(globalVariable); // Outputs: 42

function getDistance(mph, h) {
  return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);

function addTwoNums(a, b) {
  console.log(a + b)
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
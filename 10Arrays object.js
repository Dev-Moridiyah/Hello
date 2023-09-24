var fruits = [];
fruits.push("apple");
fruits.push('pear');
console.log(fruits);
// To remove the last item from an array
fruits.pop();
console.log(fruits);

function Okuniyi(one, two, three) {
    var fausat = [];
    fausat.push(one);
    fausat.push(two);
    fausat["push"](three);
    console.log(fausat);
    Okuniyi("apple", "pear", "plum");
}
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);
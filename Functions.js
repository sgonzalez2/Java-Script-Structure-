
add(5,22);

function add(num1, num2){
    console.log('In Fuction!');
    return num1 + num2;
//--> Function Displayed 'In Function!'
}

console.log(q(1,22));

function q(num1, num2){
    return num1 + num2;
//--> 22
} 

var sum = w(221, 589);
console.log (sum);

function w(num1, num2) {
    return num1 + num2;
//--> 810
} 
var sum = w (534,222)
var val = subtract (5,7)

console.log(val);
function subtract(num1, num2) {
    return num1 - num2;
//--> -2 
}

var s = r(221,598);
var v = t(s, 7);

console.log(v);

function r(num1, num2) {
    return num1 + num2;
}
function t(num1, num2) {
    return num1 - num2;
}
//--> 812 

var b = m(n(2,3),7);

console.log(b);

function n(num1,num2) {
    return num1 + num2;
}
function m(num1, num2) {
    return num1 - num2;
//--> -2 
} 

var j = l(k(2,3), l(5,3));

console.log(j);

function k (num1, num2) {
    return num1 + num2;
}
function l (num1, num2) {
    return num1 - num2;
//--> 3
}
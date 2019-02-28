//How to use Arrays

let list = [2,4,6,7,10];
let index = 2;
let a = 5;
let b = -3;

//Using Arrays lets you interact with data inside the collection

//Select 6 to the console
console.log(list[2]);

//Select 6 to the console
console.log(list[1+1]);

//Select 6 to the console
console.log(list[index]);

//Select 6 to the console
console.log(list[a+b]);


//How Properties Work

let greeting = 'Hello World';
let Property = 'length';

//Select 11 to the console
console.log(greeting.length);

//Select 11 to the console
console.log(greeting['length']);

//Select 11 to the console
console.log(greeting[Property]);

//Using Method Function

let greetings = 'Hello World';

//Log "function" to the console
console.log(typeof greetings.toUpperCase);

//Log "HELLO WORLD" to the console
console.log(greetings.toUpperCase());

//Methods for munipulating data using Arrays

let lists =[2,4,6,7,10];

console.log(lists);
// --> [2,4,6,7,10]

lists.push(3);

console.log (lists);
//--> [2,4,6,7,10, 3]

console.log(lists.pop());
//--> 3

console.log(lists);
//--> [2,4,6,7,10]

console.log(lists.concat([3, 4]));
//--> //--> [2,4,6,7,10,3,4]

console.log(lists);
//-->//--> [2,4,6,7,10]

lists = lists.concat ([3,4]);

console.log(lists);
//-->[2,4,6,7,10, 3, 4]
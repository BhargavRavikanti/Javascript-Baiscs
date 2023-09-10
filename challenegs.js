/*
// NOTES


*/

// My Practice

// =========================================
// =========================================
//               JOHN SMILGA
// =========================================
// =========================================

////////////////////////////////
// 03 -
////////////////////////////////

// ===================================
// 010 -
// ===================================

// 32 Important Javascript Programs(wscube tech)

//// 1) Program to print Hello World using three methods ////

//// 2) Program to Add to Numbers ////
// Our Agenda
// 1. Program to add static numbers.
// 2. Program to add dynamic numbers.

// const a = 5;
// const b = 6;
// const c = a + b;
// console.log(c);

// let a = prompt("enter first number");
// let b = prompt("enter second number");
// let c = parseInt(a) + parseInt(b);
// console.log(c);

// function add(x, y) {
//   return x + y;
// }
// console.log(add(2, 3));

// const add = function (x, y) {
//   return x + y;
// };
// console.log(add(4, 5));

// add = (x, y) => {
//   return x + y;
// };
// console.log(add(6, 7));

////////// 3) Square Root of Number. //////////

// const a = prompt("enter number");
// const b = Math.sqrt(a);
// console.log(b);

// // square of a number
// let a = prompt("enter a number");
// let b = parseInt(a * a);
// console.log(b);

// function square(x) {
//   return x * x;
// }
// console.log(square(5));

// const square = function (x) {
//   return x * x;
// };
// console.log(square(20));

// square = (x) => {
//   return x * x;
// };
// console.log(square(8));

////////// 4) Calculate the Area of a Triangle . //////////

// const base = prompt("enter base value");
// const height = prompt("enter height value");
// const areaOftriangle = (base * height) / 2;
// console.log(areaOftriangle);

// function aOfTriangle(base, height) {
//   return (base * height) / 2;
// }
// console.log(aOfTriangle(10, 10));

// function aOfTriangle(x, y) {
//   return (x * y) / 2;
// }
// console.log(aOfTriangle(10, 10));

// // static
// const a = 10;
// const b = 5;
// const c = 10;
// const s = (a + b + c) / 2;
// const temp = s * (s - a) * (s - b) * (s - c);
// // console.log(temp);
// const area = Math.sqrt(temp);
// console.log(area); // 24.206145913796355

// // static
// const a = 20;
// const b = 5;
// const c = 20;
// const s = (a + b + c) / 2;
// const temp = s * (s - a) * (s - b) * (s - c);
// // console.log(temp);
// const area = Math.sqrt(temp);
// console.log(area); // 49.607837082461074

// // dynamic
// const a = prompt("enter a value");
// const b = prompt("enter b value");
// const c = prompt("enter c value");
// const s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
// // console.log(s);
// const temp = s * (s - a) * (s - b) * (s - c);
// // console.log(temp);
// let area = alert(temp);
// area = Math.sqrt(temp);
// console.log(area); // 24.206145913796355 // 49.607837082461074

////////// 5) Swap two Numbera Using & without using temporary variable. //////////
// Our Agenda
// 1. Swapping using temporary variable.
// 2. Swapping without using temporary variable.

// let a = prompt("enter a value");
// let b = prompt("enter b value");
// console.log(`a value is ${a}, b value is ${b}`);
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(`After Swapping \n a value is ${a}, b value is ${b}`);

// static
// let a = 5;
// let b = 6;
// console.log(`a value is ${a}, b value is ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`Ater Swaping \n a value is ${a}, b value is ${b}`);

// // dynamic
// let a = parseInt(prompt("enter a value"));
// let b = parseInt(prompt("enter b value"));
// console.log(`a = ${a}, b = ${b}`);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`Ater Swaping \n a = ${a}, b = ${b}`);

////////// 6) Convert Kilometers to miles . //////////

// const Kilometers = 0.621371;
// const factor = prompt();
// const miles = Kilometers * factor;
// console.log(miles);

////////// 7) Convert Celcius to FahrenHeit. //////////

// const celcius = prompt();
// const fahrenheit = celcius * 1.8 + 32;
// console.log(fahrenheit);

////////// 8) Check if a number is Positive, Negative or Zero. //////////
// Our Agenda
// Using Math.sign() method
// Using user defined function

// const check = Math.sign(0);
// console.log(check);

// let num = prompt();
// if (num > 0) {
//   console.log("positive");
// } else if (num < 0) {
//   console.log("negative");
// } else if (num == 0) {
//   console.log(0);
// } else {
//   console.log("enter a number");
// }
// console.log(num);

////////// 9) Generate a random Number Using Math.random(). //////////
// Our Agenda
// Using Math.random() method.

// let rand = Math.floor(Math.random() * 9000 + 1000);
// console.log(rand);

////////// 10) Check if a Number is Odd or Even. //////////
// Our Agenda
// Checking using if-else
// Checking using ternary operator

// let num = prompt();
// if (num % 2 === 0) {
//   console.log("Even");
// } else if (num % 2 === 1) {
//   console.log("Odd");
// } else {
//   console.log(NaN);
// }
// console.log(num);

// let num = prompt();
// let oddOrEven = num % 2 === 0 ? "even" : "odd";
// console.log(oddOrEven);

////////// 11) Check if a Number is a Prime Number. //////////

////////// 12) Find Largest Among Three Numbers . //////////
// Our Agenda
// Using Math.max() method.
// Using user defined method

// let rand = prompt();
// let rand2 = prompt();
// let rand3 = prompt();
// console.log(Math.max(rand, rand2, rand3));

// let rand = prompt();
// let rand2 = prompt();
// let rand3 = prompt();
// if (rand >= rand2 && rand >= rand3) {
//   console.log(`rand ${rand} is greater than ${rand2} and ${rand3}`);
// } else if (rand2 >= rand && rand2 >= rand3) {
//   console.log(`rand2 ${rand2} is greater than ${rand} and ${rand3}`);
// } else {
//   console.log(`rand3 ${rand3} is greater than ${rand} and ${rand2}`);
// }

////////// 13) . //////////
////////// 14) . //////////
////////// 15) . //////////
////////// 16) . //////////
////////// 17) . //////////
////////// 18) . //////////
////////// 19) . //////////
////////// 20) . //////////
////////// 21) . //////////
////////// 22) . //////////
////////// 23) . //////////
////////// 24) . //////////
////////// 25) . //////////
////////// 26) . //////////
////////// 27) . //////////
////////// 28) . //////////
////////// 29) . //////////
////////// 30) . //////////
////////// 31) . //////////
////////// 32) . //////////

// let input = prompt("OK, YOU QUIT THE APP");
// const todos = ["Collect Chiken Eggs", "Clean Litter Box"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("***************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("***************");
//   } else if (input === "new") {
//     const newTodo = prompt("OK, what is the todo?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list`);
//   }
//   input = prompt("what would you like to do?");
// }
// console.log("OK, YOU QUIT THE APP");

// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("the five boxing wizards jump quickly"));
// console.log(isPangram("the five boxing wizards jump quicklY"));
// console.log(isPangram("the five boxing wizards jump quick"));

// function tripleArr(array) {
//   const thrippledArray = [];
//   for (let num of array) {
//     let thriple = num * 3;
//     thrippledArray.push(thriple);
//   }
//   return thrippledArray;
// }
// console.log(tripleArr([1, 2, 3]));
// console.log(tripleArr([4, 4, 4]));

// const names = ["anna", "susy", "bob"];
// const lastName = "shakeandbake";
// let newArray = [];

// const newArray1 = newArray.concat(names).concat(lastName);
// console.log(newArray1);

// // for loop
// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   newArray.push(`${names[i]} ${lastName}`);
// }
// console.log(newArray);
// 5 sep 2023 tue //================================================
// printing hahaha 100 times to console
// function callTenTimes(func) {
//   for (let i = 0; i < 100; i++) { // call template or higher order function to do 100 times
//     func();
//   }
// }

// function laughing() {
//   console.log("hahahaha");
// }

// callTenTimes(laughing);

// printing hahaha N times to console
// function repeatNtimes(func, num) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

// function laugh() {
//   console.log("hahaha");
// }

// repeatNtimes(laugh, 10);

// function add(x, y) {
//   return x + y;
// }

// const multiply = function (x, y) {
//   return x * y;
// };

// const operations = [add, multiply];
// console.log(operations[0]);
// console.log(operations[0](2, 5));

// for (let func of operations) {
//   let result = func(30, 5);
//   console.log(result);
// }

// const thing = {
//   add: add,
//   multiply: multiply,
// };
// console.log(thing.add);
// console.log(thing.add(4, 5));
// console.log(thing.multiply);
// console.log(thing.multiply(5, 10));

// function morning(namess) {
//   return `good morning ${namess.toUpperCase()}`;
// }

// function greet(cb, name) {
//   const myName = "bharu";
//   console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet(morning, "peter"); // // good morning PETER, my name is bharu

// good morning PETER, my name is bharu

// function greet(cb, name, name1) {
//   const myName = "bharu";
//   console.log(`${cb(name, name1)}, my name is ${myName}`);
// }

// function morning(name, name1) {
//   return `good morning ${name},${name1}`;
// }

// greet(morning, "peter", "rockzz");

// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);
// console.log(triple(8));
// console.log(triple(50));

// const suits = ["hearts", "diamonds", "spades", "clubs"];
// const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

// function initializeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       });
//     }
//   }
//   return deck;
// }
// console.log(initializeDeck());

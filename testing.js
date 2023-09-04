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

// ======================================
// 004 NaN & Infinity
// ======================================

// 1) write some programs which are NOT A NUMBER (NaN).
// 2) write some programs which are infinity.

// 1) write some programs which are NOT A NUMBER (NaN).
// console.log(1 + NaN);
// console.log("bharu" + NaN);
// console.log(NaN + "bharu");
// console.log(0 + NaN);
// console.log(0 / 0);
// console.log(-0 / 0);
// console.log("bharu" / 0);

// 2) write some programs which are infinity.
// console.log(1 / 0);
// console.log(-1 / 0);

// ======================================
// 005 - Numbers Quiz
// ======================================

// 1) write some examples for numbers.
// console.log(1.5 + 1.5 * 2);
// console.log((10 % 6) ** 2);
// console.log(200 + 0 / 0);

// ======================================
// 006 - Variables & Let
// ======================================

// 1) write a variable using let and update values.
// 2) uses of let ?

// 1) write a variable using let and update values.

// let myName = "bharu";
// console.log(myName);
// // updating a variable
// myName = "Bhargav Ravikanti";
// console.log(myName);

// 2) uses of let ?
// let is useful for updating values.

// ======================================
// 007 - Unary Operators
// ======================================

// 1) what are unary operators and what does uninary means? write an example.

// // binary way
// let score = 0;
// score = score + 10;
// console.log(score);

// score += 1;
// console.log(score);

// score += 10;
// console.log(score);

// score -= 100;
// console.log(score);

// score = 150;
// console.log(score);

// let bonusMult = 3;
// // score = score * bonusMult;
// // console.log(score);
// score *= bonusMult;
// console.log(score);

// // uninary way
// let counter = 0;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);

// ======================================
// 008 - Introducing Const
// ======================================

// 1) Declare a variable using const.
// 2) Why we use CONST?

// 1) Declare a variable using const.
// const myName = "Bhargav Ravikanti";
// console.log(myName);
// // myName = "Bhargav Ravikanti"; // cannot assign once it is fixed

// 2) Why we use CONST?
// // // we use CONST to make sure the value does not change

// ======================================
// 010 - Variables Quiz
// ======================================

// 1) create a variable using let and decrease value using uninary operator and also using binary operators.
// 2) create a variable using let and add 2.
// 3) create a variable using const and display in console.

// 1) create a variable using let and decrease value using uninary operator and also using binary operators.

// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas--;
// console.log(bharuHas);

// binary operators
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = bharuHas - 1;
// console.log(bharuHas);

// another way uisng binary operators
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas -= 1;
// console.log(bharuHas);

// 2) create a variable using let and add 2.
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = bharuHas + 2;
// console.log(bharuHas);

// 3) create a variable using const and display in console.
// const myName = "Bhargav Ravikanti";
// console.log(myName);

// ======================================
// 001 - Booleans Intro
// ======================================
/*
// 1) create a variable and set value true and console.
// 2) create a variable and set value false and console.
// 3) create a variable and set value false and update it true and console.
// 4) create a variable and set a number and change it to boolean.
*/

// 1) create a variable and set value true and console.
// const bharuIsGood = true;
// console.log(bharuIsGood);

// 2) create a variable and set value false and console.
// const bharuIsBad = false;
// console.log(bharuIsBad);

// 3) create a variable and set value false and update it true and console.
// let dhanushIsGood = false;
// console.log(dhanushIsGood);
// dhanushIsGood = true;
// console.log(dhanushIsGood);

// 4) create a variable and set a number and change it to boolean.
// let bharuHas = 10;
// console.log(bharuHas);
// bharuHas = "10 rupees";
// console.log(bharuHas);
// bharuHas = true;
// console.log(bharuHas);

// ======================================
// 002 - Strings
// ======================================
/*
// 1) create a string and check whether it is a string or not and console.
// 2) create two strings and merge it and console.
// 3) create number as a string and add,sub,div,multiply,modulus observe weird behaviour.
*/

// 1) create a string and check whether it is a string or not and console.
// const brotherName = "dhanush";
// console.log(brotherName, "is a", typeof brotherName);

// 2) create two strings and merge it and console.
// const firstName = "Bhargav";
// const lastName = "Ravikanti";
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// 3) create number as a string and add,sub,div,multiply,modulus observe weird behaviour mainly add.
// let random = "20";
// console.log(random);
// random = "20" + 1;
// console.log(random);
// random = "20" - 1;
// console.log(random);
// random = "20" / 2;
// console.log(random);
// random = "20" % 2;
// console.log(random);
// random = "20" % 3;
// console.log(random);
// random = "20" % 7;
// console.log(random);

// ======================================
// 003 - String Indices
// ======================================
/*
// 1) create a string
// check how many characters that string has.
// access the 3rd character
// access the 6th character
// acess the last character
// set 3rd character as X
// set 6th character as Y
// set last character as Z and console it.
*/

// // 1) create a string
// let fullName = "Ravikanti Bhargav";

// // check how many characters that string has.
// console.log(fullName.length);

// // access the 3rd character
// console.log(fullName[2]);

// // access the 6th character
// console.log(fullName[5]);

// // access the last character
// console.log(fullName[fullName.length - 1]);

// // set 3rd character as X
// console.log((fullName[2] = "X"));

// // set 6th character as Y
// console.log((fullName[5] = "Y"));

// // set last character as Z and console it.
// console.log(fullName.length - 1);
// console.log(fullName[fullName.length - 1]);
// console.log((fullName[fullName.length - 1] = "Z"));

// ======================================
// 004 - String Methods
// ======================================
/*
// 1) create a string having both sides some white spaces and check length and remove white spaces of that string.
// 2) create a string make all capital letters.
// make i as capital letter
// 3) create a string make all small letters.
// make I as small letter
*/

// 1) create a string having both sides some white spaces and check length and remove white spaces from both sides of that string and check length.
// let fullName = "  Ravikanti Bhargav    ";
// console.log(fullName.length);
// let fullName1 = fullName.trim();
// console.log(fullName1);
// console.log(fullName1.length);

// 2) create a string make all letters capital.
// let fullName = "Ravikanti Bhargav";
// let fullName1 = fullName.toUpperCase();
// console.log(fullName1);

// // make i as capital letter
// console.log("Ravikanti".length);
// console.log("Ravikanti"["Ravikanti".length - 1]);
// let fullName2 = (fullName[8] = "I");
// console.log(fullName2);
// let fullName3 = fullName[8].toUpperCase();
// console.log(fullName3);

// 3) create a string make all small letters.
// let fullName = "rAVIKANTI bHARGAV";
// let fullName1 = fullName.toLowerCase();
// console.log(fullName1);

// // make i as small letter
// console.log("rAVIKANTI".length);
// console.log("rAVIKANTI"["rAVIKANTI".length - 1]);
// let fullName2 = (fullName[8] = "i"); // method 1 not recommended
// console.log(fullName2);
// let fullName3 = fullName[8].toLowerCase(); // method 2 always use this method
// console.log(fullName3);

// ======================================
// 005 - More String Methods
// ======================================

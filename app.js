// ======================================
// 01 - Introduction
// ======================================

// 001
// ======================================
// 002
// ======================================
// 003
// ======================================
// 004
// ======================================

// ======================================
// 02 - JS Values & Variables
// ======================================

// 001 Goals & Primitives
// ======================================
// GOALS
// Work with primitive
// Understand let & const
// Use String Template Literals
// Work with common operators/methods

// 002 Running Code in the JS Console
// ======================================
// 003 Introducing Numbers
// ======================================

// console.log(13);
// console.log(345);
// console.log(-2);
// console.log(2.345);
// console.log(1.0000000000000009);
// console.log(1.00000000000000009);

// simple operations

// // Addition
// console.log(50 + 5);
// // subtraction
// console.log(90 - 1);
// // multiplication
// console.log(11111 * 7);
// // division
// console.log(400 / 25);
// // modulo
// // modulo gives remainder
// console.log(27 % 2);
// console.log(27 % 3);
// console.log(7 % 3);
// // exponential
// console.log(2 ** 3);
// console.log(2 ** 4);
// console.log(2 ** 5);
// console.log(3 ** 2);
// console.log(3 ** 3);
// console.log(3 ** 4);
// console.log(3 ** 5);
// console.log(3 ** 6);
// console.log(4 ** 4);
// console.log(5 ** 5);

// console.log(3 - 9 * 2);
// // correct way remember BODMAS RULE Bracket Of Division Multiplication Addition Subtraction
// console.log((3 - 9) * 2);

// 004 NaN & Infinity
// ======================================

// NaN
// NOT A NUMBER
// NaN is a numeric value that represents something that is not ...a number

// console.log(0 / 0);
// console.log(1 + NaN);
// console.log(5 + NaN);
// console.log(NaN + 7);

// console.log(1 / 0);
// console.log(-1 / 0);

// console.log(0);
// console.log(-0);

// console.log("bharu" - 1);
// console.log("bharu" / 1);
// console.log("bharu" * 1);
// console.log("bharu" % 1);

// console.log("2" - 1);
// console.log("2" * 1);
// console.log("2" / 1);

// 005 Numbers Quiz
// ======================================

// console.log(1.5 + 1.5 * 2);
// console.log((10 % 6) ** 2);
// console.log(200 + 0 / 0);

// 006 Variables & Let
// ======================================

// BASIC SYNTAX
// let someName = value;
// let is useful for updating values

// let age = 72;
// console.log(age);

// age = age + 1;
// console.log(age);

// age = age + 10;
// console.log(age);

// age = 18;
// console.log(age);

// let hens = 4;
// let roosters = 2;

// console.log(hens + roosters);

// // update values

// // a raccoon killed a hen
// hens - 1;
// console.log(hens); // 4!

// // correct way of updating or to actually change hens
// hens = hens - 1;
// console.log(hens); // 3

// 007 Unary Operators
// ======================================
// uninary means one side

// // normal way
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

// // uninary
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

// 008 Introducing Const
// ======================================
// const means just constant you cannot change value
// const works just like let, except you CANNOT change the value

// const pens = 4;
// // pens = 20;
// console.log(pens); // ERROR!
// // const works just like let, except you CANNOT change the value

// const personAge = 17;
// // personAge = personAge + 1;
// console.log(personAge); // ERROR!

// // WHY USE CONST?
// // we use CONST to make sure the value does not change

// const pi = 3.14159;
// const daysInWeek = 7;
// const minutesInHour = 60;

// // Once we cover Arrays & Objects, we will see other situations where CONST makes sense over LET.

// const peopleCount = 10;
// // let peopleCount = 3; // ERROR! once using const we cannot declare same variable name for let

// 009 The Legacy of Var
// ======================================

// 010 Variables Quiz
// ======================================

// let eggCount = 42;
// eggCount + 2;
// console.log(eggCount);

// const rating = 7.5;
// // rating = 8;
// console.log(rating);

// let wind_Speed = 76;

// wind_Speed += 5; // not good
// wind_Speed--; // not good
// console.log(wind_Speed);

// ======================================
// 03 - How to Model Data Efficiency
// ======================================

// 001 Booleans Intro
// ======================================

// booleans are simple True or False values Yes or No. 1 or 0.

// let isLoggedIn = true;
// console.log(isLoggedIn);
// let gameOver = false;
// console.log(gameOver);
// const isWaterWet = true;
// console.log(isWaterWet);

// let isHungry = true;
// console.log(isHungry);
// isHungry = false;
// console.log(isHungry);

// VARIABLES CAN CHANGE TYPE
// you probably would not change a number to a boolean, but you can!

// let numDonuts = 12; // it is a Number
// console.log(typeof numDonuts);
// numDonuts = false; // now it is a Boolean
// console.log(typeof numDonuts);
// numDonuts = 129873872; // back to Number
// console.log(typeof numDonuts);

// 002 Strings
// ======================================

// let name = "Ziggy";
// console.log(typeof name, name);
// let msg = "Please do not feed the chimps";
// console.log(typeof msg);
// let animal = "Dumbo Octopus";
// console.log(typeof animal);
// const number = 87;
// console.log(typeof number, number);
// const string = "87";
// console.log(typeof string, string);

// let firstName = "Bhargav";
// let lastName = "Ravikanti";
// // + means concat concat means combining into one
// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// let hi = "hi" + 1; // string + number = string
// console.log(hi, typeof hi);
// hi = "hi" - 1; // string - number = number
// console.log(hi, typeof hi);
// hi = "hi" / 1; // string / number = number
// console.log(hi, typeof hi);
// let hello = "hello" - "h";
// console.log(hello);
// hello = "hello" / "h";
// console.log(hello);
// hello = "hello" / 1;
// console.log(hello);

// // for me it is weird behavior
// let someThing = "2" + 1;
// console.log(someThing);
// someThing = "2" - 1;
// console.log(someThing);
// someThing = "2" * 1;
// console.log(someThing);
// someThing = "2" / 1;
// console.log(someThing);
// someThing = "2" % 1;
// console.log(someThing);
// someThing = "3" % 2;
// console.log(someThing);

// 003 String Indices
// ======================================
// length property gives how many characters it has

// console.log("hello".length);
// console.log("lolololololol".length);
// console.log(".         ".length);

// let mySong = "Surfin' USA";
// console.log(mySong.length);
// console.log(mySong[0]);
// console.log(mySong[1]);
// console.log(mySong[2]);
// console.log(mySong[3]);
// console.log(mySong[3]);
// console.log(mySong.length);
// console.log(mySong[11]);
// console.log(mySong[110]);
// console.log(mySong[10]);
// console.log(mySong[mySong.length - 1]); // gives last character // we will use this when we don't know how many characters it has
// console.log(mySong[mySong.length - 2]); // gives second character from last
// console.log(mySong[mySong.length - 3]); // gives third character from last
// console.log(mySong[mySong.length - 4]); // gives fourth character from last  // empty space is also a character

// console.log((mySong[0] = "A"));
// console.log(mySong); // we can't change string characters string are immutable means cannot changeble

// 004 String Methods
// ======================================
// syntax string.method()
// 1.toUpperCase() 2.toLowerCase()

// 3.trim()
// The trim() method removes whitespace from both sides of a string.
// The trim() method does not change the original string

// let msg = "you are so grounded mr";
// console.log(msg.toUpperCase); // wrong
// console.log(msg.toUpperCase()); // () correct
// console.log(msg); // original is unchanged bcoz string are immutable

// msg = msg.toUpperCase(); // updating msg value using LET so we can update
// console.log(msg);
// console.log(msg.toLocaleLowerCase());
// console.log(msg); // original is unchanged

// // correct way of changing case
// let king = "I am king";
// let yellKing = king.toUpperCase();
// console.log(yellKing);
// console.log(king);

// let color = "        purple           ";
// console.log(color.trim());
// console.log(color.trim().toUpperCase());
// console.log(color.trim().toUpperCase().toLowerCase());
// console.log(color);

// let middleSpaces = "     mnedfgerg  erger regerghrtg    ";
// console.log(middleSpaces.trim()); // trim() will not remove middle empty spaces
// console.log(middleSpaces);

// 005 More String Methods
// ======================================
// syntax string.method(arguments)
// some methods accept arguments that modify their behavior.we pass these arguments inside of the parentheses.

// 4.indexOf()
// The indexOf() method returns the position of the first occurrence of a value in a string.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method is case sensitive.

// 5.slice()
// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.

// 6.replace()
// The replace() method searches a string for a value or a regular expression.
// The replace() method returns a new string with the value(s) replaced.
// The replace() method does not change the original string.
// If you replace a value, only the first instance will be replaced. To replace all instances, use a regular expression with the g modifier set.

// let tvShow = "catdog";

// console.log(tvShow.indexOf("cat"));
// console.log(tvShow.indexOf("dog"));
// console.log(tvShow.indexOf("z")); // -1 means (not found that character)
// console.log(tvShow.indexOf("o"));
// console.log(tvShow.indexOf("g"));
// console.log(tvShow.indexOf("G")); // case sensitive means cannot use capital G instead of g. // returns -1.

// console.log(tvShow.length);
// console.log(tvShow[tvShow.length - 1]); // getting last character

// console.log(tvShow);

// let ball = "Baseball";

// console.log(ball.indexOf("Base"));
// console.log(ball.indexOf("ase"));
// console.log(ball.indexOf("base")); // -1
// console.log(ball.indexOf("b"));
// console.log(ball.indexOf("ll"));

// console.log("baseball".indexOf("ball"));
// console.log("baseball".indexOf("b"));
// console.log("Baseball".indexOf("b"));
// console.log("Baseball".indexOf("entertaining"));

// console.log("Baseball".slice(4));
// console.log("Baseball".slice(-1)); // l
// console.log("Baseball".slice(-2)); // ll
// console.log("Baseball".slice(-4)); //

// let sport = "Baseball";

// console.log(sport.slice(4)); // returns all the characters from 4th index
// console.log(sport.slice(40)); // there is no 40 index number so gets empty
// console.log(sport.slice(0, 4));
// console.log(sport.slice(-1));
// console.log(sport.slice(-2));
// console.log(sport.slice(-3));
// console.log(sport.slice(-5));
// console.log(sport.slice(-5, -1)); // will not give -1 index character "l"
// console.log(sport.slice(-5, -3)); // will not give -3 index character which is "a"

// console.log("superhero".slice(2));
// console.log("superhero".slice(0, 5)); // returns 0 to 5th index number but not 5th index character.
// console.log("superhero".slice(0, 5).length);

// console.log("$50.60".slice(1));

// console.log("baseball is entertaining".replace("entertaining", "ok"));

// console.log("ha ha ha".replace("ha", "hee"));
// console.log("ha ha ha".replace("ha ha", "spar"));
// console.log("ha ha ha".replace("ha ha ha", "power"));
// console.log("ha ha ha".replace("haaa", "power")); // if haaa doesn't find it reamains unchanged

// 006 Strings Quiz
// ======================================

// const age = "5" + "4";
// console.log(age);
// console.log("5" + "4"); // + means combining strings into one string // "54"
// console.log("5" - "4"); // results mathematical calculations and returns as a number// 1
// console.log("5" * "4"); // results mathematical calculations // 20
// console.log("5" / "4"); // results mathematical calculations // 1.25
// console.log("5" % "4"); // results mathematical calculations // 1

// console.log("pecan pie"[7]);
// console.log("pecan pie"[0]);
// console.log("pecan pie".length);
// console.log("pecan pie"[9]);
// // getting last character method if not stored as a variable
// console.log("pecan pie".length - 1);
// console.log("pecan pie"[8]);
// // getting last character method if stored as a variable
// let someWord = "pecan pie";
// console.log(someWord[someWord.length - 1]);

// console.log("PUP"[3]);

// // using LET
// let song = "london calling";
// song.toUpperCase(); // wrong way change uppercase
// console.log(song);
// song = song.toUpperCase(); // wright way change uppercase
// console.log(song);

// //using CONST
// const songss = "london calling";
// songss.toUpperCase(); // wrong way change uppercase
// console.log(songss);
// // songss = songss.toUpperCase(); // gives error so store it in a new variable
// const sung = songss.toUpperCase();
// console.log(sung);
// // console.log(songss); // original string will not change

// let userInput = " TODD@gmail.com";
// let cleanedInput = userInput.trim().toLowerCase();
// console.log(cleanedInput);
// console.log(cleanedInput[cleanedInput.length - 1]);

// let park = "Yellowstone";
// const index = park.indexOf("stone");
// console.log(index);
// console.log(park.indexOf("Stone")); // case sensitive
// console.log(park.slice());
// console.log(park.slice(0, 6));

// let yell = "GO AWAY!!";
// let indexx = yell.indexOf("!");
// console.log(indexx);

// console.log("GARBAGE!".slice(2));
// console.log("GARBAGE!".slice(2).replace("B", ""));
// console.log("GARBAGE!".slice(2).replace("B", " "));
// console.log("GARBAGE!".slice(2).replace("B", "  "));

// 007 String Escape Characters
// ======================================

// console.log("HELLO\nGOODBYE");
// // console.log("\"); // wrong
// console.log("\\"); // wright

// 008 String Template Literals
// ======================================

// Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.
// `` backticks key usually above the tab key

// console.log(`I counted ${3 + 4} sheep`);
// console.log(`I counted ${3 + 4 + 5} sheep`);
// console.log(`I counted ${3 + 4 + 5 + 6} sheep`);
// console.log(`bharu rockzz`); // we can make a string using backticks
// console.log(`he said 'lol'`);
// console.log(`' ""`);
// console.log(`${1 + 5}`);
// console.log(typeof `${1 + 5}`);
// console.log(`You owe me ${100 + 218937}`);
// console.log("${1+3}");

// let userName = "Ziggy31";
// console.log(`Welcome back, ${userName}`);
// console.log(`GAME OVER ${userName.toUpperCase()}`);

// let animal = "pig";
// let sound = "oink";
// console.log(animal + " says " + sound);
// console.log(`${animal} says ${sound}`); // using template literals
// console.log(animal + " says " + sound + "!");
// console.log(`${animal} says ${sound}!`); // using template literals // easy to read

// let item = "cucumbers";
// let price = 1.99;
// let quantity = 4;
// console.log(`You bought ${quantity} ${item} total price: $${price * quantity}`);

// const minAge = 21;
// let yourAge = 19;
// console.log(
//   `You must be ${minAge} or older to enter. Come back in ${
//     minAge - yourAge
//   } years`
// );

// 009 Null & Undefined
// ======================================
// Null *) "Intenational abscence of any value"
//      *) Must be assigned
// Undefined *) variables that do not have an assigned value are undefined

// console.log(null);
// console.log(undefined);

// // No one is logged in yet...
// let loggedInUser = null; // value is explicitly nothing
// console.log(loggedInUser);
// // A user logs in...
// loggedInUser = "Alan Rickman";
// console.log(loggedInUser);

// console.log("lol"[4]);
// const u = undefined;
// console.log(u);

// let color;
// console.log(color); // it exists but value not assigned
// // // console.log(bhar); // it does not exist so error

// 010 The Math Object & Random Numbers
// ======================================
// MATH OBJECT contains properties and methods for mathematical constants and functions

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.floor(3, 657));
// console.log(Math.floor(3.657));
// console.log(Math.floor(3, 6577777));
// console.log(Math.floor(3.6577777));
// console.log(Math.floor(3.9999999));
// console.log(Math.round(4.6));
// console.log(Math.round(4.4));
// console.log(Math.round(7.3));
// console.log(Math.round(7.7));
// console.log(Math.pow(7, 2));
// console.log(Math.pow(7, 3));
// console.log(Math.pow(7, 7));

// RANDOM NUMBERS Math.random() gives us a random decimal between 0 and 1 (non-inclusive)

// RANDOM INTEGERS Let's generate random numbers between 1 and 10

// const step1 = Math.random(); // gives 0 to 1 not including 1
// console.log(step1);
// const step2 = step1 * 10;
// console.log(step2);
// const step3 = Math.floor(step2);
// console.log(step3);
// const step4 = step3 + 1; // so we need to add 1 at last bcoz we want result between 1 to 10 not 0 to 10
// console.log(step4);

// or

// console.log(Math.floor(Math.random() * 10) + 1);

// RANDOM INTEGERS Let's generate random numbers between 1 and 6 for dice roll

// console.log(Math.floor(Math.random() * 6) + 1);

// 011 TYPE OF
// ======================================

// console.log(typeof 99);
// console.log(typeof true);
// console.log(typeof "mystery");
// console.log(typeof mystery);
// console.log(typeof "99 balloons");
// console.log(typeof undefined);
// console.log(typeof null); // object // weird behaviour of javascript

// 012 parseInt & parseFloat
// ======================================
// parseInt & parseFloat use to parse strings into numbers, but watch out NaN!

// console.log(parseInt("24"));
// console.log(parseInt("24.987")); // 24
// console.log(parseInt("28dayslater"));
// console.log(parseInt("dayslater28"));

// console.log(parseFloat("24.987")); // 24.987
// console.log(parseFloat("7"));
// console.log(parseFloat("7.0"));
// console.log(parseFloat("i ate 3 shramp")); // NaN

// console.log("21" + 1); // 211
// console.log(parseInt("21") + 1); // 22

// console.log(parseFloat("33.5"));
// console.log(parseInt("$99")); // NaN
// console.log(parseInt("99$"));
// console.log(parseInt("99cents"));
// console.log(parseInt("9976654665457cents"));
// console.log(parseInt("   9976654665457cents"));
// console.log(parseInt("   .9976654665457cents")); // NaN
// console.log(parseInt(".9976654665457cents"));

// ======================================
// 04 - Controlling Program Logic and Flow
// ======================================

// 001 Making Decisions in JS
// ======================================
// GOALS
// Understand comparision Operators
// Write Conditionals
// Work with Boolean Operators

// 002 Comparision Operators
// ======================================
// COMPARISIONS
// >    GREATER THAN
// <    LESS THAN
// >=   GREATER THAN OR EQUAL TO
// <=   LESS THAN OR EQUAL TO
// ==   EQUALITY
// !=   NOT EQUAL
// ===  STRICT EQUALITY
// !==  STRICT NON-EQUALITY

// console.log(10 > 1);
// console.log(0.2 > 0.3);
// console.log(-10 < 0);
// console.log(50.5 < 5);
// console.log(0.5 <= 0.5);
// console.log(0.4 <= 0.5);
// console.log(99 >= 4); // Notice these all return a Boolean
// console.log(99 >= 99);
// console.log("a" < "b");
// console.log("a" > "b");
// console.log("A" > "b");
// console.log("A" < "b");

// console.log(-2 > 1);
// console.log(10 < 999);
// console.log(2 >= 2);
// console.log(2 >= 5);
// console.log(55.1 <= 55.5);
// console.log("hello" >= "hello!");
// console.log("hello" >= "hello");
// console.log("hello" >= "hellos");
// console.log("hello".length >= "hello!".length);
// console.log("hello".length >= "hello!".length - 1);
// console.log("hello".length >= "hello!".length - 2);

// console.log("a" < "A"); // All lower case letters are greater than all uppercase letters (a-z > A-Z)
// console.log("A" < "a");
// console.log("B" < "a");

// console.log("#" < "$"); // $ is greater thsn #

// 003 Double Equals(==)
// ======================================
// Checks for equality of value, but not equality of type.
// It coerces both values to the same type and then compares them.
// This can lead to some unexpected results!
// In JS 1 is true 0 is false

// console.log(5 == 5);
// console.log("b" == "c");
// console.log("b" == "b");
// console.log(7 == "7"); // value same but not type // 7 is number "7" is string
// console.log(0 == "");
// console.log(true == false);
// console.log(0 == false);
// console.log(null == undefined);

// console.log(4 == 4);
// console.log("a" == "a");
// console.log(false == false);
// console.log(8 == "8");
// console.log(0 == "s");
// console.log(0 == ""); // empty can considered as 0 // value same but not type // 0 is number "" is string
// console.log(1 == true);
// console.log(0 == false);
// console.log(1 == false);
// console.log(0 == true);
// console.log(null == undefined);

// 004 Triple Equals (===)
// ======================================
// Checks for equality of VALUE and TYPE
// In general mostly use === in programs

// console.log(5 === 5);
// console.log(5 == 5);
// console.log("5" === 5);
// console.log("5" == 5);

// console.log(1 === 2);
// console.log(2 === "2");
// console.log(2 == "2");
// console.log(false === 0);
// console.log(false == 0);

// Same applies for != and !==
// console.log(10 != "10");
// console.log(10 !== "10");

// console.log(undefined == null);
// console.log(undefined === null);

// let isLoggedIn = false;
// console.log(isLoggedIn == false);
// isLoggedIn = 0;
// console.log(isLoggedIn == false);
// console.log(isLoggedIn === false);

// console.log(1 != 2);
// console.log(1 != "1");
// console.log(1 !== "1");

// 005 Running Code From a Script
// ======================================

// console.log(3 + 4, "hello", true);

// 006 if Statements
// ======================================
// CONDITIONALS
// Making decisions with code
// conditionals can have 3 different pieces if, if else and else

// if
// Run code if a given condition is true

// // Example
// let rating = 3;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR"); // rating = 3 it is true so this code is running on console
// }

// if (rating === 2) {
//   console.log("YOU ARE A SUPERSTAR"); // rating = 3 but we have given rating = 2 it is false so this code is not running on console
// }

// if (rating < 3) {
//   console.log("YOU ARE NOT A SUPERSTAR");
// }

// rating = 2;

// if (rating < 3) {
//   console.log("YOU ARE NOT A SUPERSTAR");
// }

// // Example
// if (1 === 1) {
//   console.log("it is true");
// }
// if (1 !== 1) {
//   console.log("it is true");
// }

// // Example
// let num = 37;

// if (num % 2 !== 0) {
//   console.log("ODD NUMBER");
// }

// num = 38;

// if (num % 2 !== 0) {
//   console.log("ODD NUMBER");
// }

// 007 Else if
// ======================================
// else if
// if not the first thing, maybe this other thing??

// Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?

// Example
// let rating = 2;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// }

// rating = 1;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// }

// My Example
// 18 years unte vote veyavochu lekapothe veyaradhu

// let voteAge = 18;

// if (voteAge === 18) {
//   console.log("YOU CAN VOTE");
// } else if (voteAge === 15) {
//   console.log("YOU CAN'T VOTE");
// }

// voteAge = 15;

// if (voteAge === 18) {
//   console.log("YOU CAN VOTE");
// } else if (voteAge === 15) {
//   console.log("YOU CAN'T VOTE");
// }

// My Example
// Licence unte bike drive cheyochu lekapothe drive cheyakudadhu

// let drivingLicence = "have";

// if (drivingLicence === "have") {
//   console.log("YOU CAN DRIVE");
// } else if (drivingLicence === "haven't") {
//   console.log("YOU CAN'T DRIVE");
// }

// drivingLicence = "haven't";

// if (drivingLicence === "have") {
//   console.log("YOU CAN DRIVE");
// } else if (drivingLicence === "haven't") {
//   console.log("YOU CAN'T DRIVE");
// }

// My Example
// helmet vunte you can go lekapothe pay 150rs

// let helmet = "have";

// if (helmet === "have") {
//   console.log("YOU CAN GO");
// } else if (helmet === "haven't") {
//   console.log("150RS FINE");
// }

// helmet = "haven't";

// if (helmet === "have") {
//   console.log("YOU CAN GO");
// } else if (helmet === "haven't") {
//   console.log("150rs FINE");
// }

// // My Example

// let money = 10;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }

// money = 5;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY STING");
// }

// money = 20;

// if (money === 10) {
//   console.log("I WILL BUY CHIPS");
// } else if (money < 10) {
//   console.log("I WILL BUY CHOCLATE");
// } else if (money > 10) {
//   console.log("I WILL BUY DAIRY MILK");
// } else if (money >= 20) {
//   console.log("I WILL BUY STING");
// }

// // My Example
// // 21 years lekapothe you can't marry

// let marriage = 21;

// if (marriage !== 21) {
//   console.log("YOU CANT MARRY");
// }

// marriage = 21;

// if (marriage !== 20) {
//   console.log("YOU CANT MARRY");
// }

// 008 else
// ======================================
// else
// if nothing else was true, do this...

// Example
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - invalid rating

// let rating = 213;

// if (rating === 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// rating = 5;

// if (rating > 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating === 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// rating = 1;

// if (rating > 3) {
//   console.log("YOU ARE A SUPERSTAR");
// } else if (rating === 2) {
//   console.log("MEETS EXPECTATIONS");
// } else if (rating <= 1) {
//   console.log("NEEDS IMPROVEMENT");
// } else {
//   console.log("IVALID RATING");
// }

// Example

// let highScore = 1430;
// let userScore = 1200;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1600;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1300;

// if (userScore >= highScore) {
//   console.log(`Congrats, you have new high score of ${userScore}`);
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore}`
//   );
// }

// highScore = 1430;
// userScore = 1500;

// if (userScore >= highScore) {
//   console.log(
//     `Congrats, you have new high score of ${userScore} win by ${
//       userScore - highScore
//     }`
//   );
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore} lost by ${
//       highScore - userScore
//     }`
//   );
// }

// highScore = 1430;
// userScore = 1267;

// if (userScore >= highScore) {
//   console.log(
//     `Congrats, you have new high score of ${userScore} win by ${
//       userScore - highScore
//     }`
//   );
//   console.log((highScore = userScore));
// } else {
//   console.log(
//     `Your score of ${userScore} did not beat the high score of ${highScore} lost by ${
//       highScore - userScore
//     }`
//   );
// }

// 009 Nesting Conditionals
// ======================================
// we can nest conditionals inside conditional

// console.log("bharu".indexOf(" "));

// let password = "hello kitty";
// let password = "hellokitty";
// let password = "hellokitty";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//   } else {
//     console.log("Password is long enough, but cannot contain spaces");
//   }
// } else {
//   console.log("Password must be longer!");
// }

// 010 Truthy & Falsy Values
// ======================================
// All values have an inherent truthy or falsy boolean value
// Falsy values: "", '', ``, 0, -0, NaN, false, null, undefined
// Everthing else is truthy!

// let mystery = 5; // truthy
// let mystery = 999; // truthy
// let mystery = 0;
// let mystery = 0 / 0;
// let mystery = "bhargav"; // truthy
// let mystery = " "; // truthy
// let mystery = "";
// let mystery = null;
// let mystery = undefined;
// let mystery = NaN;

// if (mystery) {
//   console.log("TRUTHY");
// } else {
//   console.log("FALSY");
// }

// let loggedInUser = "thomas123";
// let loggedInUser = null;
// let loggedInUser = "";
// let loggedInUser = "thomas123";
// let loggedInUser = "thomas123";

// if (loggedInUser) {
//   console.log("YOU ARE LOGGED IN!");
// } else {
//   console.log("PLEASE LOG IN!");
// }

// 011 Logical AND (&&)
// ======================================
// LOGICAL OPERATORS
// LOGICAL AND ( && ), LOGICAL OR ( || ), LOGICAL NOT ( ! )

// logical AND ( && ) Both sides must me true in order for the whole thingto be true

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(false && true); // false

// console.log(1 <= 4 && "a" === "a");
// console.log(9 > 10 && 9 >= 9);
// console.log("abc".length === 3 && 1 + 1 === 4);

// console.log(1 <= 2 && 5 === 5);

// let password = "chickenGal";

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("VALID PASWWORD");
// } else {
//   console.log("INVALID PASSWORD");
// }

//using if else only

// let password = "cat dog";

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("Password cannot include spaces");
//   } else {
//     console.log("Valid password!!");
//   }
// } else {
//   console.log("Password too short!");
// }

// using logical operators logical AND ( && )

// let password = "chickenGal";
// let password = "chicken Gal";
// let password = "chicken8Gal";

// if (password.length >= 8 && password.indexOf(" ") === -1) {
//   console.log("VALID PASSWORD");
// } else {
//   console.log("INVALID PASSWORD");
// }

// 012 Logical OR ( || )
// ======================================
//if one side is true, the whole thing is true

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// only one side needs to be true!
// console.log(1 !== 1 || 10 === 10);
// console.log(10 / 2 === 5 || null);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(0) || Boolean(undefined));

// let age = 78;
// let age = 3;
// let age = 30;
// let age = 65;

// if (age < 6 || age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("YOU MUST PAYYYYY!");
// }

// using normal if else if else not using logical OR (||)
// let age = 78;
// let age = 3;
// let age = 30;
// let age = 65;

// if (age < 6) {
//   console.log("YOU GET IN FOR FREE");
// } else if (age >= 65) {
//   console.log("YOU GET IN FOR FREE");
// } else {
//   console.log("YOU MUST PAYYYY!");
// }

// let color = "violet";
// if (color === "pruple" || color === "lilac" || color === "violet") {
//   console.log("GREAT CHOICE!");
// }

// 013 NOT operator (!)
// ======================================
// logical NOT (!) returns true if the expression is false

// console.log(!null);
// console.log(!0);
// console.log(!"");
// console.log(Boolean(45)); // Boolean gives true or false
// console.log(!45);
// console.log(!"bharu");

// let loggedInUser;

// console.log(loggedInUser);
// console.log(Boolean(loggedInUser)); // checking loggedInUser is true or false // got false
// console.log(!loggedInUser);

// if runs when condition is true
// loggedInUser false, by using !loggedInUser we are setting it to true
// but we are changing loggedInUser to true using !
// if (!loggedInUser) {
//   console.log("GET OUT OF HERE!");
// }

// let flavor = "grape";
// let flavor = "watermelon";
// console.log(Boolean(flavor));
// console.log(!flavor);
// console.log(Boolean(flavor !== "cherry"));

// if (flavor !== "grape" && flavor !== "cherry") {
//   console.log("WE DON'T HAVE THAT FLAVOR");
// }

// let flavor = "grape";
// if (flavor === "grape" || flavor === "cherry") {
//  console.log("WE ONLY HAVE GRAPE AND CHERRY");
// }

// // let flavor = "grape";
// let flavor = "watermelon";
// if (!(flavor === "grape" || flavor === "cherry")) {
//   console.log("WE ONLY HAVE GRAPE AND CHERRY");
// }

// console.log(true);
// console.log(!true);

// // let money = 10;
// let money = 1;

// if (money !== 10) {
//   console.log("he has 10rs");
// }

// 014 Operator Precedence
// ======================================
// OPERATOR PRECEDENCE
// NOT (!) has higher precedence that && and ||
// AND (&&) has higher precedence than ||
// ! && || // You can alter this using parens ()

// let x = 7;
// console.log(x === 7 || (x === 3 && x > 10));
// console.log((x === 7 || x === 3) && x > 10);

// 015 The Switch Statement
// ======================================

// using if else if
// let day = 1;
// let day = 2;
// let day = 3;
// let day = 4;
// let day = 5;
// let day = 6;
// let day = 7;
// let day = 9;
// let day = 34;

// if (day === 1) {
//   console.log("monday");
// } else if (day === 2) {
//   console.log("tuesday");
// } else if (day === 3) {
//   console.log("wednesday");
// } else if (day === 4) {
//   console.log("thursday");
// } else if (day === 5) {
//   console.log("friday");
// } else if (day === 6) {
//   console.log("saturday");
// } else if (day === 7) {
//   console.log("sunday");
// } else {
//   console.log("INVALID DAY");
// }

// using switch statement
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("INVALID DAY");
// }

// let emoji = "sad face";
// let emoji = "happy face";
// let emoji = "lips";
// let emoji = "heart";

// switch (emoji) {
//   case "sad face":
//   case "happy face":
//     console.log("yellow");
//     break;
//   case "eggplant":
//     console.log("purple");
//   case "heart":
//   case "lips":
//     console.log("red");
//     break;
// }

// 016 Ternary Operator
// ======================================
// This operator is frequently used as an alternative to an if...else statement.
// condition ? expressionIfTrue : expressionIfFalse

// let num = 7;

// if (num === 7) {
//  console.log("lucky");
// } else {
//  console.log("bad!");
// }

// let num = 7;
// let num = 5;
// num === 7 ? console.log("lucky") : console.log("bad!");

// let age = 21;
// let age = 18;
// age === 21 ? console.log("can marry") : console.log("can't marry");

// let status = "online";
// let status = "offline";

// let color;
// if (status === "offline") {
//   console.log((color = "red"));
// } else {
//   console.log((color = "green"));
// }

// let status = "online";
// let status = "offline";

// let color = status === "offline" ? console.log("red") : console.log("green");

// ======================================
// 05 - Capture Collections of Data with Arrays
// ======================================

// 001 Creating Arrays
// ======================================
// GOALS
// Work with Arrays
// Write Object Literals
// Understand Reference Types
// Use common Array/Object methods

// CREATING ARRAYS
// // To make an empty array
// let students = [];

// // An array of strings
// let colors = ["red", "orange", "yellow"];

// // An array of numbers
// let lottoNums = [19, 22, 56, 12, 51];

// // A mixed array
// let stuff = [true, 68, "cat", null];

// let shoppingList = ["cereal", "cheese", "ice"];
// console.log(shoppingList);

// let lotto = [45, 12, 23, 25, 34];
// console.log(lotto);

// let myCollection = [12, "dog", true, null, NaN];
// console.log(myCollection);

// // creating array using Array literal syntax
// let newArray = new Array();
// console.log(newArray);
// newArray = new Array(1, 2, 3, 4, 5);
// console.log(newArray);

// 002 Array Indices
// ======================================
// ARRAYS ARE INDEXED
// Accessing items from an array

// //           [  0        1         2        3        4       5          6   ]
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// console.log(colors.length);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);
// console.log(colors[6]);
// console.log(colors[7]);
// console.log(colors[colors.length - 1]); // if we don't know what element in the array is last we can use this method
// console.log(colors[colors.length - 2]); // getting second last element from an array

// console.log("bharu"[0]);
// console.log("bharu"[3]);

// 003 Modifying Arrays
// ======================================
// unlike strings which are immutable Arrays are mutuable which means we can change array items

// let colors = ["rad", "orange", "green", "yellow"];
// console.log(colors);

// colors[0] = "red"; // changing index 0 "rad" to "red"
// console.log(colors);

// colors[2] = "yellow";
// colors[3] = "green";
// console.log(colors);

// colors[4]; // undefined
// console.log(colors[4]);
// colors[4] = "blue"; // creating item to index 4
// console.log(colors);
// colors[5] = "pink";
// console.log(colors);
// console.log(colors.length);
// console.log(colors[colors.length - 1]);

// let shoppingList = ["Cheddar cheese", "2% Milk"];

// shoppingList[1] = "whole Milk";
// console.log(shoppingList);
// console.log(shoppingList.length);
// shoppingList[2] = "Ice Cream";
// console.log(shoppingList);

// shoppingList[shoppingList.length] = "Tomatoes"; // if we don't know last index to add an item use this method
// console.log(shoppingList);
// shoppingList[shoppingList.length] = "Potatoes";
// console.log(shoppingList);
// shoppingList[0] = "Bread";
// console.log(shoppingList);

// 004 Push and Pop
// ======================================
// ARRAY METHODS
// Push - add to end
// Pop - remove from end

// let topSongs = [
//   "First Time Ever I Saw Your Face",
//   "God Only Knows",
//   "A Day In The Life",
//   "Life On Mars",
// ];

// // adding item on last using general method
// // topSongs[topSongs.length] = "Fortunate Son";
// // console.log(topSongs);

// // adding item on last using array method PUSH
// topSongs.push("Fortunate Son");
// console.log(topSongs);
// topSongs.push(true);
// console.log(topSongs);

// // POP
// topSongs.pop();
// console.log(topSongs);
// let nextSong = topSongs.pop();
// console.log(nextSong);
// console.log(topSongs);

// topSongs.pop();
// console.log(topSongs);

// topSongs.pop();
// topSongs.pop();
// topSongs.pop();
// console.log(topSongs); // we emptied topSongs array
// topSongs.pop();
// topSongs.pop();
// console.log(topSongs);

// 005 Shift and Unshift
// ======================================
// Unshift - add to start
// shift - remove from start

// let dishes = ["big platter"];
// console.log(dishes);
// dishes.unshift("large plate");
// console.log(dishes);
// dishes.unshift("small plate");
// console.log(dishes);
// dishes.unshift("cereal bowl");
// dishes.unshift("mug");
// dishes.unshift("dirty spoon");
// console.log(dishes);

// dishes.shift();
// console.log(dishes);
// dishes.shift();
// console.log(dishes);
// dishes.shift();
// console.log(dishes);
// dishes.shift();
// dishes.shift();
// dishes.shift();
// dishes.shift();
// console.log(dishes);

// dishes.unshift("fork", "knife");
// console.log(dishes); // ['fork', 'knife']
// dishes.unshift("small spoon");
// dishes.unshift("large spoon");
// console.log(dishes); // ['large spoon', 'small spoon', 'fork', 'knife']

// dishes.push("platter");
// console.log(dishes);
// dishes.push("cutting board", "cookie sheet");
// console.log(dishes);

// 006 Concat
// ======================================
// MORE METHODS!
// concat - merge arrays
// includes - look for a value
// indexOf - just like str.indexOf
// join - creates a string from array
// reverse - reverses an array!
// slice - copy portion of an array
// spilce - remove/replace elements
// sort - sorts an array

// CONCAT - merge arrays

// let fruits = ["apple", "banana"];
// let veggies = ["asparagus", "brussel sprouts"];
// let meats = ["steak", "chicken breast"];
// console.log(fruits.concat(veggies)); // order matters
// console.log(veggies.concat(fruits)); // order matters
// console.log(fruits.concat(fruits));
// let allFood = fruits.concat(veggies, meats);
// console.log(allFood);
// console.log(fruits);
// console.log(veggies);
// console.log(meats);

// 007 Includes and IndexOf
// ======================================
// includes - look for a value
// indexOf - just like str.indexOf

// let ingredients = [
//   "water",
//   "corn starch",
//   "flour",
//   "cheese",
//   "brown sugar",
//   "shrimp",
//   "eel",
//   "butter",
// ];

// // includes
// // includes returns true or false
// console.log(ingredients.includes("fish"));
// console.log(ingredients.includes("shrimp"));
// console.log(ingredients.includes("corn"));
// console.log(ingredients.includes("corn starch"));

// console.log(ingredients.length); // 8
// console.log(ingredients.includes("water"));
// console.log(ingredients.includes("water", 0)); // water is after 0 index so it is true
// console.log(ingredients.includes("water", 3)); // water is not after 3 index so it is false
// console.log(ingredients.includes("flour", 1)); // true
// console.log(ingredients.includes("flour", 3)); // false
// console.log(ingredients.includes("eel", 5));
// console.log(ingredients.includes("eel", 6));
// console.log(ingredients.includes("eel", 7));

// if (ingredients.includes("flour")) {
//   console.log("I AM GLUTEN FREE, I CANNOT EAT THAT!");
// }

// // indexOf
// //indexOf returns an index (or -1 if not found)

// console.log(ingredients.indexOf("eel"));
// console.log(ingredients.indexOf("maple syrup"));
// console.log(ingredients.indexOf("cheese", 5)); // is cheese after index 5 No so it gives -1
// console.log(ingredients.indexOf("cheese", 2)); // is cheese after index 2 Yes so it gives index 3, means cheese index is 3

// // observe it so you can understand completely indexOf method concept
// console.log(ingredients.indexOf("brown sugar"));
// console.log(ingredients.indexOf("brown"));
// console.log(ingredients.indexOf("brown sugar", 2));
// console.log(ingredients.indexOf("brown sugar", 4));
// console.log(ingredients.indexOf("brown sugar", 5));

// 008 Reverse and Join
// ======================================
// Join - creates a string from array
// Reverse - reverses an array!

// let letters = ["T", "C", "E", "P", "S", "E", "R"];

// // Reverse
// console.log(letters.reverse());
// console.log(letters);

// // Join
// letters = ["T", "C", "E", "P", "S", "E", "R"];
// console.log(letters.join());
// console.log(letters.join(""));
// console.log(letters.join("&"));
// console.log(letters.join(" & "));
// console.log(letters.reverse().join("."));
// console.log(letters);
// console.log(letters.join("-"));

// console.log([12.3, 60, false].join()); // converted into string
// console.log(typeof [12.3, 60, false].join());
// console.log([12.3, 60, false].join(" "));
// console.log([12.3, 60, false].join(" # "));
// console.log([12.3, 60, false].join(" # -> "));

// 009 Slice
// ======================================
// slice - copy portion of an array

// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// //                                                                          [   0        1    ]
// let swimmers = animals.slice(0, 2); // doesn't include index 2 gives // (2) ['shark', 'salmon']
// console.log(swimmers);
// console.log(animals.slice(0, 3));

// let mammals = animals.slice(2, 4);
// console.log(mammals);

// let reptiles = animals.slice(4, 6);
// console.log(reptiles);
// console.log(animals.slice(4)); // gives index 4 to all the end of the array // (2) ['lizard', 'tortoise']

// let quadruped = animals.slice(-3); // gives last 3 three elements // (3) ['bear', 'lizard', 'tortoise']
// console.log(quadruped);

// quadruped = animals.slice(-3, -1); // except last element gives other 2 elements // (2) ['bear', 'lizard']
// console.log(quadruped);

// let copy = animals.slice(); // returns copy of an array
// console.log(copy);

// console.log(animals); // original

// 010 Splice
// ======================================
// spilce - remove/replace elements

// let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

// console.log(animals.splice(1, 0, "octupus")); // returns empty array [] bcpz i didn't any element
// console.log(animals); // returns modified array index 1 is salmon replaced with octopus
// // (7) ['shark', 'octupus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// console.log(animals.splice(3, 2)); // returns deleted 2 items from index index // (2) ['whale', 'bear']
// console.log(animals); // (5) ['shark', 'octupus', 'salmon', 'lizard', 'tortoise']

// console.log(animals.splice(3, 0, "snake", "frog")); // deleted 0 items // []
// console.log(animals); // added elements from index 3 which are snake,frog
// // (7) ['shark', 'octupus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise']

// console.log(animals.splice(0, 2, "SHARK!", "OCTOPUS!")); // deleted items (2) ['shark', 'octupus']
// console.log(animals.slice(0, 2)); // you can check what you replaced using slice // (2) ['SHARK!', 'OCTOPUS!']

// console.log(animals); // (7) ['SHARK!', 'OCTOPUS!', 'salmon', 'snake', 'frog', 'lizard', 'tortoise']

/*
// NOTES
animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]
*/

// 011 Sorting(part 1)
// ======================================
// sort - sorts an array

/*
// NOTES
let people = [ 'Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne' ];

people.sort();
// ["Angie", "Jolene", "Maggie May", "Mrs. Robsinson", "Roxanne"]

let nums = [ 34, 10, 100000, 67, 99 ];

nums.sort();
//[10, 100000, 34, 67, 99]

//Sorts by converting values to strings and comparing their UTF-16 character codes.

//We will learn how to change this behavior later on!
*/

// let people = ["Mrs. Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];

// console.log(people.sort()); // gives in alphabeteical order means sorting
// console.log(people); // original also changed means mutated

// let nums = [34, 10, 100000, 67, 99];

// console.log(nums.sort());
// //Sorts by converting values to strings and comparing their UTF-16 character codes.
// console.log(nums);

// 012 Intro to Reference Types
// ======================================
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

/*
// NOTES
// ===============
// VALUE TYPES
// ===============
//Value Types - the variable stores the actual value:

let x = 100;
let y = x;

//If we change x
x = 99;
//y is unchanged
y; //100

// ===============
// REFERENCE TYPES
// ===============

// Array variables do not hold the actual array
//Instead, they store a REFERENCE to the array

let nums = [ 2, 4, 6, 8 ];
let myNums = nums; //myNums references the same array

// If we change nums
nums.push('BOO!');

//My nums is also changed:
myNums; //[2, 4, 6, 8, "BOO!"]
*/

// let fruit = "orange"; // fruit is storing the value of orange
// let color = fruit; // color is aslo storing the value of orange
// console.log(color);
// console.log(fruit);

// fruit = "watermelon"; // changing fruit value to watermelon
// console.log(fruit);
// console.log(color); // but color value didn't change // orange

// let nums = [5, 6, 7, 8];
// let otherNums = nums;

// console.log(nums);
// console.log(nums.push(9));
// console.log(nums);
// console.log(otherNums);

// console.log(otherNums.pop());
// console.log(otherNums.pop());
// console.log(otherNums.pop());

// console.log(nums);
// console.log(otherNums);

/*
// NOTES from SMILGA
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: 'bob' };
let person2 = { ...person };
person2.name = 'susy';
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
*/

// 013 Using Const with Arrays
// ======================================
// CONST & ARRAYS
// You will often see people use const with arrays

// let x = 34;
// x += 5;
// console.log(x);

// const city = "Lisbon";
// console.log(city);
// // // // city = "London"; // you cannot change the const value of variable

// const foods = ["milk"];
// foods.push("chocolate");
// console.log(foods);
// foods.unshift("tortillas");
// console.log(foods);
// console.log(foods.pop());
// console.log(foods.pop());
// console.log(foods.pop());
// console.log(foods);

// // // foods = []; // we cannot do this

// 014 Working with Nested Arrays
// ======================================
// NESTED ARRAYS or MULTI DIMENSIONAL ARRAYS
// We can store arrays inside other arrays!

/*
// NOTES
const animalPairs = [
	[ 'doe', [ 'buck', 'stag' ] ],
	[ 'ewe', 'ram' ],
	[ 'peahen', 'peacock' ]
];

//To access 'ewe'
animalPairs[1][0];

//To access 'buck'
animalPairs[0][1][0];

//Updating a sub-array:
animalPairs[0][1].push('hart');
//apparently some people call male deer 'harts'.  idk.
*/

// const animalPairs = [
//   ["doe", "buck"],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// console.log(animalPairs);
// console.log(animalPairs[2]);
// console.log(typeof animalPairs[2]);
// console.log(animalPairs[2][0]);
// console.log(typeof animalPairs[2][0]);
// console.log(animalPairs[2][1]);
// console.log(animalPairs[1][1]);

// console.log(animalPairs[0]);
// console.log(animalPairs[0][1]);

// console.log((animalPairs[0][1] = "stag"));

// console.log(animalPairs);

// Nested arrays
// const board = [
//   ["O", null, "X"],
//   [null, "X", "O"],
//   ["X", "O", null],
// ];

// const animalPairs = [
//   ["doe", ["buck", "stag"]],
//   ["ewe", "ram"],
//   ["peahen", "peacock"],
// ];

// console.log(animalPairs[0]);
// console.log(animalPairs[0][1][1]);

// ======================================
// 06 - Objects - The Core of Javascript
// ======================================

// 001 Intro to Objects
// ======================================
// OBJECTS
// Objects are collections of properties.
// Properties are key-value pair.
// Rather than accessing data using an index, we use custom keys.

/*
// NOTES
// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
const fitbitData = [ 308756, 1814, 211 ];

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
const lucyFitbitData = [ 12344, 1814, 211 ];

// OBJECTS TO THE RESCUE!
*/

// AN OBJECT
// const fitbitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
// };

// 002 Creating Object Literals
// ======================================
// PROPERTY = KEY + VALUE
// VALID KEYS
// All keys are converted to strings
// Except for Symbols,which we haven't covered yet

// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   45: "forty five",
// };

// console.log(fitBitData);

// console.log("asd".length);
// console.log("asd".toUpperCase());

// console.log(fitBitData.totalMiles);
// console.log(fitBitData.avgCalorieBurn);
// console.log(fitBitData.45); // doesn,t work using dot

// // ALL TYPES WELCOME
// let comment = {
//   username: "sillyGoose420",
//   downVotes: 19,
//   upVotes: 214,
//   netScore: 195,
//   commentText: "Tastes linke chicken lol",
//   tags: ["#hilarious", "#funny", "#silly"],
//   isGilded: false,
// };

// 003 Accessing Object Properties
// ======================================
// PROPERTY = KEY + VALUE
// VALID KEYS
// All keys are converted to strings

/*
// NOTES
const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//DOT NOTATION
palette.red; //'#eb4d4b'

//SQUARE BRACKET NOTATION
palette["yellow"]; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = "blue";
palette[mysteryColor]; //'#30336b'
*/

// const numbers = {
//   100: "one hundred",
//   16: "sixteen",
//   "76 trombones": "great song!",
//   name: "bharu",
// };

// console.log(numbers.name);

// // // // console.log(numbers.100); // . method doesn't work

// console.log(numbers[100]); // [ ] this works

// console.log(numbers["100"]); // [ ] this also works bcoz all keys converted to strings

// console.log(numbers);

// console.log(numbers["76 trombones"]);

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// console.log(palette.blue);

// console.log(palette["blue"]); // this also works

// console.log(palette.yellow);

// let mysteryColor = "yellow";
// console.log(palette[mysteryColor]);

// console.log(palette.green);
// console.log(palette["asd"]);

// console.log(palette["bl" + "ue"]);

// 004 Adding and Updating Properties
// ======================================
// UPDATING & ADDING PROPERTIES

/*
// NOTES
const userReviews = {};

//Adding a new property:
userReviews["queenBee49"] = 4.0;
userReviews.mrSmith78 = 3.5;

//Updating existing properties
userReviews["queenBee49"] += 2;
userReviews.mrSmith78++;
*/

// const userReviews = {};

// userReviews["queenBee49"] = 4.0;
// console.log(userReviews);

// userReviews.mrSmith78 = 3.8;
// console.log(userReviews);

// console.log(userReviews.colt);

// userReviews["queenBee49"] += 2;
// console.log(userReviews);

// userReviews.mrSmith78++;
// console.log(userReviews);

// 005 Nested Arrays & Objects
// ======================================
// ARRAYS + OBJECTS

// const student = {
//   firstName: "David",
//   lastName: "Jones",
//   strengths: ["Music", "Art"],
//   exams: {
//     midterm: 92,
//     final: 88,
//   },
// };

// // const avg = (student.exams.midterm + student.exams.final) / 2;

// const average = (student.exams.midterm + student.exams.final) / 2;
// console.log(average);

// console.log(student.strengths[1]);

// const shoppingCart = [
//   {
//     product: "Jenga Classic",
//     price: 6.88,
//     quantity: 1,
//   },
//   {
//     product: "Echo Dot",
//     price: 29.99,
//     quantity: 3,
//   },
//   {
//     product: "Fire Stick",
//     price: 39.99,
//     quantity: 2,
//   },
// ];

// console.log(shoppingCart[0].product);
// console.log(shoppingCart[1].price);
// console.log(shoppingCart[2].quantity);

// const game = {
//   player1: {
//     username: "Blue",
//     playingAs: "X",
//   },
//   player2: {
//     username: "Muffins",
//     playingAs: "O",
//   },
//   board: [
//     ["O", null, "X"],
//     ["X", "O", "X"],
//     [null, "O", "X"],
//   ],
// };

// console.log(game.player1.playingAs);
// console.log(game.player2.username);

// console.log(game.board[1][1]);
// console.log(game.board[1][2]);

// 006 Objects and Reference Types
// ======================================
//Objects & Arrays are reference types
//Both variables reflect that change...

/*
// NOTES
const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

//Objects & Arrays are reference types
const palette2 = palette;
//If we change one value...
palette2.green = "#ebf876";

//Both variables reflect that change...
palette.green; //"#ebf876"
palette2.green; //"#ebf876"
*/

// const palette = {
//   red: "#eb4d4b",
//   yellow: "#f9ca24",
//   blue: "#30336b",
// };

// const palette2 = palette;
// palette2.green = "#ebf876";
// console.log(palette);
// console.log(palette2);
// palette2.green = "bharu";
// console.log(palette);
// console.log(palette2);
// palette.yellow = "yellowcolor";
// console.log(palette);
// console.log(palette2);

// 007 Array_Object Equality
// ======================================

// let nums = [1, 2, 3];
// let mystery = [1, 2, 3];
// let moreNums = nums;

// //They 'look' the same, but refer to different arrays
// console.log(nums === mystery); // false

// //These two arrays reference the exact same array, so we get true:
// console.log(nums === moreNums); //true

// const user = {
//   username: "CherryGarcia8",
//   email: "garcia@gmail.com",
//   notifications: ["message", "alert"],
// };

// //THIS WILL NOT WORK!
// if (user.notifications === []) {
//   console.log("NO NEW NOTIFICATIONS!");
// }
// // THIS VERSION DOES WORK!
// if (!user.notifications.length) {
//   console.log("NO NEW NOTIFICATIONS!");
// }

// console.log({} === {});
// console.log({ a: 1 } === { a: 1 });
// let data1 = { a: 1 };
// let data2 = data1;
// console.log(data1 === data2);
// data1.name = "bharu";
// console.log(data1);
// console.log(data2);
// data2.age = 28;
// console.log(data1);
// console.log(data2);

// ======================================
// 07 - The World of Loops
// ======================================

// 001 Intro to Loops
// ======================================
// GOALS
// Write for loops
// Write while loops
// Avoid infinite loops!
// Iterate over arrays and objects

// LOOPS
// Doing things repeatedly
// Loops allow us to repeat code
// *) Print "hello" 10 times
// *) Sum all numbers in an array
// There are multiple types:
// for loop
// while loop
// for...of loop
// for...in loop

// 002 For Loops
// ======================================
// FOR LOOPS
// for(initialExpression,condition,incrementExpression){}

// To avoid infinite loops remember below points
// for(i=some num;then i should have <=;if i needs increment){}
// for(i=some num;then i should have >=;if i needs decrement){}

/*
// NOTES
// 3 pieces to a for loop:
// 1 - Variable declaration
// 2 - The condition
// 3 - Update the loop variable

// STEP 1: 'let i = 1' - start i at 1
// STEP 2: 'i <= 10' - run the loop as long as i <= 10
// STEP 3: 'i++' - add 1 to i each time through
for (let i = 1; i <= 10; i++) {
	console.log('HELLO:', i);
}

// Counting by 3's:
for (let i = 1; i <= 10; i += 3) {
	console.log('HELLO:', i);
}

// Printing first 20 perfect squares:
for (let num = 1; num <= 20; num++) {
	console.log(`${num}x${num} = ${num * num}`);
}

// Counting DOWN from 200 by intervals of 25:
for (let i = 200; i >= 0; i -= 25) {
	console.log(i);
}
console.log('AFTER THE LOOP!');
*/

// 10 total Times

// 50 initial value
// 60 when to run the loop
// +1 how to change value each time

// for (let i = 1; i <= 10; i++) {
//   console.log("Hello", i);
// }

// for (let i = 1; i <= 10; i += 3) {
//   console.log("HELLO:", i);
// }

// for (let num = 1; num <= 20; num++) {
//   console.log(`${num}x${num}=${num * num}`);
// }

// To avoid infinite loops remember below points
// for(i=some num;then i should have <=;if i needs increment){}
// for(i=some num;then i should have >=;if i needs decrement){}

// start i at 50
// subtract 10 each iteration
// Keep going as long as i >= 0

// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i);
// }

// for (let i = 200; i >= 0; i -= 25) {
//   console.log(i);
// }

// write 1 to 30 perfect squares
// for (let i = 1; i <= 30; i++) {
//   console.log(`${i}x${i}=${i * i}`);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(`${i}x${i}=${i * i}`);
// }

// write 1 to 30 perfect squares in reverse order
// for (let i = 30; i >= 0; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// write Programs
// 1) write 1 to 20 perfect squares
// 2) write 1 to 20 perfect squares in reverse order
// 3) write 1 to 30 perfect squares
// 4) write 1 to 30 perfect squares in reverse order
// 5) write 1 to 10 perfect cubes
// 6) write 1 to 10 perfect cubes in reverse order
// 7) write 1 to 20 perfect cubes
// 8) write 1 to 20 perfect cubes in reverse order

// for (let i = 1; i <= 20; i++) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 20; i >= 1; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 1; i <= 30; i++) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 30; i >= 1; i--) {
//   console.log(`${i}x${i}=${i * i}`, i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 1; i <= 20; i++) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// for (let i = 20; i >= 1; i--) {
//   console.log(`${i}x${i}x${i}=${i * i * i}`, i);
// }

// 003 Infinite Loops
// ======================================
// INFINITE LOOPS

/*
// NOTES
// DON'T RUN THIS!
// for (let i = 1; i !== 20; i += 2) {
// 	console.log(i);
// }

// THE ABOVE LOOP NEVER ENDS
// i starts at 1, and we add 2 each time
// 1,3,5,7,9,11,13,15,17,19,21,etc.
// i never hits 20, so the loop condition is always true

// Instead, write it this way:
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
*/

// // DO NOT RUN THIS CODE! RESULTS INFINITE LOOP!!!
// // for (let i = 20; i >= 0; i++) {
//   console.log(i);
// } // BADDDD!

// 004 For Loops & Arrays
// ======================================
// FOR LOOPS + ARRAYS
// To loop over an array, start at 0 and continue to the last index(length-1)

// ======= EXAMPLE 1 ==========
// Printing each element in an array
// const examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//   console.log(i, examScores[i]);
// }
// OR
// for (let i = 0; i <= examScores.length - 1; i++) {
//   console.log(i, examScores[i]);
// }

// ======= EXAMPLE 2 ==========
// // Same idea, but with a more complex array
// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
// ];

// traditional way or long way
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
// }

// smart way
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	console.log(`${student.firstName} scored ${student.grade}`);
// }

// ======= EXAMPLE 3 ==========
// // Averaging all grades in myStudents array
// let total = 0; //total will hold the sum of all grades

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	total += student.grade; //add each grade to total
// }
// console.log(total / myStudents.length); //divide by number of students

// ======= EXAMPLE 4 ==========
// // Reversing a string
// const word = "stressed";

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i], i);
// }

// for (let i = word.length - 1; i >= 0; i--) {
//   console.log(word[i], i);
// }

// let reversedWord = ""; //will hold reversed string

// // //Loop backwards over the string
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i]; //add each char to reversedWord
// }

// console.log(reversedWord);

// PRACTICE
// const examScores = [22, 98, 77, 84, 76, 65, 89, 91, 57, 66];

// FORWORD LOOPING
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i]);
// }
// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < examScores.length; i++) {
//   console.log(examScores[i], i);
// }
// BACKWARD LOOPING
// for (let i = examScores.length - 1; i >= 0; i--) {
//   console.log(examScores[i]);
// }
// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = examScores.length - 1; i >= 0; i--) {
//   console.log(examScores[i], i);
// }

// let total = 0;
// for (let i = 0; i < examScores.length; i++) {
//   total += examScores[i];
// }
// console.log(total / examScores.length);

// const myStudents = [
//   {
//     firstName: "Zeus",
//     grade: 86,
//   },
//   {
//     firstName: "Artemis",
//     grade: 97,
//   },
//   {
//     firstName: "Hera",
//     grade: 72,
//   },
//   {
//     firstName: "Apollo",
//     grade: 90,
//   },
//   {
//     firstName: "bharu",
//     grade: 80,
//   },
//   {
//     firstName: "dhanush",
//     grade: 99,
//   },
// ];

// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(myStudents[i], i);
// }

// WITHOUT STORING IN A VARIABLE
// for (let i = 0; i < myStudents.length; i++) {
//   console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`);
// }
//OR
// WITH STORING IN A VARIABLE
// for (let i = 0; i < myStudents.length; i++) {
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored ${student.grade}`);
// }

// AVG GRADE
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//   total += myStudents[i].grade;
//   console.log(total); // this gives iteration 86,86+97=183,255,...,524
// }
// console.log(total); // this gives addition of myStudents[i].grade
// console.log(total / myStudents.length);

// OR

// // Averaging all grades in myStudents array
// let total = 0; //total will hold the sum of all grades

// for (let i = 0; i < myStudents.length; i++) {
// 	let student = myStudents[i];
// 	total += student.grade; //add each grade to total
// }
// console.log(total / myStudents.length); //divide by number of students

// const str = "RavikantiBhargav";
// console.log(str.length);

// FORWARD LOOPING WITH INDEX NUMBERED
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i], i);
// }

// // Loop backwards over the string

// let reversedWord = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reversedWord += str[i];
//   // console.log(reversedWord);
// }
// console.log(reversedWord);
// console.log(reversedWord.length);

// 005 Nested for Loops
// ======================================

// for (let i = 1; i <= 10; i++) {
//   console.log("     OUTER LOOP", i);
//   for (let j = 10; j >= 0; j -= 2) {
//     console.log("inner loop", j);
//   }
// }

// // EXAMPLE 2
// // Sum all elements in our 2048 board
// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2],
// ];

// traditional
// for (let i = 0; i < gameBoard.length; i++) {
//   console.log(gameBoard[i]);
//   for (let j = 0; j < gameBoard.length; j++) {
//     console.log(gameBoard[i][j]);
//   }
// }
// or
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   console.log(row);
//   for (let j = 0; j < gameBoard.length; j++) {
//     console.log(row[j]);
//   }
// }
// calculating totalscore
// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

// let totalScore = 0;
// //outer loop iterates through the rows
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   //inner loop iterates over each cell in a given row
//   for (let j = 0; j < row.length; j++) {
//     totalScore += row[j];
//   }
// }
// console.log(totalScore);

// 006 Intro to While Loop
// ======================================
// WHILE LOOPS
// A while loop continues to run as long as its test condition is true

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// Recreating the above example using while loop
// let j = 0;
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

// 007 More While Loops
// ======================================
// WHILE LOOPS
// A while loop continues to run as long as its test condition is true

/*
// NOTES
// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
*/

/*
const target = Math.floor(Math.random() * 10);

let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`congrats you win`);
*/

// while(some condition)
// in the loop, update or attempt to make that condition false

// const targetScore = Math.floor(Math.random() * 10);

// let playerScore = Math.floor(Math.random() * 10);

// while (playerScore !== targetScore) {
//   console.log(`PLAYER: ${playerScore} TARGET:${targetScore}`);
//   playerScore = Math.floor(Math.random() * 10);
// }
// console.log(`PLAYER: ${playerScore} TARGET:${targetScore}`);
// console.log(`CONGRATS PLAYER`);

// 008 Break Keyword
// ======================================

// const target = Math.floor(Math.random() * 10);
// let guess;
// //ANOTHER APPROACH TO THE PREVIOUS GUESSING 'GAME'
// while (true) {
//   if (target === guess) break; //Break stops the loop in its tracks
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);

// 009 For...Of Intro
// ======================================
// FOR...OF LOOP
// A nice and easy way of iterating over arrays (or other iterable objects)
// for(variable of iterable){
//     statement
// }

/*
// NOTES
let subreddits = ["soccer", "popheads", "cringe", "books"];
// With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
}
//Much cleaner  with a for...of loop!
for (let sub of subreddits) {
  console.log(sub);
}
//Works with other iterables, like strings!
for (let char of "cockadoodledoo") {
  console.log(char.toUpperCase());
}
*/

// let subreddits = ["soccer", "popheads", "cringe", "books"];

// using for loop
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i],i);
// }

// using for of loop too easy for iterating
// for (let sub of subreddits) {
//   console.log(sub);
// }

// const word = "Bhargavravikanti";
// for (let i of word) {
//   console.log(i);
// }

// for (let char of "cockadoodledoo") {
//   console.log(char.toUpperCase());
// }

// 010 Comparing For and For...Of
// ======================================

/*
// NOTES
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// EXAMPLE 2
// If you need the indices, use a traditional for loop!
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < words1.length; i++) {
  //Access index i of both arrays
  console.log(`${words1[i]}${words2[i]}`);
}
*/

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//   // console.log(magicSquare[i]);
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let j = 0; j < magicSquare.length; j++) {
//     // console.log(row[j]);
//     sum += row[j];
//   }
//   console.log(`${row} summed is ${sum}`);
// }

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

// If you need the indices, use a traditional for loop!
// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];

// for (let i = 0; i < words1.length; i++) {
//   //Access index i of both arrays
//   console.log(`${words1[i]}${words2[i]}`);
// }

// 011 For...Of with Objects
// ======================================
// OBJECTS!
// We can loop over the keys of an object, using Objects.keys()
// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

/*
// NOTES
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
  console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log("Average Rating: ", avg);
*/

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
//   "Little Miss Sunshine": 8.5,
//   Coraline: 7.5,
// };

// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// approach 1
// let total = 0;
// for (let val of Object.values(movieReviews)) {
//   // console.log(val);
//   total += val;
// }
// console.log(total);
// let avg = total / Object.values(movieReviews).length;
// console.log(avg);

// approach 2
// let ratings = Object.values(movieReviews);
// let total = 0;
// for (let val of ratings) {
//   // console.log(val);
//   total += val;
// }
// // console.log(total);
// let avg = total / ratings.length;
// console.log(avg);

// console.log(Object.keys(movieReviews)[0]);
// console.log(Object.keys(movieReviews)[1]);
// console.log(Object.keys(movieReviews)[2]);

// console.log(Object.values(movieReviews)[0]);
// console.log(Object.values(movieReviews)[1]);
// console.log(Object.values(movieReviews)[2]);

// console.log(Object.entries(movieReviews));
// console.log(Object.entries(movieReviews)[0]);
// console.log(Object.entries(movieReviews)[1]);
// console.log(Object.entries(movieReviews)[3]);

// my rating to movies
// for (let movie of Object.keys(movieReviews)) {
//   // console.log(movie, movieReviews[movie]);
//   let score = movieReviews[movie];
//   console.log(`I rated ${movie} ${score}/10`);
// }

// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

// const person = {
//   name: "john",
//   age: 25,
//   status: "student",
// };

// // Object.keys()
// console.log(Object.keys(person));
// console.log(Object.keys(person)[0]);
// console.log(Object.keys(person)[1]);
// console.log(Object.keys(person)[2]);
// console.log(Object.keys(person)[2], typeof Object.keys(person)[2]);
// console.log(Object.keys(person)[3]);
// // Object.values()
// console.log(Object.values(person));
// console.log(Object.values(person)[0]);
// console.log(Object.values(person)[1]);
// console.log(Object.values(person)[2]);
// console.log(Object.values(person)[2], typeof Object.values(person)[2]);
// console.log(Object.values(person)[3]);
// // Object.entries()
// console.log(Object.entries(person));
// console.log(Object.entries(person)[0]);
// console.log(Object.entries(person)[1]);
// console.log(Object.entries(person)[2]);
// console.log(Object.entries(person)[2], typeof Object.entries(person)[2]);
// console.log(Object.entries(person)[3]);

// 012 For...In Loops
// ======================================
// To iterate objects directly without using Object.keys() for keys or Object.values() for values of an object Instead use for...in loop

// const jeopardyWinnings = {
//   regularPLay: 2522700,
//   watsonChallenge: 300000,
//   tournamentOfChampions: 500000,
//   battleOfTheDecades: 100000,
// };

// for (let prop in jeopardyWinnings) {
//   // console.log(prop);
//   // console.log(prop, jeopardyWinnings[prop]);
//   console.log(jeopardyWinnings[prop]);
// }

// let total = 0;
// for (let prop in jeopardyWinnings) {
//   // console.log(prop);
//   // console.log(prop, jeopardyWinnings[prop]);
//   // console.log(jeopardyWinnings[prop]);
//   total += jeopardyWinnings[prop];
// }
// console.log(total);
// console.log(`Ken Jennings Total Earnings: ${total}`);

// Technically we can use for...in with an array
// Techniclly arrays also objects which means we can use for...in loop with an array
// don,t use for..in with an array even if you can use there are some issues and also you can easily iterate an array using for...of loop
// use for...in for Objects only

// for (let k in [88, 99, 77, 66]) {
//   // console.log(k); // array indices we can consider as keys so array values consider as values
//   console.log(k, [88, 99, 77, 66][k]);
// }

// console.log(jeopardyWinnings["regularPLay"]);
// console.log(jeopardyWinnings);

// 00 Todo List Project
// ======================================

// let input = prompt("what would like to do?");
// const todos = ["Collect Chiken Eggs", "Clean Litter Box"];

// while (input !== "quit" && input !== "q") {
//   if (input === "list") {
//     console.log("******************");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("******************");
//   } else if (input === "new") {
//     const newTodo = prompt("OK, WHAT IS THE TODO?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list`);
//   } else if (input === "delete") {
//     const index = parseInt(prompt("OK, ENTER AN INDEX TO DELETE:"));
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`Ok, deleted ${deleted[0]}`);
//     } else {
//       console.log("Unknown index");
//     }
//   }
//   input = prompt("what would like to do?");
// }
// console.log("OK YOU QUIT THE APP");

// // Revising splice
// const nums = [1, 2, 3, 4, 5];
// console.log(nums);
// console.log(nums.splice(2, 1));
// console.log(nums.splice(2, 2));
// console.log(nums.splice(2, 2));
// console.log(nums);

// const smallLetters = ["a", "b", "c"];
// console.log(smallLetters.splice("1", 1)); // even if you enter any number as a string it deletes that indexed number   // same as normal // ['b']
// console.log(smallLetters.splice("1", 1)); // ["c"]
// console.log(smallLetters); // ["a"]

// // remember this
// console.log(smallLetters.splice("dfgfgdfgf", 1)); // if you enter text string it  deletes index number 0 // ["a"]
// console.log(smallLetters); // [] = resulted empty array

// console.log(parseInt("23"), typeof parseInt("23")); // converts string into number
// console.log(parseInt("sdfdsfdsfgdsg")); // NAN
// console.log(parseInt("0")); // 0

// // Method to check whether it is a number or not a number
// console.log(Number.isNaN(32345)); // false
// console.log(Number.isNaN(NaN)); // true

// 00 Guessing Game // some problem with ths code getting infinite
// ======================================
// console.log(Math.floor(Math.random())); // gives always 0

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else {
//     guess = prompt("Too low! Enter a new guess:");
//   }
// }

// if (guess === "q") {
//   console.log("OK, YOU QUIT");
// } else {
//   console.log("CONGRATS YOU WIN!");
//   console.log(`You got it! It took you ${attempts} guesses`);
// }

// ======================================
// 0 - All 34 String Methods in Javascript in ONE VIDEO
// ======================================

// Strings as objects

// const str = "A String primitive";

// const str1 = new String("A String object");

// console.log(str.length);
// console.log(str1.length);

// const str2 = "Code Explained";
// console.log(str2.length);
// // String Character Access
// console.log(str2[0]);
// console.log(str2[5]);
// console.log(str2[str2.length - 1]);
// console.log(str2[str2.length - 2]);
// console.log(str2[str2.length - 4]);

// 01 - String.charAt()
// console.log(str2.charAt(5));

// 02 - String.indexOf() 03 - String.lastIndexOf()

// const s = "The code undefined code code !";
// console.log(s.indexOf("Code"));
// console.log(s.indexOf("code")); // gives first occurence
// console.log(s.indexOf("code", 4));
// console.log(s.indexOf("code", 5));
// console.log(s.indexOf("code", -5));
// console.log(s.indexOf(""));
// console.log(s.indexOf());

// console.log(s.lastIndexOf("Code"));
// console.log(s.lastIndexOf("code")); // last occurence
// console.log(s.lastIndexOf("code", 24));
// console.log(s.lastIndexOf("code", 23));
// console.log(s.lastIndexOf("code", -5));
// console.log(s.lastIndexOf(""));
// console.log(s.lastIndexOf());

// 04 - String.slice() 05 - String.substring()

// const s = "The morning is upon us.";
// console.log(s.length);

// console.log(s.slice(12));
// console.log(s.slice(-11));
// console.log(s.slice(23));
// console.log(s.slice(13, 16));
// console.log(s.slice(16, 13));
// console.log(s.slice(-8, -4));
// console.log(s.slice(-8, 4));
// console.log(s.slice(8, -4));

// console.log(s.substring(12));
// console.log(s.substring(-11)); // negative behaves as 0 index so it gives whole string returns
// console.log(s.substring(23));
// console.log(s.substring(13, 16));
// console.log(s.substring(16, 13));
// console.log(s.substring(-8, -4));
// console.log(s.substring(-8, 4));
// console.log(s.substring(8, -4));

// 06 - String.split()

// const string = "The morning is upon us.";
// console.log(string.split());
// console.log(string.split(""));
// console.log(string.split(" "));
// console.log(string.split("o")); // o will not include
// console.log(string.split("o", 2));
// console.log(string.split("o", 0));

// 07 - String.includes()

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("fox"));
// console.log(sentence.includes("Fox"));
// console.log(sentence.includes("fox", 0));
// console.log(sentence.includes("fox", 16));
// console.log(sentence.includes("fox", 17));

// 08 - String.startsWith()

// const str = "Cats are the best!";
// console.log(str.startsWith("Cats"));
// console.log(str.startsWith("are"));
// console.log(str.startsWith("are", 5));

// 09 - String.endsWith()

// const str = "Cats are the best!";
// console.log(str.length);
// console.log(str.endsWith("best!"));
// console.log(str.endsWith("best"));
// console.log(str.endsWith("best", 17));

// 10 - String.concat()

// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(str2));
// console.log(str1.concat(" ", str2));

// 11 - String.repeat()

// console.log("abc".repeat(0));
// console.log("abc".repeat(1));
// console.log("abc".repeat(2));
// console.log("abc".repeat(3));
// console.log("abc".repeat(3.5));
// // console.log("abc".repeat(-1)); // error
// // console.log("abc".repeat(1 / 0)); // error

// 12 - String.trimStart() 13 - String.trim() 14 - String.trimEnd()

// const greeting = "           Hello world!      ";
// console.log(greeting.trim());
// console.log(greeting.trimStart());
// console.log(greeting.trimEnd());

// 15 - String.padStart() 16 - String.padEnd()

// console.log("abc".padStart(10));
// console.log("abc".padEnd(10));
// console.log("abc".padStart(10, "foo"));
// console.log("abc".padEnd(10, "foo"));
// console.log("abc".padStart(10, "12345678"));
// console.log("abc".padEnd(10, "12345678"));
// console.log("abc".padStart(2));
// console.log("abc".padEnd(2));

// 17 - String.localeCompare()

// 18 - String.search()

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.search("ain"));
// console.log(text.search(/ain/));
// console.log(text.search(/AIN/));
// console.log(text.search(/AIN/i));
// console.log(text.search(/w/));

// 19 - String.match()

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));
// console.log(text.match(/w/));

// 20 - String.matchAll()

// let text = "The rain in SPAIN stays mainly in the plain";
// // console.log(text.matchAll("ain"));
// // console.log(text.matchAll(/ain/g));
// let res = text.matchAll("ain");
// console.log([...res]);
// res = text.matchAll(/ain/gi);
// console.log([...res]);
// res = text.matchAll(/w/gi);
// console.log([...res]);
// // console.log(text.matchAll(/ain/)); // error

// 21 - String.replace()

// let text = "Mr Blue has a blue house and a blue car";
// console.log(text.replace("blue", "red"));

// let result = text.replace("blue", (match) => {
//   return match.toUpperCase();
// });

// console.log(result);

// result = text.replace(/blue/g, "red");
// console.log(result);

// result = text.replace(/blue/gi, "red");
// console.log(result);

// result = text.replace(/blue/gi, (match) => {
//   return match.toUpperCase();
// });
// console.log(result);

// 22 - String.replaceAll()

// let text = "Mr Blue has a blue house and a blue car";
// console.log(text.replaceAll("blue", "red"));
// let result = text.replaceAll("blue", (match) => {
//   return match.toUpperCase();
// });
// console.log(result);
// result = text.replaceAll(/blue/g, "red");
// console.log(result);

// result = text.replaceAll(/blue/gi, "red");
// console.log(result);

// result = text.replaceAll(/blue/gi, (match) => {
//   return match.toUpperCase();
// });
// console.log(result);

// result = text.replaceAll(/blue/gi, "powerup".toUpperCase());
// console.log(result);

// // result = text.replaceAll(/blue/, "red"); // error
// console.log(result);

// 23 - String.charCodeAt() 24 - String.codePointAt()

// 25 - String.fromCharCode() 26 - String.fromCodePoint()

// 27 - String.normalize()

// 28 - String.toLowerCase() 29 - String.toUpperCase()

// const greeting = "hello WORLD!";
// console.log(greeting.toLowerCase());
// console.log(greeting.toUpperCase());

// 30 - String.toLocaleUpperCase() 31 - String.toLocaleLowerCase()

// const lower = "istanbul";
// console.log(lower.toLocaleUpperCase("en-US")); // English US

// const upper = lower.toLocaleUpperCase("tr");
// console.log(upper); // Turkish

// console.log(upper.toLocaleLowerCase("en-US"));

// console.log(upper.toLocaleLowerCase("tr"));

// 32 - String.toString() 33 - String.valueOf()

// const stringObject = new String("Hello World!");
// console.log(stringObject.toString());
// console.log(stringObject.valueOf());

// 34 - String.raw()

// ======================================
// 08 - Writing Reusable Code with Functions
// ======================================

// 001 Our First Function
// ======================================
// GOALS
// write valid functions
// write functions with arguments
// compare function expressions & function statements
// write a bunch of functions

/*
// NOTES

// // STEP 1: Define the function:
// function grumpus() {
//   console.log("ugh...you again...");
//   console.log("FOR THE LAST TIME...");
//   console.log("LEAVE ME ALONE!!!");
// }
// // STEP 2: Call the function:
// grumpus();
// grumpus();
// grumpus();

// for (let i = 0; i < 50; i++) {
//   grumpus();
// }
*/

// My Practice
// FUNCTIONS
// Reusable procedures
// Functions allow us to write reusable, modular code
// We define a "chunk" of code that we can then execute at a later point.

// function grumps() {
//   console.log("iam bharu");
//   console.log("iam fine");
//   console.log("iam better");
// }

// // grumps();
// // grumps();
// // grumps();
// // console.log(grumps);

// // looping
// for (let i = 0; i < 3; i++) {
//   grumps();
// }

// 002 Dice Roll Function
// ======================================

/*
// NOTES

// // Define our first function
// function rollDie() {
//   // Pick a random number from 1-6
//   // - Math.random() gives us a decimal from 0-1
//   // - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
//   // - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
//   //- Lastly we add one, to get a number between 1 and 6
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// // We can call functions inside of other functions!
// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// //Call it!
// throwDice();
*/

// My Practice

// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// there are many methods to throw dice 6 times

// METHOD 1 typing 6 times

// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();
// rollDie();

// METHOD 2 looping

// for (let i = 0; i < 6; i++) {
//   rollDie();
// }

// METHOD 3 // imp Function within a function

// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// throwDice();
// console.log(rollDie);
// console.log(throwDice);

// 003 Introducing Arguments
// ======================================

/*
// NOTES 

// function greet() {
// 	console.log('Hi');
// }

// // greet now expects a single argument
// function greet(nickname) {
//   console.log(`Hi, ${nickname}!`);
// }
// greet("Sansa");
// greet("Ramsay");

// // EXAMPLE 2
// function rollDie() {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }
// // We can now specify how many dice to roll!
// function throwDice(numRolls) {
//   for (let i = 0; i < numRolls; i++) {
//     rollDie();
//   }
// }

// throwDice(2);
// throwDice(6);
*/

// 004
// ======================================
// 005
// ======================================
// 006
// ======================================

// 007 Function Challenge 1 password Validator
// ======================================

/*
// NOTES

// // Write a isValidPassword function
// // It accepts 2 arguments: password and username
// // Password must:
// //	- be at least 8 characters
// //  - cannot contain spaces
// //  - cannot contain the username
// // If all requirements are met, return true.
// //Otherwise: false

// // isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// // isValidPassword('dogLuvr123!', 'dogLuvr') //false
// // isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooShort || hasSpace || tooSimilar) return false;
//   return true;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (!tooShort && !hasSpace && !tooSimilar) return true;
//   return false;
// }

// function isValidPassword(password, username) {
//   const tooShort = password.length < 8;
//   const hasSpace = password.indexOf(" ") !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   return !tooShort && !hasSpace && !tooSimilar;
// }
*/

// My Practice

// // Write a isValidPassword function
// // It accepts 2 arguments: password and username
// // Password must:
// //	- be at least 8 characters
// //  - cannot contain spaces
// //  - cannot contain the username
// // If all requirements are met, return true.
// //Otherwise: false

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    return false;
  }
}

// 008
// ======================================
// 009
// ======================================
// 010
// ======================================

// ======================================
// 09 - An Advanced Look at Functions
// ======================================

// 001
// ======================================

// ======================================
// 10 - Apply Functions to Collections of Data
// ======================================

// 001
// ======================================

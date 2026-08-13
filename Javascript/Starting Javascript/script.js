// console.log("This is from Javascript");

// // Variables and datatypes
// // var
// // let
// // const

// let a = 22;

// //Premitive Data types
// // string
// let name = "Bola";
// console.log(name);
// //number
// let age = 17;
// console.log(age);
// //boolean
// let isTall = false;
// console.log(isTall);
// //null
// let disability = null;
// console.log(disability);
// //undefined
// let maritalStatus;
// console.log(maritalStatus);

// maritalStatus = true;
// console.log(maritalStatus);

// //Unprimitive data types
// //Objects
// let bolaInfo = {
//   name: "Omobola",
//   age: 22,
//   gender: "female",
//   DOB: "10th oct 2004",
//   phoneNo: "08063628736",
//   eligibleToVote: true,
//   address: {
//     country: "Nigeria",
//     state: "Lagos",
//     street: "234 Awolowo Street, Ikorodu",
//   },
//   hobbies: ["reading", "cooking", "coding"],
// };

// // console.log(bolaInfo);
// // console.log(bolaInfo.age);
// console.log(
//   bolaInfo.address.street,
//   bolaInfo.address.state,
//   bolaInfo.address.country,
// );

// //Array
// let pin;
// let b = 234;
// let everything = [
//   "Mango",
//   34,
//   "Pawpaw",
//   true,
//   null,
//   "Jide",
//   { name: "sunrise" },
//   pin,
//   b,
//   ["Rice", "Beans", "Yam", "Semo", "Garri", "Bread"],
// ];

// // console.log(everything);
// console.log(everything[5]);
// console.log(everything[6].name);
// console.log(everything[9][2]);

// let test = everything[9];
// console.log(test[2]);

//String Methods

// let statement = "Javascript is a Programming language";
// let gmail = "SamMyTesT@gmail.com";
// let message = "        Jide, I'm Pregnant         ";
// let name = "Grace Idowu";

// console.log(statement);

// // let up = statement.toUpperCase();
// // console.log(up);

// console.log(statement.toUpperCase());
// console.log(gmail.toLowerCase());
// console.log(statement.length);
// console.log(message.trim());
// console.log(gmail.charAt());
// console.log(name.charAt());
// console.log(statement.indexOf("P"));
// console.log(message.includes("Jide"));

// let teste = message.trim();
// console.log(teste.slice(10, 18));
// console.log(teste.split(" "));

// let seprate = name.split(" ");
// // console.log(seprate.at(0)[0]);
// // let seprate1 = seprate.at(0)[0];
// // let seprate2 = seprate.at(1)[0];
// // console.log(seprate1 + seprate2);

// console.log(seprate);
// let nSeprate = seprate[0].charAt();
// let nSeprate2 = seprate[1].charAt();
// console.log(nSeprate, nSeprate2);

//Number methods

// let num = 356;
// let num2 = 757.984765;
// let score = "34";

// console.log(num + 34);
// console.log(num.toString() + 34);
// console.log(num2.toFixed(3));
// console.log(parseInt(score) + 10);

//math methods
// console.log(Math.PI);
// console.log(Math.max(23, 46, 73, 12, 46, 47, 94, 27));
// console.log(Math.min(23, 46, 73, 12, 46, 47, 94, 27));
// console.log(Math.round(23.7));
// console.log(Math.random());
// console.log(Math.ceil(345.2));
// console.log(Math.floor(345.7));

// let a = 23;

// a = 45;

// const b = 37;
// b = 67;

// console.log(b);
// console.log(a);

//Operators in javascript

// let a = 27;
// let b = 5;
// let c = 5;
// let d = "5";

// let c = a + b

//Addition
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);

//Comparism
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(b != c);
// console.log(b == c);
// console.log(c == d);
// console.log(c);
// console.log(d);
// console.log(c === d);

//Logical

// let uniform = true;
// let ID = false;
// let textbook = true;

// console.log(uniform && ID && textbook);
// console.log(uniform || ID || textbook);
// console.log((uniform && ID) || textbook);

// Unary
// console.log(++a);
// console.log(--a);

//
// let age = 45;
// let vote = age >= 18 ? "You can vote" : "You cannot vote";

// console.log(vote);

//Prompt and alert
// alert("Hello Everyone");

// console.error("An Error occoured");
// console.warn("Check this well before proceeding");

// console.log("Hello Everyone");

// console.log(typeof age);

// let newage = prompt("Enter your age");
// let newvote = newage >= 18 ? "You can vote" : "You cannot vote";
// alert(newvote);
// console.log(typeof newvote);
// // console.log(parseInt(newage));
// console.log(typeof newage);

// let a = parseInt(prompt("Enter your first number"));
// let b = parseInt(prompt("Enter your second number"));

// alert(a + b);

//Conditionals

//if statement

// if (5 > 7) {
//   console.log("5 is the greatest number");
// }

// if (3 < 7) {
//   console.log("3 is greater");
// } else {
//   console.log("7 is greater");
// }

// let num = 5;
// if (num > 5) {
//   console.log("Round to 1");
// } else if (num == 5) {
//   console.log("Round to 1");
// } else {
//   console.log("round to zeor");
// }

//Template literal
// let age = 56;
// console.log(`The user age is ${age}`);

// console.log("This is the user ${age}");

// let systemName = prompt("Who are you").toLowerCase();

// if (systemName === "jennifer" || systemName === "mariam") {
//   alert("You can Enter the STEM lab");
// } else alert("You do not have access to the STEM lab");

// let userAccess = prompt("What are you wearing");
// if (userAccess === "shoe") {
//   alert("You can enter");
// } else if (userAccess === "sandals") {
//   alert("You can enter with your sandals");
// } else if (userAccess === "injury") {
//   alert("Sorry, you can enter now");
// } else {
//   alert("You cannot enter");
// }

//Write a prompt that tells a user of they are ligble to vote

const userAge = parseInt(prompt("Enter your age"));
if (userAge >= 18) {
  alert(`Your age is ${userAge} and you can go on to vote`);
} else if (userAge < 1) {
  alert("Age can't be a negative value");
} else if (isNaN(userAge)) {
  alert("You can only enter a number");
} else {
  alert(`Sorry you are ${userAge} and you are not eligible to vote`);
}

//create a system that tells a user which is the greatest of two numbers

const numOne = parseInt(prompt("Enter your first number"));
const numTwo = parseInt(prompt("Enter your second number"));

if (numOne > numTwo) {
  alert(`${numOne} is greater than ${numTwo}`);
} else if (numOne === numTwo) {
  alert(`${numOne} is equal to ${numTwo}`);
} else {
  alert(`${numTwo} is greater than ${numOne}`);
}

// 1. Write a program that determines whether a given number is positive or negative.

// 2. Write a program that checks if a number is even or odd.

const userNumber = parseInt(prompt("Enter your number"));

if (userNumber % 2 === 0) {
  alert(`${userNumber} is an even number`);
} else {
  alert(`${userNumber} is an odd number`);
}

// 3. Write a program to determine the greater of three numbers.
// 4. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// 5. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// Write a simple function that accepts the name of different users
//Write a simple function that give the addition of two numbers

//Write a loop that prints out all odd numbers between 1-100
//Write a loop that prints out the 2 times multiplication table from 2x1 to 2x20
// Write a loop that prints out the only the even numbers of the 2times multiplication table from 2 to 60 e.g 2x2=4, 2x4=8, 2x6=12

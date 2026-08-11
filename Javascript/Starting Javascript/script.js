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

let a = 27;
let b = 5;
let c = 5;
let d = "5";

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
console.log(++a);
console.log(--a);

//
let age = 45;
let vote = age >= 18 ? "You can vote" : "You cannot vote";

console.log(vote);

// Comparison_logical

// Age checker
// let age = 17;
// if (age < 18) {
//   console.log("Minor");
// } else {
//   console.log("Adult");
// }

// //using ternary operator
// age < 18 ? console.log("Minor") : console.log("Adult");

//Login system

// let username = "admin";
// let password = "12345";

// if (username === "admin" && password === "12345") {
//   console.log("Login successful");
// } else {
//   console.log("Invalid credentials");
// }

// Positive even number
// let num = 18;
// if (num % 2 === 0 && num > 0) {
//     console.log("Positive Even number")
// }else{
//     console.log("Not a Positive Even number")
// }

// Grade system
// let marks = 40;
// marks >= 80
//   ? console.log("Distinction")
//   : marks >= 40
//     ? console.log("pass")
//     : console.log("fail");

//leap year
// let year = 1900;
// //using normal if - else
// if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// //using nested ternary operator
// isLeapYear =
//   year % 4 == 0
//     ? year % 100 == 0
//       ? year % 400 == 0
//         ? true
//         : false
//       : true
//     : false;
// console.log(isLeapYear);

// Largest among three numbers
// let a = 10;
// let b = 35;
// let c = 50;

// if (a > b) {
//   if (a > c) {
//     console.log("a largest number");
//   } else {
//     console.log("c is largest number");
//   }
// } else {
//   if (b > c) {
//     console.log("b is greatest");
//   } else {
//     console.log("c is greatest");
//   }
// }

// if (a > b && a > c) {
//   console.log(`a = ${a} is the largest`);
// } else if (b > a && b > c) {
//   console.log(`b = ${b} is the largest`);
// } else {
//   console.log(`c = ${c} is the largest`);
// }

//Number range
// let num = 19;
// if (num >= 20 && num <= 60) {
//   console.log("inside range");
// } else {
//   console.log("Outside range");
// }

//password strength
// let password = "abc1z345";
// if (password.length >= 8 && password.includes("123")) {
//   console.log("strength password");
// }else{
//     console.log("week")
// }

//Vowel checker
// let letter = "x";

// if("aeiou".includes(letter.toLowerCase())){
//     console.log("Vowel")
// }else{
//     console.log("consonants")
// }

//Restaurant discount
// let totalBill = 1400;
// let isMember = true;

// if (isMember) {
//   if (totalBill >= 1500) {
//     console.log("20% discount");
//     return;
//   }
//   console.log("10% discount");
// } else if (totalBill >= 1500) {
//   console.log("5% discount");
// } else {
//   console.log("No discount");
// }

//Valid triangle
// let a = 5;
// let b = 6;
// let c = 7;

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("valid triangle");
// }
// else{
//     console.log("Invalid triangle")
// }

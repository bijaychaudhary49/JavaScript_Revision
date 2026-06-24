// Number
/*Number can be decalred simple by assigning number value to variable and other way is by using new Number() which return data types as an object
The methods of number returns a value of data type string */

// const num = 200;
// const num2 = num.toFixed(2);
// console.log(typeof num2);

// Maths

/* Math.abs= absolute value
Math.floor = return less or equal to given interger
math.ceil = return greater or equla to given number
math.pow = return power value 
math.sqrt= return square root
math.round = return by rounding up the value
math.sin,cos,tan= return sin cos tan value
math.min = retunn minimum number among a list of number
math.max=return maximum number*/

// console.log(Math.random()); // return random value between 0(inclusive) and 1(exclusive)

//Get value in between zero and max value
// const max = 20;
// console.log(Math.floor(Math.random() * max)); //here max value is exclusive
// console.log(Math.floor(Math.random() * max) + 1); //here max value is inclusive

//getting number between any two values (min inclusive and max exclusive)
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min)) + min);

// min and max both are inclusive
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Note: Generally the max num are exclusive and to make it inclusive we have to add 1
// Math.random return value with decimal point so to discard the decimal part we use math.floor as this removes the decimal part by rounding down to the nearest integer.

//practice

// odd or even
// const num = 17;
// if (num % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// print positive value
// let num = -45
// console.log(Math.abs(num))

// let decimal = 7.5;
// console.log(Math.floor(decimal));
// console.log(Math.ceil(decimal));
// console.log(Math.round(decimal));
// console.log(Math.trunc(decimal));

//find largest and smallest num among list of num
// console.log(Math.max(45, 99, 12, 67, 81)); //returns largest num i.e. 99
// console.log(Math.min(4, 9, 2, 15, 7)); //returns smallest num i.e 2

// //Square root
// console.log(Math.sqrt(225));

//Find square
// console.log(8 ** 2); //using **
// console.log(Math.pow(8, 2)); //using power

//Random num between 1 and 100
// console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

// swap two number without using third variable
// let a = 10;
// let b = 12;

//method 1
// // a = a + b;
// // b = a - b;
// // a = a - b;

// method 2
// // [a,b]=[b,a]
// console.log(`a = ${a} and b = ${b}`);

//Convert seconds into hour, min and sec

// let seconds = 30001;
// convertToTIme(seconds);
// function convertToTIme(sec) {
//   if (sec < 60) {
//     console.log(`${sec} seconds`);
//     return;
//   }

//   let min = Math.floor(sec / 60);
//   sec = sec - min * 60;

//   let hour = 0;
//   if (Math.floor(min >= 60)) {
//     hour = Math.floor(min / 60);
//     min = min - hour * 60;
//   }

//   const timeString = `${hour > 0 ? `${hour} hours` : ""} ${min > 0 ? `${min} min` : ""} ${sec > 0 ? `${sec} secs` : ""}`;
//   console.log(timeString);
// }

// let seconds = 3675;

// const hr = Math.floor(seconds / 3600);
// const min = Math.floor((seconds % 3600) / 60);
// const sec = Math.floor(seconds % 60);

// console.log(`${hr} hrs ${min} min ${sec} secs`);

// Generate 6 digit OTP
// const min = 100000;
// const max = 999999;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

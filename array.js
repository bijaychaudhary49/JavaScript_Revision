//Array
// Array is an collection of items.
// It allows storing of multiple items in a single variable which on later can be accesed by using indexes.
// Array is an object i.e type of array is an object. Not a primitive data type. It's an reference type

//Array can be create in two ways
//Using array literal i.e []
// const arr = [1, 2, 3];

//Using array contructor
// const arr = Array(1,2,3)
// //OR
// const arr1 = new Array(1,2,3)

//Accessing array elements
//Elements of array can be accessed by using their index
// const arr = ["Bijay", "Kumar", "Chaudhary", 22];
// console.log(arr[0]) //Bijay

//Methods
//Push: used to push element from back
// arr.push(2)

// //pop: used to remove element from back
// arr.pop()

// //shift : used to remove element from front
// arr.shift()

// //unshift : used to add element from front
// arr.unshift(3)

//slice: used to extract element from array
// arr.slice(0, 2); //slice(start, end) end is exclusive. also slice doesn't manipulate the original array. works on copy of array

// //splice: used to extract element from array by making changes on original array
// arr.splice(0, 2); //splice(start,end) here start and end both are inclusive. also splice make changes on original array

// const arrOne = [1,2,3,4]
// const arrTwo = [5,6,7,8]

//in array, any data types can be pushed like it can be array or object or anything
// arrOne.push(arrTwo) //[ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

//concat() is used to merge the array elements into a single array /returns new array without modifying the existing array
// const arrThree = arrOne.concat(arrTwo)
// console.log(arrThree)

// spread operator (...) // This is also used to copy, merge two or more than two array or can be said to add new element/s in an array
// It expands array into individual elements
// const arrThree = [...arrOne, ...arrTwo]
// console.log(arrThree)

// Note: This behave same for objects also

//Basic Access
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log("First fruit", fruits[0])
// console.log("Last fruit:", fruits[fruits.length-1])
// console.log("Total number of fruits:", fruits.length)

//Add and remove
// const colors = ["Red", "Green", "Blue"];
// colors.push("Yellow");
// console.log("Pushed at the end", colors);
// colors.pop();
// console.log("After removing the last:", colors);
// colors.unshift("Black");
// console.log("Pushed at the begining", colors);
// colors.shift();
// console.log("After removing the first:", colors);

//Search
// const languages = ["JavaScript", "Python", "Java", "C++"];
// if (languages.includes("Python")) {
//   console.log("Python exists");
// } else {
//   console.log("Python does not exists");
// }

// // Index of java
// console.log(languages.indexOf("Java"));

// //Check if php exists
// languages.includes("PHP")
//   ? console.log("PHP exists")
//   : console.log("PHP does not exists");

//Loop through Array
const numbers = [12, 25, 8, 42, 17];
// //Print each number
// for (number of numbers) {
//   console.log(number);
// }

// //Print sum of all numbers
// let sum = 0;
// for (number of numbers) {
//   sum += number;
// }
// console.log(`Sum of all numbers is ${sum}`);

//Largest number
//Method one
// let largest = numbers[0];
// for (number of numbers) {
//   largest < number ? (largest = number) : largest;
// }
// console.log(`The largest number is ${largest}`)

//Method two
// console.log(`The largest number is ${Math.max(...numbers)}`)

//Mini challenge
// const students = ["Anku", "Bijay", "Rohan", "Sita", "Ram"];
// console.log("Student lsit")
// console.log("-------------------")
// for(i=1; i<=students.length;i++){
//     console.log(`${i}. ${students[i-1]}`)
// }
// console.log(`Total students: ${students.length}`)

//Bonus
const arr = Array.from({ length: 10 }, (_, index) => index+1);
console.log(arr);

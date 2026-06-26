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
const fruits = ["Apple", "Banana", "Mango", "Orange"];
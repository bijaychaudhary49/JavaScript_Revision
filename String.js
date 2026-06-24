// string can be declare in two ways
// one normally using "" and other is new string ()
/* the main diff between them is type
the type of string declared using "" is tring where as new string () is object */

// const myName = "Bijay" //type = string
// const fullName = new String("Bijaykumarchaudhary") //type = object

/*But on console log of string declared by using new string will show some prototypes

which can also be used with the string declare by "" (so no need to be confused)
javascript temporarily wrap string into string object behind the scene which is also called autoboxing 
*/

//print using template literals
// const name = "Bijay";
// console.log(`Hello, ${name}`);

//Prnt length
// let text = "javascript";
// console.log(text.length)

//Accessing characters
// let word = "Developer";
// console.log(word[0])
// console.log(word[8])

//convert case
// let language = "javascript";
// console.log(language.toUpperCase());
// console.log(language.toLowerCase());

//Trim: so trim is like remove whitespaces
// const name = "     Bijay    "
// console.log(name.trim())

//Check inclusion: To check inclusion in an string we use includes() method
// let sentence = "I love JavaScript";
// console.log(sentence.includes("Java"))

//Replace word: replace("value to replace", "value to replace with")
// let text = "I like cats";
// console.log(text.replace("cats", "dogs"))

//slice a string: slice (inclusiveIndex,exclusiveIndex)
// let fruits = "Watermelon";
// console.log(fruits.slice(0, 5));

//split string: split("split with like "," "-" "." etc")
// let colors = "red,green,blue";
// console.log(colors.split(","));

//print using repeat
// const star ="*";
// console.log(star.repeat(10))

//COunt character
// let word = "Programming"
// console.log(`There are ${word.length} characters in this word`)

//Print initial letter of word
// let fullName = "Bijay Chaudhary";
// const newName = fullName.split(" ");
// console.log(newName[0].charAt(0) + newName[1].charAt(0));

//Reverse string : for this use split('') to convert it into array and reverse() to reverse the array and join() to join it
// let word = "hello"
// const reverseWord = word.split('').reverse().join('')
// console.log(typeof(reverseWord))

// Palindrome
// let word = "madam";
// let reverseWord = word.split("").reverse().join("");
// if (word === reverseWord) {
//   console.log("palindrome");
// }

//Count vowels
// let word = "javaScript";
// let vowels = 0;
// let consonants = 0
// for (let letter of word) {
//   if (
//     letter === "a" ||
//     letter === "e" ||
//     letter === "i" ||
//     letter === "o" ||
//     letter === "u"
//   ) {
//     vowels += 1;
//   }
//   else{
// consonants +=1
//   }
// }
// console.log(`Vowels = ${vowels} and Consonants = ${consonants}`)

// word count
// let sentence = "JavaScript is awesome";
// let wordCount = 1;
// for (let letter of sentence){
//     if(letter===" "){
//         wordCount++
//     }
// }
// console.log(wordCount)

// let sentence = "JavaScript is awesome";

// let words = 0;
// let inWord = false;

// for (let char of sentence) {
//   if (char !== " " && !inWord) {
//     words++;
//     inWord = true;
//   } else if (char === " ") {
//     inWord = false;
//   }
// }

// console.log(words);
// console.log(sentence.split(/\s+/).length)
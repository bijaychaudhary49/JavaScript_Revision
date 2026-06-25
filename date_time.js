// In js, date are represented using date object
// It can be created as

// const currentDate = new Date()
// console.log(currentDate)

//create specific date
//month are indexed from 0 t0 11 i.e jan = 0 and 11 = december
//days are also indexed from 0 to 6 i.e sunday = 0 and saturday = 6
// const date = new Date ("2002-09-27")
// console.log(date)

// const now = new Date();
// console.log(now)
//get full year
// console.log(now.getFullYear())

// //get month
// console.log(now.getMonth())

// //get date i.e date of months
// console.log(now.getDate())

// //get day like sunday monday
// console.log(now.getDay().toLocaleString("en-US", { weekday:"long" }));

// //get hours
// console.log(now.getHours())

// //get minute
// console.log(now.getMinutes())

// //get sec
// console.log(now.getSeconds())

//Current date using getDate, getMonth and getFullYear
// const now = new Date();
// console.log(`Cuurent date: ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);

//Current time
// const now = new Date();
// console.log(`Current time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

//Display day name
// console.log(`Today is ${new Date().toLocaleString("en-US", { weekday: "long" })}`);

//Display Month name
// console.log(`Current month: ${new Date().toLocaleString("en-US", { month: "long" })}`);

// Greeting Based on time
// const hour = new Date().getHours();
// if (hour >= 5 && hour <= 11) {
//   console.log("Good morning");
// } else if (hour >= 12 && hour <= 16) {
//   console.log("Good afternoon");
// } else if (hour >= 17 && hour <= 20) {
//   console.log("Good evening");
// } else {
//   console.log("Good Night");
// }

// Weekend Checker
// const day = new Date().toLocaleString("en-US", { weekday: "long" });
//  if(day.toLowerCase()==="saturday" || day.toLowerCase()==="sunday"){
//     console.log("weekend")
//  }else{
//     console.log("weekday")
//  }

// if (["sunday", "saturday"].includes(day.toLowerCase())) {
//   console.log("weekend");
// } else {
//   console.log("weekday");
// }

//Birthday checker
// const birthday = new Date("2002-08-15");
// const birthdayMonth = birthday.toLocaleString("en-US", { month: "short" });
// const currentMonth = new Date().toLocaleDateString("en-US", { month: "short" });
// currentMonth === birthdayMonth
//   ? console.log("Birthday Month")
//   : console.log("Not a birthday month");

//Digital Clock
// const date = new Date();
// let hrs = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// if (min < 10) {
//   min = `0${min}`;
// }

// if (sec < 10) {
//   sec = `0${sec}`;
// }

//  console.log(`${hrs}:${min}:${sec}`);

// if (sec < 10) {
//   if (min < 10) {
//     if (hrs < 10) {
//       console.log(`0${hrs}:0${min}:0${sec}`);
//     } else {
//       console.log(`${hrs}:0${min}:0${sec}`);
//     }
//   } else {
//     console.log(`${hrs}:${min}:0${sec}`);
//   }
// } else {
//   console.log(`${hrs}:${min}:${sec}`);
// }

//Calculate new year
// const newYear = new Date("2027-01-01");
// console.log(`${Math.floor((newYear.getTime() - Date.now())/(1000*60*60*24))} days remaing for new year`);

//Build own date format
// const day = new Date().toLocaleString('en-US',{
//     weekday:"long",
//    })

// const month = new Date().toLocaleString('en-US',{  
//     month:"long"
// })

// console.log(`${day}, ${new Date().getDate()} ${month} ${new Date().getFullYear()}`)

//Bonus Challenge

console.log("===============================")
console.log("Today's Information")
console.log("===============================")
//Date
const day = new Date().toLocaleString('en-US',{
    weekday:"long",
   })

const month = new Date().toLocaleString('en-US',{  
    month:"long"
})

console.log(`Date: ${day}, ${new Date().getDate()} ${month} ${new Date().getFullYear()}`)
//Time
const date = new Date();
const hrs = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
if (sec < 10) {
  if (min < 10) {
    if (hrs < 10 ) {
      console.log(`Time: 0${hrs}:0${min}:0${sec}`);
    } else {
      console.log(`Time: ${hrs}:0${min}:0${sec}`);
    }
  } else {
    console.log(`Time: ${hrs}:${min}:0${sec}`);
  }
} else {
  console.log(`Time: ${hrs}:${min}:${sec}`);
}

console.log(`Month: ${date.toLocaleString('en-US',{month:"long"})}`)
console.log(`Year: ${date.getFullYear()}`)

console.log("Have a great day! 😊")
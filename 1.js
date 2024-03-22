// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".
 

// Constraints:

// 0 <= args.length <= 10


// solution:

function createHelloWorld() {
    return(
        console.log("hellow world")
    )
}

// // Get the current date and time
// var today = new Date();

// // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
// var day = today.getDay();

// // Array of day names
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // Display the current day
// console.log("Today is: " + daylist[day] + ".");

// // Get the current hour, minute, and second
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();

// // Determine if it's AM or PM
// var prepand = (hour >= 12) ? " PM " : " AM ";

// // Convert 24-hour format to 12-hour format
// hour = (hour >= 12) ? hour - 12 : hour;

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === ' PM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Noon';
//     } else {
//         hour = 12;
//         prepand = ' PM';
//     }
// }

// // Check for special cases when hour is 0
// if (hour === 0 && prepand === ' AM ') {
//     if (minute === 0 && second === 0) {
//         hour = 12;
//         prepand = ' Midnight';
//     } else {
//         hour = 12;
//         prepand = ' AM';
//     }
// }

// // Display the current time
// console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 




var today=new Date();
var day =today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(`today is ${daylist[day]}`);
var time=today.getTime();

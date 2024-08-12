// Assaingment 9 - 11

// 1. City Name Greeting
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

// 2. Gender-based Greeting
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}

// 3. Traffic Signal Message
var signalColor = prompt("Enter the color of the road traffic signal (red, yellow, green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}

// 4. Fuel Check
var remainingFuel = parseFloat(prompt("Enter remaining fuel in your car (in litres):"));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Alert Message Tests
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// 6. Marks and Grade
var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

alert("Total Marks: " + totalMarks);
alert("Marks Obtained: " + obtainedMarks);
alert("Percentage: " + percentage.toFixed(2) + "%");
alert("Grade: " + grade);
alert("Remarks: " + remarks);

// 7. Guess Game
var secretNumber = 7; // You can change this number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}

// 8. Divisibility Check
var number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}

// 9. Even or Odd Check
var numberToCheck = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (numberToCheck % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// 10. Temperature Message
var temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Simple Calculator
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation");
}

if (result !== undefined) {
    alert("The result is: " + result);
}

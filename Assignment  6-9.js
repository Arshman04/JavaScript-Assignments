//Assaingment 6-9

// 1. Arithmetic Operations
var number = 10; // You can change this number to anything you want

console.log("Initial Number: " + number);

var addResult = number + 5;
console.log("After adding 5: " + addResult);

var subtractResult = number - 5;
console.log("After subtracting 5: " + subtractResult);

var multiplyResult = number * 5;
console.log("After multiplying by 5: " + multiplyResult);

var divideResult = number / 5;
console.log("After dividing by 5: " + divideResult);

var modulusResult = number % 5;
console.log("After modulus by 5: " + modulusResult);


// 2. Variable Output
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

console.log("a: " + a); // 1
console.log("b: " + b); // 0
console.log("result: " + result); // 3

/*
Explanation:
--a;       // a becomes 1
--a - --b; // 1 - 0 = 1 (a is 1, b is 0)
--a - --b + ++b;  // 1 - 0 + 1 = 2 (a is 1, b becomes 1)
--a - --b + ++b + b--;  // 1 - 0 + 1 + 1 = 3 (a is 1, b becomes 0 after operation)
*/


// 3. Greet the User
var userName = prompt("Enter your name:");
console.log("Hello, " + userName + "! Welcome to our website.");


// 4. Multiplication Table
var userNumber = prompt("Enter a number for multiplication table:", 5);
userNumber = parseInt(userNumber);

console.log("Multiplication Table of " + userNumber);
for (var i = 1; i <= 10; i++) {
    console.log(userNumber + " x " + i + " = " + (userNumber * i));
}


// 5. Subject Marks Calculation
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

console.log("Subject\t\tTotal Marks\tObtained Marks");
console.log(subject1 + "\t\t" + totalMarks + "\t\t" + obtainedMarks1);
console.log(subject2 + "\t\t" + totalMarks + "\t\t" + obtainedMarks2);
console.log(subject3 + "\t\t" + totalMarks + "\t\t" + obtainedMarks3);

console.log("Total Marks Obtained: " + totalObtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");


// 6. Arithmetic Operations (Sequential)
var number = 10; // You can change this number to anything you want
var result = ((number + 5) * 10) / 2;

console.log("Result after performing (number + 5) * 10 / 2: " + result);



for (let i = 1; i <= 10; i++) {
    console.log(i);
}

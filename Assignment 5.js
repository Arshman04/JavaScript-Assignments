//Assaingment 5

// 1. Addition, Subtraction, Multiplication, Division, and Modulus
var num1 = 10;
var num2 = 20;

// Addition
var sum = num1 + num2;
console.log("Sum: " + sum);

// Subtraction
var difference = num1 - num2;
console.log("Difference: " + difference);

// Multiplication
var product = num1 * num2;
console.log("Product: " + product);

// Division
var quotient = num1 / num2;
console.log("Quotient: " + quotient);

// Modulus
var remainder = num1 % num2;
console.log("Remainder: " + remainder);


// 2. JavaScript Mathematical Expressions
var myVariable;
console.log("Value after variable declaration is: " + myVariable);

myVariable = 5;
console.log("Initial value: " + myVariable);

myVariable++;
console.log("Value after increment is: " + myVariable);

myVariable += 7;
console.log("Value after addition is: " + myVariable);

myVariable--;
console.log("Value after decrement is: " + myVariable);

var remainderAfterDivision = myVariable % 3;
console.log("The remainder is: " + remainderAfterDivision);


// 3. Movie Ticket Price Calculation
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
console.log("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR");


// 4. Multiplication Table
var number = 4; // Change this number to display a different table
console.log("Multiplication Table of " + number);
for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// 5. Temperature Converter
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

fahrenheit = 77;
celsius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + "°F is " + celsius + "°C");


// 6. Shopping Cart System
var priceItem1 = 650;
var priceItem2 = 1000;
var qtyItem1 = 3;
var qtyItem2 = 2;
var shippingCharges = 200;

var totalCost = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;
console.log("Shopping Cart");
console.log("Price of item 1 is " + priceItem1 + " PKR");
console.log("Quantity of item 1 is " + qtyItem1);
console.log("Price of item 2 is " + priceItem2 + " PKR");
console.log("Quantity of item 2 is " + qtyItem2);
console.log("Shipping charges " + shippingCharges + " PKR");
console.log("Total cost of your order is " + totalCost + " PKR");


// 7. Percentage Calculation
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%");


// 8. Currency Conversion
var usd = 10;
var riyal = 25;
var pkr = (usd * 104.80) + (riyal * 28);

console.log("Total Currency in PKR: " + pkr);


// 9. Arithmetic Operations
var number = 10;
var result = ((number + 5) * 10) / 2;
console.log("Result: " + result);


// 10. Age Calculator
var currentYear = 2024;
var birthYear = 1990;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

console.log("They are either " + age2 + " or " + age1 + " years old.");


// 11. Geometrizer
var radius = 10;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

console.log("The circumference is " + circumference);
console.log("The area is " + area);


// 12. Lifetime Supply Calculator
var favoriteSnack = "chocolate chip cookies";
var currentAge = 25;
var maxAge = 80;
var amountPerDay = 2;

var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


// 13. Movie Ticket Price Calculation (Revisiting as part of a new requirement)
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
console.log("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR");


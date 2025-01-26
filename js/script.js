"use strict";

// 1. Use the `prompt` function to ask the user for their birth year.
let birthYear = prompt("Indtast dit fødselsår:");

// 2. Calculate the person's age using the `new Date()` function to get the current year and `parseInt` to convert user input to a number.
let currentYear = new Date().getFullYear();
let age = currentYear - parseInt(birthYear);

// 3. Display the calculated age using `console.log`.
console.log("Din alder er: " + age);
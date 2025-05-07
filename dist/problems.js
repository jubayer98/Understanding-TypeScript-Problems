"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// a function that takes a string and an optional boolean parameter
// if the boolean parameter is true, it returns the string in uppercase
// if the boolean parameter is false, it returns the string in lowercase
// if the boolean parameter is not provided, it returns the string in uppercase
// Example:
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase(); //toUpper is false, return lowercase
    }
    else {
        return input.toUpperCase(); //toUpper is true or undefined, return uppercase
    }
}
console.log(formatString("Hello", false)); // Call with false
// ==============================================
// a function that takes an array of objects with title and rating properties
// and returns a new array of objects with only those that have a rating of 4 or higher
// Example:
function filterByRating(items) {
    return items.filter(item => item.rating >= 4); // Filter items with rating >= 4
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books)); // Call with an array of books
// ==============================================
// a function that takes an array of numbers and returns an array contains all numbers
// Example:
function concatenateArrays(...arrays) {
    return [...arrays].reduce((acc, array) => [...acc, ...array], []); // Concatenate all arrays
}
console.log(concatenateArrays(["a", "b"], ["c"])); // Call with string arrays
// ==============================================
// a Vehicle class with private make and year properties
// and a method to get the vehicle information
// a Car class that extends Vehicle with an additional model property
// and a method to get the car model
// Example:
// Vehicle class
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
// Car class that extends Vehicle
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year); // Call the constructor of the parent class
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla"); // Create an instance of Car
console.log(myCar.getInfo()); // Call method from parent class
console.log(myCar.getModel()); // Call method from child class
// ==============================================
// a function that takes a string or number and returns a number
// if the input is a string, return its length
// if the input is a number, return its double
// Example:
function processValue(value) {
    if (typeof value === "string") {
        return value.length; // If value is a string, return its length
    }
    else {
        return value * 2; // If value is a number, return its double
    }
}
console.log(processValue("hello")); // Call with string
console.log(processValue(10)); // Call with number
// Function to get the most expensive product
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null; // Return null if the array is empty
    }
    let mostExpensiveProduct = products[0]; // Initialize with the first product
    // Iterate through the products to find the most expensive one
    for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    }
    return mostExpensiveProduct; // Return the most expensive product
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products)); // Call with an array of products
console.log(getMostExpensiveProduct([])); // Call with an empty array
// ==============================================
// a function that takes a day of the week and returns whether it's a weekday or weekend
// Example:
// Enum for days of the week
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
// Function to get the type of day
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"; // If the day is Saturday or Sunday, return "Weekend"
    }
    else {
        return "Weekday"; // Otherwise, return "Weekday"
    }
}
console.log(getDayType(Day.Monday)); // Call with a weekday
// ==============================================
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"));
                }
                else {
                    resolve(n * n); // Return the square of the number
                }
            }, 1000); // Wait for 1 second before resolving or rejecting
        });
    });
}
squareAsync(4).then(console.log); // Output after 1 second: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed

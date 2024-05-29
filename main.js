#! /usr/bin/ env node 
Part1: ("\n\tBasic Arrays - Product Inventory\n");
const products = [
    {
        name: "iphone",
        price: 100000,
        inventory: {
            stock: 100,
            colorOptions: ["Red", "Blue", "Golden", "grey"]
        }
    },
    {
        name: "samsung",
        price: 35000,
        inventory: {
            stock: 50,
            colorOptions: ["Black", "White", "blue"]
        }
    },
    {
        name: "Techno",
        price: 25000,
        inventory: {
            stock: 80,
            colorOptions: ["Yellow", "blue", "silver"]
        }
    },
];
function changeColor(product, newColor) {
    const oldPrice = product.price;
    switch (newColor.toLowerCase()) {
        case "red":
            console.log(product.price *= 1.1);
            break;
        case "blue":
            console.log(product.price *= 0.95);
            break;
        default:
            console.log(product.price);
            break;
    }
}
changeColor(products[0], "green");
products.forEach((product) => console.log(product));
Part2: ("\n\tMulti-Dimensional Arrays and Tuples - Student Grades\n");
// Challenge:
// You are tasked with creating a student grading system. Implement functions and logic to 
// manage student grades effectively.
// 1. Define a TypeScript type alias named Student to represent a student with the 
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects
// 2. Create an array named students containing at least three student objects. Each student 
// object should include a name and an array of grades.
// 3. Implement a function named calculateAverageGrade that takes a student's grades as 
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array, 
// calculate the average grade for each student using the calculateAverageGrade 
// function, and print their name and average grade.
Step: 1;
Step: 2;
let students = ([
    {
        name: "Maira",
        grades: [80, 90, 75]
    },
    {
        name: "MAham",
        grades: [60, 52, 70]
    },
    {
        name: "Mirha",
        grades: [45, 50, 88]
    }
]);
Step: 3;
function calculateAverageGrade(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}
Step: 4;
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name},
    'Average Grade: ${averageGrade.toFixed(2)}`);
});
Part3: ("\n\tArray with Types and Indexing - Employee Salaries\n");
// Challenge:
// You are managing employee salaries for a company. Implement logic to calculate salaries and 
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// • name (string): The name of the employee.
// • hoursWorked (number): The number of hours the employee worked.
// • hourlyRate (number): The hourly rate of the employee.
// • salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee 
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each 
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary
Step: 1;
Step: 2;
let employees = [
    {
        name: "Saba",
        hoursWorked: 12,
        hourlyRate: 10,
        salary: 50000,
    },
    {
        name: "fiza",
        hoursWorked: 8,
        hourlyRate: 5,
        salary: 30000,
    },
    {
        name: "tooba",
        hoursWorked: 20,
        hourlyRate: 60,
        salary: 100000,
    }
];
Step: 3;
function calculateSalary(employee) {
    employee.salary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary *= 1.10;
    }
}
employees.forEach(employee => {
    calculateSalary(employee);
    console.log(`Name: ${employee.name}, Salary: $${employee.salary.toFixed(2)}`);
});
export {};

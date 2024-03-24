#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your weight in kg", type: "number", name: "weightInKg" },
    { message: "Enter your height in meters", type: "number", name: "heightInMeters" },
]);
let bmi = answer.weightInKg / (answer.heightInMeters * answer.heightInMeters);
console.log(`Your BMI IS ${bmi}`);

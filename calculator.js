//calculator project
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "enter your second number"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "/", "*"],
        message: "enter your first number"
    }
]);
const { numberOne, numberTwo, Operator } = answer;
if (numberOne !== undefined && numberTwo !== undefined && Operator) {
    let result = 0;
    // Perform the chosen operation based on the user's selection
    if (Operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (Operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (Operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (Operator === "/") {
        result = numberOne / numberTwo;
    }
    else if (Operator === "%") {
        // Calculate the percentage of the first number in relation to the second
        result = (numberOne / numberTwo) * 100;
    }
    // Display the result to the user in a friendly message
    console.log("Great! Your result is:", result);
}
else {
    // Notify the user if they provided invalid input
    console.log("Oops! Please enter valid numbers and choose an operation.");
}
// Exciting update from my TypeScript coding journey! 🚀👩‍💻 I've just completed my project 'project00_calculator' - a Simple Command Line Calculator. 💡🔢
// This project marks a  significant milestone in my learning journey, allowing me to apply TypeScript concepts practically.

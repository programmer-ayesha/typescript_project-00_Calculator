//calculator project
import inquirer from "inquirer";

const answer :{
    numberOne : number;
    numberTwo : number;
    Operator : string;
} = await inquirer.prompt([
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
        choices: ["+", "-", "/", "*","%",],
        message: "enter your first number"
    }
]);


const { numberOne, numberTwo, Operator } = answer;


if (numberOne !== undefined && numberTwo !== undefined && Operator) {
    let result: number = 0;

   

    if (Operator === "+") {
        result = numberOne + numberTwo;
    } else if (Operator === "-") {
        result = numberOne - numberTwo;
    } else if (Operator === "*") {
        result = numberOne * numberTwo;
    } else if (Operator === "/") {
        result = numberOne / numberTwo;
    } else if (Operator === "%") {

        // Calculate the percentage of the first number in relation to the second

        result = (numberOne / numberTwo) * 100;
     }

    // give the result 

    console.log("Great! Your result is:", result);
} else {

    //Let the user know if the input they provided is not valid.

    console.log("Oops! Please enter valid numbers and choose an operation.");
}



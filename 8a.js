function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    let remainder = num1 % num2;
    alert("Addition: " + sum +
    "\nSubtraction: " + difference +
    "\nMultiplication: " + product +
    "\nDivision: " + quotient +
    "\nModulus: " + remainder);
    }
    calculator();
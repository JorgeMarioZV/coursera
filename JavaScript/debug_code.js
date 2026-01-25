function performOperation() {
    // Get user inputs from input fields
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let ops = document.getElementById("operation").value;

    // Check if inputs are valid numbers
    if (!isNaN(num1) || !isNaN(num2)) {
        switch (ops) {
            case "Addition":
                let resultAddition = addition(num1, num2);
                displayResult(resultAddition);              
                break;
            case "Multiplication":
                let resultMultiplication = multiply(num1, num2);
                displayResult(resultMultiplication);
                break;
            case "Division":
                let resultDivision = division(num1, num2);
                displayResult(resultDivision);
                break
        }
        // console.log("The Result is: " + result);
        // console.error("Invalid input: Please enter valid numbers.");
        // return;
        // alert("Invalid input: Please enter valid numbers.");
    } else {
        displayResult("Invalid input: Please enter valid numbers.");
    }
}

function addition(a, b) {
    return a + b;
}

function division(a, b) {
    return a / b;
}

function multiply(a, b) {
    debugger; // Pause execution here for debugging
    return a * b;
}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The Result is: ${result}`;
}
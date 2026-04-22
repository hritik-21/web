// 1. Variable Declaration and Data Types
document.getElementById("checkBtn").addEventListener("click", function() {
    let inputVal = document.getElementById("userInput").value;
    
    // Demonstrate basic types
    let isString = typeof inputVal;
    let numericVal = Number(inputVal);
    let isNumber = !isNaN(numericVal);

    let message = `Value: ${inputVal} | Original Type: ${isString}`;
    if (isNumber) {
        message += ` | Can be converted to Number: ${numericVal}`;
    }

    document.getElementById("typeResult").innerText = message;
});

// 2. Keyboard Input Event Handling
document.getElementById("keyInput").addEventListener("keyup", function(event) {
    document.getElementById("keyOutput").innerText = event.target.value;
    console.log("Last key pressed: " + event.key);
});

// 3. If-Else and Switch Control Statements
document.getElementById("ageBtn").addEventListener("click", function() {
    let age = parseInt(document.getElementById("ageInput").value);
    let resultText = "";

    // If-Else
    if (isNaN(age)) {
        resultText = "Please enter a valid number.";
    } else if (age < 18) {
        resultText = "Category: Minor.";
    } else if (age >= 18 && age < 60) {
        resultText = "Category: Adult.";
    } else {
        resultText = "Category: Senior Citizen.";
    }

    // Switch (Demonstrating switch on ranges/specific values)
    let bracket = "";
    switch (true) {
        case (age < 13):
            bracket = " (Childhood)";
            break;
        case (age < 20):
            bracket = " (Teenager)";
            break;
        default:
            bracket = " (Mature)";
            break;
    }

    document.getElementById("ageResult").innerText = resultText + bracket;
});
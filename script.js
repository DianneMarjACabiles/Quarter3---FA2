function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultText = "";  // Only declare it once

    if (isNaN(num1) || isNaN(num2)) {  // Fix the typo here (isNaN)
        resultText = "Enter numbers in both boxes.";
    } else {
        var result;  // Declare result variable

        switch (operation) {
            case '+':
                result = num1 + num2;
                resultText = "The sum of " + num1 + " and " + num2 + " is " + result;
                break;

            case '-':
                result = num1 - num2;
                resultText = "The difference of " + num1 + " and " + num2 + " is " + result;
                break;

            case '*':
                result = num1 * num2;
                resultText = "The product of " + num1 + " and " + num2 + " is " + result;
                break;

            case '/':
                result = num1 / num2;
                resultText = "The quotient of " + num1 + " and " + num2 + " is " + result;
                break;

            case '%':
                result = num1 % num2;
                resultText = "The remainder of " + num1 + " and " + num2 + " is " + result;
                break;

            default:
                resultText = 'Error';
        }
    }

    document.getElementById('result').textContent = resultText;  // Display the result
}

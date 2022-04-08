function calculator(num1, operator, num2) {
    let output = 0;
    if (operator === '+') {
        output = num1 + num2;
    } else if (operator === '-') {
        output = num1 - num2;
    } else if (operator === '*') {
        output = num1 * num2;
    } else if (operator === '/') {
        output = num1 / num2;
    }
    console.log(output.toFixed(2));
}

calculator(5, '+', 10)
// Function to add two numbers 
function sumCalculator() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    } else {
        const sumOfTwo = num1 + num2;
        document.getElementById('result').innerText = 'Sum: ' + sumOfTwo;
    }
}

// Function to clear values in input fields
function clearAllInputs(event) {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    document.getElementById('result').innerText = ''; 
}

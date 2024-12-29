function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLastCharacter() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = parseFloat(result).toFixed(3);
    } catch (e) {
        document.getElementById("display").value = 'Error';
    }
}
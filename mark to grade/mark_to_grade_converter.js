function convertMark() {
    var mark = document.getElementById("mark-input").value;
    var resultElement = document.getElementById("result");
    var validationMessageElement = document.getElementById("validation-message");

    if (isNaN(mark) || mark < 0 || mark > 100) {
        validationMessageElement.textContent = "Invalid mark. Please enter a number between 0 and 100.";
        resultElement.textContent = "";
        return;
    }

    if (mark > 90) {
        resultElement.textContent = "Grade A";
    } else if (mark > 80) {
        resultElement.textContent = "Grade B";
    } else if (mark > 70) {
        resultElement.textContent = "Grade C";
    } else if (mark > 50) {
        resultElement.textContent = "Grade D";
    } else {
        resultElement.textContent = "Grade F";
    }

    validationMessageElement.textContent = "";
}

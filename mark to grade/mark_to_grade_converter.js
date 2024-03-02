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

// Create a button element
var backButton = document.createElement("button");

// Set button text
backButton.textContent = "Go Back";

// Add event listener to handle click event
backButton.addEventListener("click", function() {
    // Go back to previous page
    window.history.back();
});

// Append the button to the document body or any other desired element
document.body.appendChild(backButton);


var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;

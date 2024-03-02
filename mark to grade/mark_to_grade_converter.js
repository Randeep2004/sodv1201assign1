
function convertMark() {
    // Fetch the entered mark value from the input field
    var mark = document.getElementById("entermarks").value;

    // Elements for displaying result and validation message
    var resultElement = document.getElementById("result");
    var validationMessageElement = document.getElementById("Validation");

    // Check if the entered mark is within the valid range (0 to 100)
    if (isNaN(mark) || mark < 0 || mark > 100) {
        // Display a message for invalid input
        validationMessageElement.textContent = "Please enter a mark between 0 and 100.";
        // Clear any previous result
        resultElement.textContent = "";
        return;
    }

    // Convert the mark into a grade based on a unique grading scale
    if (mark >= 90) {
        resultElement.textContent = "You got grade A!";
    } else if (mark >= 80) {
        resultElement.textContent = "You got grade B!";
    } else if (mark >= 70) {
        resultElement.textContent = "You got grade C!";
    } else if (mark >= 50) {
        resultElement.textContent = "You got grade D!";
    } else {
        resultElement.textContent = "You got grade F. Go and study.";
    }

    // Clear any previous validation message
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

function convertTemperature() {
    var fahrenheitInput = document.getElementById("fahrenheit-input").value;
    var celsiusOutput = document.getElementById("celsius-output");
    var kelvinOutput = document.getElementById("kelvin-output");

    var celsius = (fahrenheitInput - 32) * 5 / 9;
    var kelvin = celsius + 273.15;

    celsiusOutput.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
    kelvinOutput.textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)}K`;
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


// Delay for the text display after 10 sec
setTimeout(DelayText, 10000);

var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;


// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to input and output elements
    const FahrenheitInput = document.getElementById("EnterFahrenheit");
    const CelsiusOutput = document.getElementById("EnterCelsius");
    const KelvinOutput = document.getElementById("Enterkelvin");

    // Function to perform temperature conversion
    function TemperatureConversion() {
        // Get the Fahrenheit temperature from input field and convert it to a number
        const fahrenheit = parseFloat(FahrenheitInput.value);
        // Check if the input is a valid number
        if (!isNaN(fahrenheit)) {
            // Perform temperature conversion
            const celsius = (fahrenheit - 32) * 5 / 9;
            const kelvin = celsius + 273.15;

            // Update output elements with converted temperatures
            CelsiusOutput.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
            KelvinOutput.textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)}K`;
        } else {
            // If input is not a valid number, display an error message
            CelsiusOutput.textContent = "Please enter a valid temperature";
            KelvinOutput.textContent = "";
        }
    }

    // Add an event listener to the Fahrenheit input field to trigger the conversion
    FahrenheitInput.addEventListener("input", TemperatureConversion);
});

// Get the current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;

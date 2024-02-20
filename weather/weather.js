function convertTemperature() {
    var fahrenheitInput = document.getElementById("fahrenheit-input").value;
    var celsiusOutput = document.getElementById("celsius-output");
    var kelvinOutput = document.getElementById("kelvin-output");

    var celsius = (fahrenheitInput - 32) * 5 / 9;
    var kelvin = celsius + 273.15;

    celsiusOutput.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
    kelvinOutput.textContent = `Temperature in Kelvin: ${kelvin.toFixed(2)}K`;
}

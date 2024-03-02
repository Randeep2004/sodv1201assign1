function DelayText() {
    const displayTextElement = document.getElementById('pictext');
    displayTextElement.style.display = 'block';
}

// Delay for the text display after 10 sec
setTimeout(DelayText, 10000);

var now = new Date();
  var datetime = now.toLocaleString();

  // Insert date and time into HTML
  document.getElementById("datetime").innerHTML = datetime;

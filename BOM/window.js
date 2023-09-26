// The Browser Object Model (BOM) allows JavaScript to "talk" to the browser.
document.write(window.innerHeight + " | " + window.innerWidth);

// window.open();

var meriWindow = window.open("", "hamza sherazi", "width=600,height=500");

// Wait for the new window to load before adding the button.
meriWindow.document.addEventListener("DOMContentLoaded", function() {
    var winButton = meriWindow.document.createElement("button");
    winButton.textContent = "Click me!";
    meriWindow.document.body.appendChild(winButton);
  });
  
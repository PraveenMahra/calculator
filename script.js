let screenValue = "0";

function updateScreen() {
  document.getElementById("screen").innerText = screenValue;
}

function appendToScreen(value) {
  if (screenValue === "0") {
    screenValue = value;
  } else {
    screenValue += value;
  }
  updateScreen();
}

function clearScreen() {
  screenValue = "0";
  updateScreen();
}

function calculate() {
  try {
    const result = eval(screenValue);
    screenValue = result.toString();
    updateScreen();
  } catch (error) {
    screenValue = "Error";
    updateScreen();
  }
}

updateScreen();

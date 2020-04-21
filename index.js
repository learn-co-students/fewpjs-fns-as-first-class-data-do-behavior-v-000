/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(inputStr) {
  const splitStr = inputStr.split(':');
  const timeInt = parseInt(splitStr[0]);
  if (timeInt < 12) return "Good Morning"
  if (timeInt > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

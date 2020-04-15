/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(militaryTimeString) {
  const splitTime = militaryTimeString.split(":");
  const hour = parseInt(splitTime[0]);

  if (hour < 12) { return "Good Morning"; }
  if (hour >= 12 && hour < 17) { return "Good Afternoon"; } // Interesting; I can't do 12 <= hour < 17.
  return "Good Evening";
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  const greetingHeader = document.getElementById('greeting');
  greetingHeader.innerText = message; // This works with TextContent, too, but somehow it won't pass the tests.
}
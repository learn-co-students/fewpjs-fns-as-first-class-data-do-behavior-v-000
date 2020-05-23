/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  // split time into hours and minutes
  const section = timeString.split(':');
  // find hours and convert hours into integer
  const hours = parseInt(section[0]);
  // if statement for time
  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}
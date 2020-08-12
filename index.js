/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hours = timeString.split(":");
  if (parseInt(hours) < 12) {
    return "Good Morning";
  }
  if (parseInt(hours) > 12 && parseInt(hours) < 17) {
    return "Good Afternoon";
  }
  if (parseInt(hours) > 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greet) {
  document.getElementById("greeting").innerText = "TEST"
}

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".

/* Write your implementation of greet() */
function greet(timeString) {
  const time = parseInt(timeString.split(":")[0]);

  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 17){
    return "Good Afternoon";
  } else if (time >= 17){
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}

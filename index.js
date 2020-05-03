/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let message;
  const updatedTime = timeString.split(":");
  const hour = parseInt(updatedTime[0]);
  
  if (hour < 12) {
    message = "Good Morning";
  }
  
  if (hour >= 12 && hour <= 17) {
    message = "Good Afternoon";
  }
  
  if (hour > 17) {
    message = "Good Evening";
  }
  
  return message; 
}

function displayMessage(message) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = message;
}
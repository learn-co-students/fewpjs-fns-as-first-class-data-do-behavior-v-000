/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString){
const hour = parseInt(timeString, 10);
if ( hour < 12) return "Good Morning"
if ( hour > 17) return "Good Evening"
return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

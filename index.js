/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let newTime = parseInt(timeString, 10); 
  if ( newTime < 12) return "Good Morning"
  if ( newTime > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
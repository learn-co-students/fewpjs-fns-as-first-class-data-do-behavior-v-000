/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  
  var hour = parseInt(time.split(":")[0]);
  if (hour<12 && hour > 0) {
    greeting = 'Good Morning';
  }
  else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon';
  }
  else {
    greeting = 'Good Evening';
  }
  return greeting;
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){

  document.getElementById("greeting").innerText = greeting

}

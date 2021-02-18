/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeStr) {
  time = parseInt(timeStr, 10)

  if (time < 12) return "Good Morning"  
  if (time < 17) return "Good Afternoon"
  return "Good Evening"
}


function displayMessage(str) {
  document.getElementById('greeting').textContent = str
}



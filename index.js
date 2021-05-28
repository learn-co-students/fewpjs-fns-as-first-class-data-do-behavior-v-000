/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeStr){
  let hour = parseInt(timeStr,10);
  if (hour < 12) return "Good Morning"
  if (hour > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg){
  document.getElementById('greeting').innerText = msg
}

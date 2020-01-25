/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  time = parseInt(time.split(":")[0])
  if (time < 12) {
    return "Good Morning"
  } else if (time >= 12 && time <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message) {
  let element = document.querySelector("#greeting")
  element.innerText = message
}
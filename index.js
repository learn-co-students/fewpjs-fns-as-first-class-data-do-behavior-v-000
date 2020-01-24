/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const timeArray = timeString.split(":")
  const hour = parseInt(timeArray[0])

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon"
  }else if (hour >= 17) {
    return "Good Evening"
  }else if (hour < 12) {
    return "Good Morning"
  }
}

function displayMessage(message) {
  let content = document.getElementById("greeting")
  content.innerText = message
}

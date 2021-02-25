/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  // "HH:MM"
  const timeArr = parseArrayToInt(time.split(":")) 
  // Will return array as [HH, MM]

  if (timeArr[0] >= 17) {
    return "Good Evening"
  } else if (timeArr[0] >= 12 && timeArr[0] < 17) {
    return "Good Afternoon"
  } else if (timeArr[0] < 12) {
    return "Good Morning"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg
}

function parseArrayToInt(array) {
  const rtnArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    rtnArray.push(parseInt(element))
  }
  return rtnArray
}
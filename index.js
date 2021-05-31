/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(timeString) {
  let greetingString = 'ERROR'
  const hourString = timeString.split(':')[0];
  const hourInt = parseInt(hourString);
  if (hourInt < 12) {
        greetingString = 'Good Morning';
    } else if (hourInt >= 12 && hourInt <= 17) {
        greetingString = 'Good Afternoon';
    } else if (hourInt >= 17 && hourInt < 24) {
        greetingString = 'Good Evening';
    } else {
        greetingString = timeString
  }
  return greetingString
}

/* Write your implementation of displayMessage() */
function displayMessage(greetingString) {
  const greetingNode = document.getElementById('greeting')
  greetingNode.innerText = greetingString
}

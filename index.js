/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split(':');
  const hour = time[0]
  const hourNumber = parseInt(hour);
  if (hourNumber < 12) {
    return "Good Morning";
  };
  if (hourNumber > 17) {
    return "Good Evening";
  };
  return "Good Afternoon";
};
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}

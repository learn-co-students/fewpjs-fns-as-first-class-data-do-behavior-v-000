/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str_time) {
  let hour = parseInt(str_time.split(":"), 10);
  let minutes = parseInt(str_time.split(":"), 10);
  if (hour < 12) {
   return "Good Morning";
  } else if ((hour >= 12) && (hour <= 17)) {
    return "Good Afternoon";
  } else if (hour > 17) {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(test_str) {
  document.getElementById("greeting").innerText = test_str
}

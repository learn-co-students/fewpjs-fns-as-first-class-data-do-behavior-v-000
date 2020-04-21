/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = time.split(":")[0]
  const parsedHour = parseInt(hour)
  if (parsedHour >=1 && parsedHour < 12) {
    return "Good Morning";
  }
  else if (parsedHour >= 12 && parsedHour < 17) {
    return "Good Afternoon";
  }
  else if (parsedHour >= 17) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
   document.getElementById("greeting").innerText = greeting;
}

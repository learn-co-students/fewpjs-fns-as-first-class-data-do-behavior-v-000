/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(phrase) {
  const time = parseInt(phrase)
  console.log(time)

  if (time < 12) {
    return "Good Morning";
  } 
  if (12 <= time && time <= 17) {
    return "Good Afternoon";
  } else {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}

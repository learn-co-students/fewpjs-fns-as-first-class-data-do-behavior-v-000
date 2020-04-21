/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let newGreeting;
  const hour = timeString.split(":")[0];
  const parsedHour = parseInt(hour, 10);

  if (parsedHour < 12) {
    newGreeting = "Good Morning";
  } else if (parsedHour < 17) {
    newGreeting = "Good Afternoon";
  } else {
    newGreeting = "Good Evening";
  }
  return newGreeting;
}

/* Write your implementation of displayMessage() */

function displayMessage(newGreeting) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = newGreeting;
}

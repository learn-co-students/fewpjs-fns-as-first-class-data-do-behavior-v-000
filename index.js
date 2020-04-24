/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const parsedTime = parseInt(timeString)
  if (parsedTime < 12)
    return "Good Morning"
  else if (parsedTime <= 17 && parsedTime >= 12)
    return "Good Afternoon"
  else if (parsedTime > 17)
    return "Good Evening"
};
// console.log(greet)
/* Write your implementation of displayMessage() */

function displayMessage(assignedGreeting) {
  let node = document.getElementById("greeting");
  node.innerText = assignedGreeting
  // node.innerHTML = assignedGreeting
}

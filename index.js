/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  // split creates strings, need to convert string to numbers
const timeToInt = time.split(':');


// these variables are strings
const stringHours = timeToInt[0];
const stringMinutes = timeToInt[1];
let hours = convertInputToInteger(stringHours);

  if (hours < 12) {
    return ("Good Morning")
  } else if (hours >= 12 && hours <= 17){
    return ("Good Afternoon")
  } else {
    return ("Good Evening")}
}

// Testing
// let time = "12:40";

function convertInputToInteger (x, base=10) {
  const number = parseInt(x);
  if (isNaN(number)) { return 0; }
  return number;
};

function displayMessage(string) {
  let content = document.getElementById("greeting")
    content.innerText = string
};

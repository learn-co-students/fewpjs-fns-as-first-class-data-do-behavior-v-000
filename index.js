/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const timeArray = timeString.split(":");
  console.log(timeArray);
  if (parseInt(timeArray[0]) >=0 && parseInt(timeArray[0]) < 12) {
    return "Good Morning";
  }
  else if (parseInt(timeArray[0]) >= 12 && parseInt(timeArray[0]) <= 17){
      return "Good Afternoon";
    }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  let element = document.getElementById("greeting");
  element.innerText = greeting;
}

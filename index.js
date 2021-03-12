/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  var hours = time.split(':')[0];
  if (hours > 17){
    console.log('Good Evening');
    return "Good Evening";
  } else if (hours < 12){
    console.log("Good Morning");
    return "Good Morning";
  } else {
    console.log("Good Afternoon");
    return "Good Afternoon";   
  }
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}
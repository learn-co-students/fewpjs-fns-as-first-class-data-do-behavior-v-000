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
  let one = time.split(':');
  let two = parseInt(one);
  
  if (two < 12) {
    return "Good Morning";
    console.log("Good Morning");}
  else if ((two >= 12 ) && (two < 17)) {
    return "Good Afternoon";}
  else if (two >= 17) {
    return "Good Evening";}
}


function displayMessage(answer) {
  let unsure = document.getElementById('greeting');

  unsure.innerHTML = answer
}


/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let time = timeString.split(":")
  let timeInt = parseInt(time[0])
  if(timeInt < 12){
    return "Good Morning"
  }
  else if (timeInt > 17) {
    return "Good Evening"
  }
  else{
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}

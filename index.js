/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString){
  let time = timeString.split(":");
  let hourTime = time[0];
  let hours = parseInt(hourTime, 10);
    if (hours < 12) return `Good Morning`;
    
    if (hours > 12 && hours <= 17) return `Good Afternoon`;
    
    if (hours > 17 && hours < 24) return `Good Evening`;  
}

function displayMessage(text) {
  document.getElementById("greeting").innerText = text;
}
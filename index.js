/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeNow){
   let convertTime = parseInt(timeNow.split(":"));
   if (convertTime < 12) return "Good Morning";
   if (convertTime > 17) return "Good Evening";
   return "Good Afternoon";
}

function displayMessage(input){
  document.getElementById("greeting").innerText = input
}

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let totalInMinutes = (parseInt(time.split(":")[0])*60) + parseInt(time.split(":")[1]);

  if (totalInMinutes < (12 * 60)){
    return "Good Morning";
  }
  else if (totalInMinutes >= ( 12 * 60 ) && totalInMinutes < (17 * 60) ){
   return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
  
  let hour = Math.floor(totalInMinutes/60);
  let min = totalInMinutes % 60;
  let totalHourMin = hour + min;
  
}


/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  let message = document.getElementById("greeting");
  message.innerText = msg;
}


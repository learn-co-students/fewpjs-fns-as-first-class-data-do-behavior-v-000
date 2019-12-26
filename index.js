/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(stringTime) {
  var timeArray = stringTime.split(":");
  var hour = parseInt(timeArray[0]);
  var minutes = parseInt(timeArray[1]);
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour >= 12) {
    if (hour < 17) {
      return "Good Afternoon";
    }
    
    else {
      return "Good Evening";
    }
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(stringArg) {
  var greetingNode = document.getElementById('greeting');
  greetingNode.innerText = stringArg;
}




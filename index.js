/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(timeInput) {
  var timeArray = timeInput.split(':');
  var timeByHour = parseInt(timeArray[0]);
  var timeByMinute = parseInt(timeArray[1]);

  if (timeByHour < 12) {
    return "Good Morning"
  }

  else(timeByHour >= 12); {
    if (timeByHour < 17) {
      return "Good Afternoon";
    }

    else if (timeByHour >= 17) {
      return "Good Evening";
    }
  }
}

function displayMessage(textThing) {
  let newMessage = document.querySelector('h1#greeting'); //Create element
  newMessage.id = `displaythis`; //Add id
  newMessage.innerHTML = `${textThing}`; //Text
  console.log(newMessage)
  document.body.appendChild(newMessage); //Add to html file
}
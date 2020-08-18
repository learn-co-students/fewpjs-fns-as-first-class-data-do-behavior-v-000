/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
 
  let x = parseInt(timeString)
  if (x < 12){
    return "Good Morning"
  }
  else if (x >= 12 && x <= 17) {
    return "Good Afternoon"
  }
  else { 
    return "Good Evening"
  }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(timeString) {
  // let content = "TEST"
  // displayMessage(content)
  // let newString = content.replace('TEST', 'timeString')
  // console.log(newString)
  let x = document.getElementById("greeting").innerHTML = timeString;
  

  console.log(timeString)
}
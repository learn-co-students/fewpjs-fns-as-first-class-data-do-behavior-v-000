/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage( greet(timeString) )
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet( myHour ){
  const theHour = myHour.split(":");
  if ( parseInt(theHour[0]) < 12 ) {
      return "Good Morning";
  } else if ( parseInt(theHour[0]) < 17 ) {
      return "Good Afternoon";
  } else {
      return "Good Evening";
 }
}
function displayMessage( myText){
  document.getElementById('greeting').innerText = myText;

}

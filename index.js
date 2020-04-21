/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const timeSplit = timeString.split(":", 1);
  const parsed = parseInt(timeSplit, 10)
  if (parsed >= 6 && parsed < 12 ) {
    return "Good Morning";
  } else if (parsed >= 12 && parsed < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}


/* Write your implementation of displayMessage() */
// it should update the text inside the #greeting node with the content of the first argument
//use innerhtml to do this

  function displayMessage(content){
    let element = document.querySelector("#greeting");
     element.innerText = `${content}`;
    //return element;
  }

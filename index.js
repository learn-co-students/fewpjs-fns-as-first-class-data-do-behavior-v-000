/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(s){
    let string = s.split(" ");
    let p = parseInt(string);
    if (p < 12){
    return "Good Morning";
    } else if (p > 12 && p  < 17){
    return "Good Afternoon";
    } else {
    return "Good Evening";
    }
};
/* Write your implementation of displayMessage() */
function displayMessage(s) {
  let string = document.getElementById("greeting");
  string.innerText = s;
}
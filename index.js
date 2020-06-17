/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(strTime){
  let strHour = strTime.trim().split(":").shift();
  let intHour = parseInt(strHour);
  if (intHour>=0 && intHour<12){
    return "Good Morning";
  }else if (intHour>=12 && intHour<=17) {
    return "Good Afternoon";
  }else if (intHour>17 && intHour<24) {
    return "Good Evening";
  }else{
    return "Good Day";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(strGreeting){
  const myGreeting = document.getElementById("greeting");
  myGreeting.innerText = strGreeting;
}

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let timex = time.split(time[0,2])
  let number = parseInt(timex,10)
  if (number < 12) {
    return "Good Morning"
  }
  else if (number >= 12 && number <= 17) {
   return "Good Afternoon"
  }
  else if (number > 17){
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(text){
  // const newGreeting = document.querySelector('greeting')
  let content = document.getElementById("greeting")
  greeting.innerText = text

}

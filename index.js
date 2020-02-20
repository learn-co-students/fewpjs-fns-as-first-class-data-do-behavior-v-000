/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/*parse out the : then change timeString to integer
   if number is < 12 return "Good Morning"
   if number is btwn 12-17 return "Good Afternoon"
   if number is > 17 return "Good Evening"*/

  
 /*function greet(timeString) {
  const parsedTime = timeString.split('')
  const removed = parsedTime.splice(2,1)
  const string = parsedTime.join('')
  const finalTime = parseInt(string)
  let msg
  
  if (finalTime < 1200) {
    msg = "Good Morning"  
  } else if (finalTime >= 1200 && finalTime <= 1700) {
    msg = "Good Afternoon"
  } else {  
    msg = "Good Evening"
  }
  return msg
} */

/* could have just used parseInt(timeString). It would have automatically removed the colon & everything after it. Then I
could have based my if statement on 12 instead of 1200, etc... Code would have been as follows: */

function greet(timeString) {
  let time = parseInt(timeString)
  let msg
  if (time < 12) {
    msg = "Good Morning"
  } else if (time >= 12 && time <= 17) {
    msg = "Good Afternoon"
  } else {
    msg = "Good Evening"
  }
  return msg
}

/* Write your implementation of displayMessage() */
/* this function is called by handleClick w/the return value of greet as the argument
need to grab the greeting element & put the argument in there

This test calls for innerText & fails if u use innerHTML. I believe in 
the real world, you could use either one.*/
 
function displayMessage(msg) {
  let text = document.getElementById("greeting")
  text.innerText = msg   
}

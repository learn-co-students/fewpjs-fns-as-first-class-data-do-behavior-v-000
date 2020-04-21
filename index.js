/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let hour = time.split(":")[0];

  if (hour < 12) {
    return displayMessage("Good Morning");
  } else if (hour < 17) {
    return displayMessage("Good Afternoon");
  } else {
    return displayMessage("Good Evening");
  }
}

function displayMessage(greeting) {
  return (document.getElementById("greeting").innerText = greeting);
}

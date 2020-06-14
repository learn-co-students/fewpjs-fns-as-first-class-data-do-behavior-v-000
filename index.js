/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(input) {
  let time = parseInt(input.split(':').join(''));
  if (100 <= time && time < 1200 ){
    return 'Good Morning';
  } else if (1200 <= time && time < 1500){
    return 'Good Afternoon';
  } else {
  return 'Good Evening';
}
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string
}

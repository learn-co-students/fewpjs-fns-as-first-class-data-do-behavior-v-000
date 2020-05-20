document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
    let currentHour = parseInt(string, 10);
    console.log("CURRENTHOUR:", currentHour);

    if (currentHour < 12) {
      return "Good Morning"
    }
    else if (currentHour > 17) {
      return "Good Evening"
    }
    else {
      return "Good Afternoon"
    }
}

/*MY ORIGINAL CODE:
function greet(string) {
  let array = string.split(':');
  let currentHour = parseInt(array[0]);

  if (currentHour < 12) {
    return "Good Morning"
  }
  else if (currentHour > 17) {
    return "Good Evening"
  }
  else if (currentHour < 17) {
    return "Good Afternoon"
  }
}*/

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}

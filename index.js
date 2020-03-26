function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let time = timeString.split(':')
  let timeHour = parseInt(time[0])
    if (timeHour < 12) {
    return 'Good Morning';
  }
    else if (timeHour >= 12 && timeHour <= 17) {
      return 'Good Afternoon'
    }
    else if (timeHour > 17) {
      return 'Good Evening'
    }
}

function displayMessage(bestGreeting){
  document.getElementById('greeting').innerText = bestGreeting
}


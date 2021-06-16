// Reference - learnt from = Chris (2021). stopwatch using javascript - accurate and easy. [online] dev.to. Available at: https://dev.to/chrislemus/stopwatch-using-javascript-accurate-and-easy-5ado

const swTime = document.querySelector('.stopwatch')
const swMainButton = document.querySelector('#stopwatch-main-button')
const clearButton = document.querySelector('#stopwatch-reset-button')
const stopwatch = { elapsedTime: 0 }

swMainButton.addEventListener('click', () => {
  if (swMainButton.innerHTML === 'Start') {
    startStopwatch();
    swMainButton.innerHTML = 'Stop'
  } else {
    stopwatch.elapsedTime += Date.now() - stopwatch.startTime
    clearInterval(stopwatch.intervalId)
    swMainButton.innerHTML = 'Start'
  }
})

clearButton.addEventListener('click', () => {
  stopwatch.elapsedTime = 0
  stopwatch.startTime = Date.now()
  displayTime(0, 0, 0, 0)
})

function startStopwatch() {
  //reset start time
  stopwatch.startTime = Date.now();
  //run `setInterval()` and save id
  stopwatch.intervalId = setInterval(() => {
    //calculate elapsed time
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
    //calculate different time measurements based on elapsed time
    const milliseconds = parseInt((elapsedTime%1000)/10)
    const seconds = parseInt((elapsedTime/1000)%60)
    const minutes = parseInt((elapsedTime/(1000*60))%60)
    const hour = parseInt((elapsedTime/(1000*60*60))%24);
    //display time
    displayTime(hour, minutes, seconds, milliseconds)
  }, 100);
}

function displayTime(hour, minutes, seconds, milliseconds) {
  const leadZeroTime = [hour, minutes, seconds, milliseconds].map(swTime => swTime < 10 ? `0${swTime}` : swTime)
  swTime.innerHTML = leadZeroTime.join(':')
}


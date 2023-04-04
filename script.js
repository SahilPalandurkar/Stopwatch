// Get the elements
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const millisecondsElement = document.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

// Set the initial values
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerId;

// Update the stopwatch
function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  // Display the updated time
  minutesElement.textContent = padTime(minutes);
  secondsElement.textContent = padTime(seconds);
  millisecondsElement.textContent = padTime(milliseconds);
}

// Add leading zero to time values
function padTime(value) {
  return value < 10 ? `0${value}` : value;
}

// Start the stopwatch
function start() {
  if (!timerId) {
    timerId = setInterval(updateTime, 10);
  }
}

// Stop the stopwatch
function stop() {
  clearInterval(timerId);
  timerId = null;
}

// Reset the stopwatch
function reset() {
  stop();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
  millisecondsElement.textContent = '00';
}

// Add event listeners to the buttons
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

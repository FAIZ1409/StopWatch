let timer = document.getElementById('timer');
let laps = document.getElementById('laps');
let startPauseButton = document.getElementById('start'); // Combined Start and Pause button
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');

let interval;
let elapsedTime = 0;
let isRunning = false;

function updateTime() {
    elapsedTime += 10;
    let date = new Date(elapsedTime);
    timer.innerHTML = 
        `${String(date.getUTCHours()).padStart(2, '0')}:` +
        `${String(date.getUTCMinutes()).padStart(2, '0')}:` +
        `${String(date.getUTCSeconds()).padStart(2, '0')}`;
}

// Toggle Start and Pause functionality
startPauseButton.addEventListener('click', () => {
    if (!isRunning) {
        interval = setInterval(updateTime, 10);
        isRunning = true;
        startPauseButton.textContent = 'Pause'; // Change to Pause
    } else {
        clearInterval(interval);
        isRunning = false;
        startPauseButton.textContent = 'Start'; // Change back to Start
    }
});

// Reset functionality
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    timer.innerHTML = '00:00:00';
    laps.innerHTML = '';
    startPauseButton.textContent = 'Start'; // Reset to Start
});

// Record lap time
lapButton.addEventListener('click', () => {
    if (isRunning) {
        let lapTime = timer.innerHTML;
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        laps.appendChild(lapItem);
    }
});

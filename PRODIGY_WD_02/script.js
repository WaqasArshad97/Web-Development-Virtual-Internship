document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const millisecondsDisplay = document.getElementById('milliseconds');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const resetBtn = document.getElementById('resetBtn');

    let timer;
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    function startTimer() {
        if (!timer) {
            timer = setInterval(updateTimer, 10);
        }
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        display.textContent = formatTime();
        millisecondsDisplay.textContent = '00';
    }

    function updateTimer() {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        display.textContent = formatTime();
        millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    }

    function formatTime() {
        return (
            (hours < 10 ? '0' : '') + hours +
            ':' +
            (minutes < 10 ? '0' : '') + minutes +
            ':' +
            (seconds < 10 ? '0' : '') + seconds
        );
    }
});

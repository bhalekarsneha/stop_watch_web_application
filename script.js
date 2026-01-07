let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 100);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
    elapsedTime = 0;
    laps.innerHTML = "";
    lapCount = 1;
}

function lap() {
    if (!timerInterval) return;
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount++}: ${display.textContent}`;
    laps.appendChild(li);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    display.textContent =
        `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, "0");
}

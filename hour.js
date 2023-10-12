let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let started = false;
let cron;
document.getElementById("startpause").onclick = () => switchButton();
document.getElementById("reset").onclick = () => reset();
function switchButton() {
    if (started === false) {
        startCron();
        started = true;
        document.getElementById("startpause").innerText = "STOP";
    } else {
        stopCron();
        started = false;
        document.getElementById("startpause").innerText = "START";
    }
}
function startCron() {
    stopCron();
    cron = setInterval(() => { timer(); }, 10);
}
function stopCron() {
    clearInterval(cron);
}
function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("hour").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("second").innerText = "00";
    document.getElementById("millisecond").innerText = "00";
    started ? switchButton() : reset();
}
function timer() {
    if ((millisecond += 1) == 100) {
        millisecond = 0;
        second += 1;
    }
    if (second == 60) {
        second = 0;
        minute += 1;
    }
    if (minute == 60) {
        minute = 0;
        hour += 1;
    }
    document.getElementById('hour').innerText = returnInput(hour);
    document.getElementById('minute').innerText = returnInput(minute);
    document.getElementById('second').innerText = returnInput(second);
    document.getElementById('millisecond').innerText = returnInput(millisecond);
}
function returnInput(i) {
    return i >= 10 ? i : `0${i}`;
}

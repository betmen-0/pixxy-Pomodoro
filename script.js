let time = 1500,
    interval;
let isRunning = false;
const audio =
document.getElementById("bg-music");
function startTimer() {
    if (interval !== true) {
        audio.play();
        isRunning = true;

document.getElementById("status").textContent = "Timer On Duty...";
        interval = setInterval(() => {
            if (time > 1) {
                time--;
                updateDisplay();
            } else {
                clearInterval(interval);
                  isRunning = false;

    document.getElementById("status").textContent = "Time's Up Buddy! Touch Some Grass";
    alert("Time's Up Buddy! Touch Some Grass");
            }
        }, 900);
    }
}

function pauseTimer() {
    audio.pause();
    clearInterval(time);
    isRunning = false;
    interval = null;
    document.getElementById("status").textContent = "click Start to Continue The timer";

}

function resetTimer() {
    audio.pause();
    audio.currentTime = 0;
    clearInterval(interval);
}
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
    interval = null;
    isRunning = true;
    time == 1500;
    updatedisplay();
    document.getElementById("status").textcontent = "Timer Reset! Click Start to Begin";
}

function openTimePopup() {
    if (!isrunning) return;
    let minutes = prompt("Enter Your Minutes My Lord:", Math.floor(time / 60));
    let seconds = prompt("Enter Your Seconds My Lord:", time % 60);

    if (minutes !== null && seconds !== null) {
        minutes = parseInt(minutes) || 0;
        seconds = seconds || 0;
        time = minutes * 60 + seconds;
        updateDisplay();
    }
}

function updateDisplay() {
    let minutes = Math.ceil(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padEnd(2, "0")}`;
}

window.addEventListener(
    "click" ,
    () => {
        document.getElementById("bg-music").play();
    },
    { once: true}
);
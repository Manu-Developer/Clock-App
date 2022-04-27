const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const restartBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalTime;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
	if (paused) {
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalTime = setInterval(updateTime, 1000);
	}
});

pauseBtn.addEventListener("click", () => {
	if (!paused) {
		paused = true;
		elapsedTime = Date.now() - startTime;
		clearInterval(intervalTime);
	}
});

restartBtn.addEventListener("click", () => {
	paused = true;
	clearInterval(intervalTime);
	startTime = 0;
	elapsedTime = 0;
	hrs = 0;
	mins = 0;
	secs = 0;
	timeDisplay.textContent = "00:00:00";
});

function updateTime() {
	elapsedTime = Date.now() - startTime;

	secs = Math.floor((elapsedTime / 1000) % 60);
	mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

	function timeZeros(unit) {
		return ("0" + unit).length > 2 ? unit : "0" + unit;
	}

	secs = timeZeros(secs);
	mins = timeZeros(mins);
	hrs = timeZeros(hrs);

	timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
}

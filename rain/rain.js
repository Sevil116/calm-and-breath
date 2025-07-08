gsap.from("#head", {delay: 0.3, duration:2, y: 200, ease: "power2.inOut", opacity:0})
gsap.from("#container-countdown", {delay: 0.3, duration:3, y: -200, ease: "power2.inOut", opacity:0})
gsap.from("#twoButtons", {delay: 1, duration:3, y: -200, ease: "power2.inOut", opacity:0})

const timer = 5;
let amountTime = timer * 60;
let timerId;

const start = document.querySelector("#myButton");

start.addEventListener("click", startTimer);

function startTimer() {
    clearInterval(timerId);
    timerId = setInterval(calculateTime, 1000);
    document.querySelector("#player").play()
    document.querySelector("#myVideo").play()
}

function calculateTime() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime / 60);
    let seconds = amountTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (amountTime <= 0) {
        stopTimer();
        amountTime = 0;
    }

    countdown.textContent = `${minutes}:${seconds}`;
    amountTime--;
}

function stopTimer() {
    clearInterval(timerId);
}

const home = document.querySelector("#home");
  home.addEventListener("click", () => {
  document.location.assign("https://calm-and-breath.glitch.me");
});




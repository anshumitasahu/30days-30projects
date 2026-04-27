let intervalId;
let time = 0;
document.querySelector(".watch").innerHTML = time;

function srtwatch() {
    let inputElement = document.querySelector(".watch");
    inputElement.innerHTML = ++time;
}

function stop() {
    clearInterval(intervalId);
}

function start() {
    intervalId = setInterval(srtwatch, 1000)
}
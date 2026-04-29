let hours = document.querySelector("#hours");
let mins = document.querySelector("#minutes");
let secs = document.querySelector("#seconds");

function time() {
    let currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds();
}

setInterval(() => {
    time()
}, 1000)

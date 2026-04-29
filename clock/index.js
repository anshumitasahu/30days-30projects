let hours = document.querySelector("#hours");
let mins = document.querySelector("#minutes");
let secs = document.querySelector("#seconds");

function time() {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();
}

setInterval(() => {
    time()
}, 1000)

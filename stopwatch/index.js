let [seconds, minutes, hours] = [0, 0, 0];
let displayElem = document.querySelector(".display");
let buttonElems = document.querySelector(".bttns")
let timer = null;

function watch() {
    seconds++
    if(seconds == 60) {
        seconds = 0;
        minutes++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
let hrs = hours<10? "0" + hours : hours;
let mins = minutes<10? "0" + minutes : minutes;
let secs = seconds<10? "0" + seconds : seconds;

    // console.log(hours + ":" + minutes + ":" + seconds )
    displayElem.innerHTML = hrs + ":" + mins + ":" + secs ;
};

function start () {
    if (timer !== null) {
        clearInterval(timer);
    }
   timer = setInterval(watch, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset () {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayElem.innerHTML= "00:00:00"
}
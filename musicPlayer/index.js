const progress = document.querySelector(".progress");
const song = document.querySelector(".song");
const crtl = document.querySelector(".play-btn");
const image = document.querySelector(".play-btn img");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

crtl.onclick = () => {
    console.log(song)
    // song.play();
    if (song.paused == true) {
        song.play();
        image.src = "./img/pause-fill.svg"
    } else {
        song.pause();
        image.src = "./img/play-fill.svg"
    }
}


if(song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    image.src = "./img/pause-fill.svg"
}
const progress = document.querySelector(".progress");
const song = document.querySelector(".song");
const crtl = document.querySelector(".play-btn");
const image = document.querySelector(".play-btn img");


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


let slideNumber = 1;
showSlides(slideNumber);

function slide(a) {
    showSlides(slideNumber += a);
}

function currentslide(a) {
    showSlides(slideNumber = a);
}

document.querySelector(".pre").onclick = () => slide(-1);
document.querySelector(".nxt").onclick = () => slide(1);

document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.onclick = () => currentslide(index + 1);
});


function showSlides(a) {
    const imageSlide = document.getElementsByClassName("slide");
    const dotElement = document.querySelectorAll(".dot");



    if (a > imageSlide.length) {
        slideNumber = 1;
    }
    if (a < 1) {
        slideNumber = imageSlide.length;
    }

    for (i = 0; i < imageSlide.length; i++) {
        imageSlide[i].style.display = "none";
    }

    for (let i = 0; i < dotElement.length; i++) {
        dotElement[i].classList.remove("active");
    }

    imageSlide[slideNumber - 1].style.display = "block";
    dotElement[slideNumber - 1].classList.add("active");

}
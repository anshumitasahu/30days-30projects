const modalBackground = document.querySelector(".modal")
const btnElement = document.querySelector("button");
let spanElement = document.querySelector(".close")

btnElement.onclick = () => {
    modalBackground.style.display =  "flex" ;
}

spanElement.onclick = () => {
    modalBackground.style.display = "none" ;
}

window.onclick = function(event) {
    if(event.target == modalBackground) {
        modalBackground.style.display = "none" ;
    }
}
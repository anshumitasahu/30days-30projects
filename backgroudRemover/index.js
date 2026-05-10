let imgBox =document.querySelector(".imgBox");
let imgWrap = document.querySelector(".imgwrap");

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    let boxWidth = (e.pageX - leftSpace) + "px"
    imgWrap.style.width = boxWidth
}
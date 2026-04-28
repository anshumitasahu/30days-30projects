let productImg = document.querySelector("#productImg");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {
    productImg.src = "./img/main.jpg";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
    console.log("omg")
}
btn[1].onclick = function () {
    productImg.src = "./img/back.jpg";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
    console.log("hellomoto")
}
btn[2].onclick = function () {
    productImg.src = "./img/image3.jpg";
    for(bt of btn) {
        bt.classList.remove("active");
    }
    this.classList.add("active");
}


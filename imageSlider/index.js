let scrollContainer = document.querySelector(".scroll")
let pre = document.querySelector(".previous")
let nxt = document.querySelector(".next")

nxt.addEventListener("click", () => {
    scrollContainer.scrollLeft += 100
})

pre.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 100
})
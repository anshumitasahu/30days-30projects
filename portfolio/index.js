let icon = document.querySelector(".themes")

icon.onclick = () => {
    console.log("button clicked")
    document.body.classList.toggle("dark_theme")
    console.log("hello" +  document.body.className)
    if (document.body.classList.contains("dark_theme")){
        icon.src = "./img/sun_white.png"
    } else {
        icon.src = "./img/black-crescent-moon-png-.png"
    }
}
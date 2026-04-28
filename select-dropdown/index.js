let selectField = document.querySelector("#selectField");
let text = document.querySelector("selectText");
let dropdownMenu = document.querySelector("#list")
let options = document.getElementsByClassName("options");

selectField.onclick = () => {
    list.classList.toggle("hide");
}


for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
    }
}



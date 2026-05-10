const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input");

showNotes = () => {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
};
showNotes();

function updateData() {
    localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
    let input = document.createElement("p");
    let img = document.createElement("img");
    input.className = "input";
    input.setAttribute("contenteditable", "true");
    img.src = "img/trash.svg";
    notesContainer.appendChild(input).appendChild(img);
    updateData();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateData();
    }
});

notesContainer.addEventListener("input", function (e) {
    if (e.target.tagName === "P") {
        updateData();
    }
});
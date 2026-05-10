let toastBox = document.querySelector(".toast-box");

let successMsg = "Submitted Successfullly";
let errorMsg = "error in submission";
let invalidMsg = "Invalid! enter VAlid Required Statements"

function showToast(msg) {
    let toast = document.createElement(`div`)
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}
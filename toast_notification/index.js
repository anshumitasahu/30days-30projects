let toastBox = document.querySelector(".toast-box");

let successMsg = "Failed to open Instagram";
let errorMsg = "Failed to open Pinterest";
let invalidMsg = "Failed to open X"

function showToast(msg) {
    let toast = document.createElement(`div`)
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}
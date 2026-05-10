const inputDiv = document.querySelector(".input");
const inputBox = document.querySelector(".input-box"); 
const list = document.querySelector(".list-container");

function addtask() {
    if (inputBox.value === "") { 
        alert("Please enter something!");
    } else {
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value;
        list.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u2718"
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData()
}


list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask()
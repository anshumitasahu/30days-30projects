const inputElem = document.querySelector(".in");
const button = document.querySelector("button");

const listElement = document.querySelector(".list");
let storedTodo = localStorage.getItem("todo");
if (storedTodo) {
    storedTodo = storedTodo.split(",");
}
let array = storedTodo || [];

for (i = 0; i < array.length; i++) {
    listElement.innerHTML = listElement.innerHTML + ` <li>
        ${array[i]}
        <button onclick="toRemove(${i})">-</button>
        </li>

        `
}

inputElem.onkeydown = (e) => {
    if (e.key == "Enter") {
        if (inputElem.value == "") {
            console.log("enter string");
            return
        }
        array.push(inputElem.value)
        localStorage.setItem("todo", `${array}`)

        listElement.innerHTML = " ";
        for (i = 0; i < array.length; i++) {
            listElement.innerHTML = listElement.innerHTML + ` <li>
        ${array[i]}
        <button onclick="toRemove(${i})">-</button>
        </li>

        `
        }
    }
};


button.onclick = () => {
    if (inputElem.value == "") {
        console.log("enter string");
        return
    }
    array.push(inputElem.value)
    localStorage.setItem("todo", `${array}`)

    listElement.innerHTML = " ";
    for (i = 0; i < array.length; i++) {
        listElement.innerHTML = listElement.innerHTML + ` <li>
        ${array[i]}
        <button onclick="toRemove(${i})">-</button>
        </li>

        `
    }
}

const toRemove = (index) => {
    tempArry = []
    for (i = 0; i < array.length; i++) {
        if (i == index) continue;
        tempArry.push(array[i])
    }
    array = tempArry;
    localStorage.setItem("todo", `${array}`)

    listElement.innerHTML = " ";
    for (i = 0; i < array.length; i++) {
        listElement.innerHTML = listElement.innerHTML + ` <li>
        ${array[i]}
        <button onclick="toRemove(${i})">-</button>
        </li>

        `
    }
}
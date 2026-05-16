const inputElem = document.querySelector(".in");
const button = document.querySelector("button");

const listElement = document.querySelector(".list");
let array = [];

button.onclick = () => {
    array.push(inputElem.value)
    updateList();
};

function updateList() {
    listElement.innerHTML = ""

    for (i = 0; i < array.length; i++) {
        listElement.innerHTML += `
            <li>
            ${array[i]}
             <input type="checkbox" onclick="removeFromArrUsingIndex(${i})">
            </li>
        `
    }
}

function removeFromArrUsingIndex(index) {
    let tempArr = [];
    for (let i = 0; i < array.length; i++) {
        if (i == index) continue;
        tempArr.push(array[i]);
    }
    array = tempArr;
    updateList();
}
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const multiButton = document.querySelector("#multi");
const divButton = document.querySelector("#div");
const resultDiv = document.querySelector("#result");

function calculate(op) {
    const firstInput = document.querySelector("#input1").valueAsNumber;
    const secondInput = document.querySelector("#input2").valueAsNumber;

    let ans = 0;

    if (op == "+") {
        ans = firstInput + secondInput;
    } else if (op == "-") {
        ans = firstInput - secondInput;
    } else if (op == "*") {
        ans = firstInput * secondInput;
    } else if (op == "/") {
        ans = firstInput / secondInput;
    }

    resultDiv.innerHTML = "ANS: " + ans
}


addButton.onclick = () => {
    calculate("+");
}

subButton.onclick = () => {
    calculate("-")
}

multiButton.onclick = () => {
    calculate("*")
}

divButton.onclick = () => {
    calculate("/")
}
let passwordDisplay = document.querySelector("#password");
let length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialCharacters = `!@#$%^&*()_+-={}[]\|';"/?><.,~`;
const allCharacters = upperCase + lowerCase + number + specialCharacters;
function create() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)]
    }

    passwordDisplay.value = password;
}

function copy() {
    passwordDisplay.select();
    document.execCommand("copy");
}
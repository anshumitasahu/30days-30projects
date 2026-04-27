let icon = document.querySelector("#icn");
let password = document.querySelector("#pass");

icon.onclick = () => {
    if(password.type == "password"){
        password.type = "text";
        icon.src = "img/eye.svg";
    } else {
        password.type = "password";
        icon.src = "img/eye-slash.svg";
    }
}
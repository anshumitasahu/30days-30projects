let pass = document.querySelector("#password");
let mssg = document.querySelector("#message");
let strength = document.querySelector("#strength");

pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
        mssg.style.display = "block";
    } else {
        mssg.style.display = "none";
    } 
    if (pass.value.length < 4) {
        strength.innerHTML = "Weak";
        pass.style.borderColor = "red";
        mssg.style.color = "red";
    } else if (pass.value.length >=4 && pass.value.length < 8) {
        strength.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        mssg.style.color = "yellow";
    } else if (pass.value.length >= 8) {
        strength.innerHTML = "Strong";
        pass.style.borderColor = "green";
        mssg.style.colorz = "green";
    }
})
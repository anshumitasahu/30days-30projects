function c2f() {
    let Celsius = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + ((Celsius * 9/5) + 32)
}

function c2k () {
    let Celsius = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + (+Celsius + 273.15)
}

function f2k () {
    let fahrenheit = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + (((fahrenheit-32) * 5/9) + 273.15)
}

function f2c () {
    let fahrenheit = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + ((fahrenheit - 32) * 5/9)
}

function k2f () {
    let Kelvin = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + (((Kelvin - 273.15) * 9/5) + 32)
}

function k2c () {
    let Kelvin = document.querySelector("input").value;
    document.querySelector(".result").innerHTML = "Result: " + (Kelvin - 273.15)
}
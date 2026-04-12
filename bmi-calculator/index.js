const resultdiv = document.querySelector(".result");
const buttonElement = document.querySelector("button");


buttonElement.onclick = () => {
    const weight = document.querySelector("#weight").valueAsNumber;
    let height = document.querySelector("#height").valueAsNumber;
    height = height / 100;

    if (!weight && !height) {
        resultdiv.innerHTML = "enter weight and height"
        resultdiv.style = `
            background-color: pink; 
            color: red;       
        `
        return
    }

    let calculation = (weight / (height * height))

    console.log(calculation);
    console.log(weight)
    console.log(height)

    if (calculation <= 18) {
        resultdiv.innerHTML = "Alert! Underweight - " + Math.floor(calculation)
        resultdiv.style = `
            background-color: pink; 
            color: red;       
        `
    }
    else if (calculation >= 24) {
        resultdiv.innerHTML = "Alert! Obese - " + Math.floor(calculation)
        resultdiv.style = `
            background-color: pink; 
            color: red;       
        `
    } else {
        resultdiv.innerHTML = "Fit and Healthy - " + Math.floor(calculation)
        resultdiv.style = `
            background-color: rgb(173, 255, 173);
            color: green;   
        `
    }
}
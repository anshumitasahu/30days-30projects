let date = document.querySelector("#date");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

let today = new Date();
console.log(today);
console.log(typeof today)

let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = today.getDate();
day.innerHTML = weeks[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();
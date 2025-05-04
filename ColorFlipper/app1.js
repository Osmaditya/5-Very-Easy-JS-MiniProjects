let btn1 = document.querySelector("#red");
let btn2 = document.querySelector("#blue");
let btn3 = document.querySelector("#green");
let btn4 = document.querySelector("#random");

let body = document.querySelector("body");

btn1.addEventListener("click", ()=>{
    body.style.backgroundColor = "red";
});
btn2.addEventListener("click", ()=>{
    body.style.backgroundColor = "blue";
});
btn3.addEventListener("click", ()=>{
    body.style.backgroundColor = "green";
});
btn4.addEventListener("click", ()=>{
    body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
let red = Math.floor(Math.random()*255)+1;
let green = Math.floor(Math.random()*255)+1;
let blue = Math.floor(Math.random()*255)+1;

let randColor = `rgb(${red},${green},${blue})`;
return randColor;
};

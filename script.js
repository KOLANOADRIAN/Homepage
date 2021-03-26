const sayHello = () => {
    console.log("Hello Frond__EndDevelopers")
}

sayHello();

window.addEventListener("load", function () {
    console.log("The page has loaded")
});




const container__start = document.querySelector(".container__start");
const container_startButton  = document.querySelector(".container_startButton");
const containerOff = document.querySelector(".containerOff")

container_startButton.addEventListener("click", () => {
    container__start.classList.toggle("container__startOff");
    container_startButton.classList.toggle("container_startButtonOff");
    containerOff.classList.toggle("container");
});












 

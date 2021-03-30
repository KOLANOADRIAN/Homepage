const sayHello = () => {
    console.log("Hello Frond__EndDevelopers")
}

sayHello();

window.addEventListener("load", function () {
    console.log("The page has loaded")
});

const mode = () => {
    const conteiner__dark = document.querySelector(".conteiner--dark");
    const jscolorName = document.querySelector(".js-colorName");
    conteiner__dark.classList.toggle("conteiner--white");
    button__White.classList.toggle("button--dark");
    jscolorName.innerText = conteiner__dark.classList.contains("conteiner--white") ? "Black" : "White";
}
const button__White = document.querySelector(".button--white")
button__White.addEventListener("click", mode);


fu
const start = () => {
    const containerOff = document.querySelector(".container--off")
    const container__start = document.querySelector(".container__start");
    container__start.classList.toggle("container__startOff");
    container_startButton.classList.toggle("container_startButtonOff");
    containerOff.classList.toggle("container");
}

const container_startButton = document.querySelector(".container_startButton");
container_startButton.addEventListener("click", start);














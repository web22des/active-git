// светофор

// находим кнопки

const btnDanger = document.getElementById("danger");
const boxRed = document.getElementById("box-red");

const btnExpectation = document.getElementById("expectation");
const boxYellow = document.getElementById("box-yellow");

const btnAction = document.getElementById("action");
const boxGreen = document.getElementById("box-green");

btnDanger.addEventListener("click", () => {
    console.log("Осторожно Красный свет");
    boxRed.classList.toggle("_active");
});

btnExpectation.addEventListener("click", () => {
    console.log("Внимание желтый свет");
    boxYellow.classList.toggle("_active");
});

btnAction.addEventListener("click", () => {
    console.log("Зеленый свет");
    boxGreen.classList.toggle("_active");
});

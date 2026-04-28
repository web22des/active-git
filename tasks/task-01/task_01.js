// Условие задачи
// Вы - фриланс-разработчик с часовой ставкой 80 долларов, готовы работать 5 часов в день, 5 дней в неделю.
// Ваша задача: Оценить, сможете ли вы выполнить проект (40 часов работы) за ограниченное время (11 дней, исключая выходные) и рассчитать стоимость выполнения проекта.

// =======================

// Узнать по датам количество доступных рабочих дней

//1. Укажите рабочую неделю - 7 дневка, шестидневка, пятидневка
//2. Укажите количество рабочих часов в дне (8, 7, 6 или 5 часов в день)
//3. Стоимость рабочего часа

let workWick = 5; // Рабочая неделя дней
const workingHoursPerDay = 5; // количество рабочих часов в рабочем дне.
const costPerHourOfWork = 80; // Стоимость часа работы
const timeForTheProject = 14; // Время на проект в часах

// 1. Нужно

// let workWeeks = Math.floor(daysWorks / 7); // узнаем сколько полных рабочих недель

function myFn(a) {
    console.log("Успешный запуск функции myFn");
    let info = Math.floor(a / 7);
    info = info * 2;
    return a - info;
}

const jsButton = document.getElementById("idButton");
const jsWorkDays = document.getElementById("idWorkDays");

const jsTestSel = document.getElementById("idTestSel");
workWick = jsTestSel; // переменная в зависимости от выбора селект

jsButton.addEventListener("click", function () {
    console.log("Запуск расчета начат");
    const resultMyFn = myFn(timeForTheProject);
    console.log(resultMyFn);
    jsWorkDays.textContent = `Количество рабочих дней - ${resultMyFn}`;
});

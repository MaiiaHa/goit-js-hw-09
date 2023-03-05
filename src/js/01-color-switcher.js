import throttle from 'lodash.throttle';
/* Завдання 1 - перемикач кольорів
HTML містить кнопки «Start» і «Stop».

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
*/
/*
Напиши скрипт, який після натискання кнопки «Start», раз на секунду 
змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
*/
/*
!!!!Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).!!!!!!
*/
/*
Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 */

// random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

startBtnRef.addEventListener('click', throttle(onStartBtnClick, 1000));
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor(); // статично міняє колір, а треба щоб через рівні проміжки міняло
}
function onStopBtnClick() {
  //  sptopped onStartBtnClick();
}

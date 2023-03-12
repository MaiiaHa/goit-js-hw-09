// import throttle from 'lodash.throttle'; ВИДАЛИТИ НЕ ЗАБУТИ!!!!!
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

//------------------------- 1 variant
let timerId;
stopBtnRef.disabled = true;

startBtnRef.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
  }, 1000); // listen each 1 sec
});

stopBtnRef.addEventListener('click', () => {
  clearInterval(timerId);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
});

//------------------------- 2 variant
// startBtnRef.addEventListener('click', onStartBtnClick);

// function onStartBtnClick() {
//   const timerId = setInterval(colorChange, 1000);
//   function colorChange() {
//     document.body.style.backgroundColor = getRandomHexColor();
//     startBtnRef.disabled = true;
//   }
//   stopBtnRef.addEventListener('click', evt => {
//     if (evt) {
//       clearInterval(timerId);
//       startBtnRef.disabled = false;
//     }
//   });
// }

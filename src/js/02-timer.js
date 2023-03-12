// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// all modules Notiflix
import Notiflix from 'notiflix';

/* Завдання 2 - таймер зворотного відліку
Виконуй це завдання у файлах 02-timer.html і 02-timer.js. 
Напиши скрипт таймера, який здійснює зворотний відлік до певної дати. 
Такий таймер може використовуватися у блогах та інтернет-магазинах, 
сторінках реєстрації подій, під час технічного обслуговування тощо. 
Подивися демо-відео роботи таймера.*/
/*Елементи інтерфейсу​
HTML містить готову розмітку таймера, поля вибору кінцевої 
дати і кнопку, по кліку на яку, таймер повинен запускатися. 
Додай мінімальне оформлення елементів інтерфейсу.
*/
/* <input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
*/
/* Бібліотека flatpickr​

Використовуй бібліотеку flatpickr для того, щоб дозволити 
користувачеві кросбраузерно вибрати кінцеву дату і час в одному
 елементі інтерфейсу. Для того щоб підключити CSS код 
 бібліотеки в проект, необхідно додати ще один імпорт, 
 крім того, що описаний в документації.
Бібліотека очікує, що її ініціалізують на елементі 
input[type="text"], тому ми додали до HTML документу 
поле input#datetime-picker.

<input type="text" id="datetime-picker" />
Другим аргументом функції flatpickr(selector, options) 
можна передати необов'язковий об'єкт параметрів. 
Ми підготували для тебе об'єкт, який потрібен для 
виконання завдання. Розберися, за що відповідає 
кожна властивість в документації «Options», і використовуй 
його у своєму коді.
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
*/
/* Вибір дати​

Метод onClose() з об'єкта параметрів викликається щоразу під час закриття 
елемента інтерфейсу, який створює flatpickr. 
Саме у ньому варто обробляти дату, обрану користувачем. 
Параметр selectedDates - це масив обраних дат, тому ми 
беремо перший елемент.

Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.
*/
/* Відлік часу​

Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера, показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.

Кількість днів може складатися з більше, ніж двох цифр.
Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00.
НЕ БУДЕМО УСКЛАДНЮВАТИ
Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.
Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
*/
/* function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
*/
/* Форматування часу​

Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати. Зверни увагу, що вона не форматує результат. Тобто, якщо залишилося 4 хвилини або будь-якої іншої складової часу, то функція поверне 4, а не 04. В інтерфейсі таймера необхідно додавати 0, якщо в числі менше двох символів. Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
*/
/* Бібліотека повідомлень​

УВАГА
Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.
Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix
*/

// ================================ create stop btn
const stopBtnEl = document.createElement('button'); // button
stopBtnEl.type = 'button';
stopBtnEl.textContent = 'Stop';
stopBtnEl.dataset.stop = '';

document.body.append(stopBtnEl);

//================================== refs

const refs = {
  timer: document.querySelector('.timer'),
  field: document.querySelectorAll('.field'),
  value: document.querySelectorAll('.value'),
  dayRef: document.querySelector('[data-days]'),
  hoursRef: document.querySelector('[data-hours]'),
  minutesRef: document.querySelector('[data-minutes]'),
  secondsRef: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

// ===============================   styles

refs.timer.style.display = 'flex';
refs.timer.style.gap = '10px';

[...refs.field].map(el => {
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.textAlign = 'center';
});

[...refs.value].map(el => {
  el.style.fontSize = '24px';
});
// ===============================  function flatpickr
let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(), // поточна дата і час сьогодні
  minuteIncrement: 1, // налаштування кроку хв.
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    checkData();
  },
};

flatpickr('#datetime-picker', options);

//==========================  timer
refs.startBtn.disabled = true; // start btn do not active
refs.stopBtn.disabled = true; // btn do not active

const timer = {
  intervalId: null,
  isActive: false,
};

// ====================== functions

function checkData() {
  const currentDate = Date.now(); // current time in ms

  // ========================== alerts

  if (selectedDate < currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future', {
      timeout: 1000,
    });
    refs.startBtn.disabled = true; // btn do not active
    // refs.stopBtn.disabled = false; // btn active
    // return;
  } else {
    // add if (!clickedStartBtn) add alert
    Notiflix.Notify.success('Good choise! Please start a timing', {
      timeout: 500,
    });
    refs.startBtn.disabled = false; // btn active
    // refs.stopBtn.disabled = true; // btn do not active

    // timer.startTimer(); ??????
  }
}

function updateTimer({ days, hours, minutes, seconds }) {
  refs.dayRef.textContent = days;
  refs.hoursRef.textContent = hours;
  refs.minutesRef.textContent = minutes;
  refs.secondsRef.textContent = seconds;
}

// added 2 sign for timer for formatting "00"
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// convertMs приймає час - заг.к-сть ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day)); // Remaining days
  const hours = addLeadingZero(Math.floor((ms % day) / hour)); // Remaining hours
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute)); // Remaining minutes
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  ); // Remaining seconds
  return { days, hours, minutes, seconds };
}
// ====================== listeners
refs.startBtn.addEventListener('click', () => {
  if (timer.isActive) {
    return;
  }
  timer.isActive = true;
  // console.log(selectedDate); // WHY this is no consoled but inside setInterval it consoled?

  timer.intervalId = setInterval(() => {
    const todayDate = Date.now(); // current time in ms
    const deltaTime = selectedDate - todayDate;

    if (deltaTime < 0) {
      return;
    }
    // time = { days, hours, minutes, seconds }
    const time = convertMs(deltaTime);
    updateTimer(time);
    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    // console.log('clicked start');
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timer.intervalId); // stopped but not clicked

  timer.isActive = false;
  refs.stopBtn.disabled = true;

  const time = convertMs(0);
  updateTimer(time);

  Notiflix.Notify.info('Please choose another date', {
    timeout: 1000,
  });
  // console.log('clicked stop');
});

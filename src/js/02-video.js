import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
/* HTML містить <iframe> з відео для Vimeo плеєра. 
Напиши скрипт, який буде зберігати поточний час відтворення 
відео у локальне сховище і, після перезавантаження сторінки, 
продовжувати відтворювати відео з цього часу. 
*/

// ініціалізували плеєр https://github.com/vimeo/player.js/#pre-existing-player

const iframe = document.querySelector('iframe'); // вибрали тег з відео
const player = new Vimeo(iframe); // Player прибрали, передали тег відео в вімео плеєр, створили плеєр

// відстежуємо подію оновлення часу відтворення timeupdate, throttle передає час в localStorage з інтервалом через 1сек.

player.on('timeupdate', throttle(updatedTimeVideo, 1000));

function updatedTimeVideo(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

let currentTime = localStorage.getItem('videoplayer-current-time');

//https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
    seconds = currentTime;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        currentTime = 0;
        break;

      default:
        // some other error occurred
        currentTime = 0;
        break;
    }
  });

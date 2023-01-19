import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('play', throttle(onPlay, 1000));
console.log(localStorage);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
